package by.ustsinovich.groupmind.utility;

import by.ustsinovich.groupmind.entity.Project;
import by.ustsinovich.groupmind.model.ProjectMessage;
import by.ustsinovich.groupmind.service.ProjectService;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SocketIoManager {

    public static final String ON_MESSAGE_RECEIVED_EVENT = "project_write";
    public static final String ON_PROJECT_GET_EVENT = "project_get";
    public static final String ON_PROJECT_SAVE_EVENT = "project_save";

    private static final Logger log = LoggerFactory.getLogger(SocketIoManager.class);

    private final SocketIOServer server;
    private final ProjectService projectService;
    private final ProjectMessageMapper projectMessageMapper;

    @Autowired
    public SocketIoManager(SocketIOServer server,
                           ProjectService projectService,
                           ProjectMessageMapper projectMessageMapper) {
        this.server = server;
        this.projectService = projectService;
        this.projectMessageMapper = projectMessageMapper;

        server.addConnectListener(onConnect());
        server.addDisconnectListener(onDisconnect());

        server.addEventListener(ON_MESSAGE_RECEIVED_EVENT, ProjectMessage.class, onMessageReceived());
        server.addEventListener(ON_PROJECT_GET_EVENT, Project.class, onProjectGet());
        server.addEventListener(ON_PROJECT_SAVE_EVENT, Project.class, onProjectSave());
    }


    private ConnectListener onConnect() {
        return (client) -> {
            String roomId = client.getHandshakeData().getSingleUrlParam("roomId");
            client.joinRoom(roomId);
            log.info("Socket ID[{}] - room[{}]  Connected to chat module through", client.getSessionId().toString(), roomId);
        };
    }

    private DisconnectListener onDisconnect() {
        return (client) -> {
            log.debug("Client[{}] - Disconnected from chat module.", client.getSessionId().toString());
        };
    }

    private DataListener<ProjectMessage> onMessageReceived() {
        return (senderClient, data, ackSender) -> {
            log.debug("Client[{}] - Message received from chat module.", senderClient.getSessionId().toString());
            for (var client : senderClient.getNamespace().getRoomOperations(data.getRoomId()).getClients()) {
                if (!client.getSessionId().equals(senderClient.getSessionId())) {
                    client.sendEvent("project_read",
                            projectMessageMapper.mapToJson(new ProjectMessage(null, data.getContent())));
                }
            }
        };
    }

    private DataListener<Project> onProjectGet() {
        return (client, data, ackSender) -> {
            log.debug("Client[{}] - Get project from chat module.", client.getSessionId().toString());
            client.getNamespace().getRoomOperations(data.getRoomId()).sendEvent("project_retrieved",
                    projectService.projectToJson(projectService.getOrCreateByDefaultValues(data.getRoomId())));
        };
    }

    private DataListener<Project> onProjectSave() {
        return (client, data, ackSender) -> {
            log.debug("Client[{}] - Save project from chat module.", client.getSessionId().toString());
            client.getNamespace().getRoomOperations(data.getRoomId()).sendEvent("project_saved",
                    projectService.projectToJson(projectService.update(data)));
        };
    }

}

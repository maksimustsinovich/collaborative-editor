package by.ustsinovich.groupmind.configuration;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SocketIoServerConfiguration {

    @Value("${socketio.server.host}")
    private String host;

    @Value("${socketio.server.port}")
    private Integer port;

    @Bean
    public SocketIOServer getSocketIOServer() {
        var configuration = new SocketIoConfiguration();

        configuration.setHostname(host);
        configuration.setPort(port);

        return new SocketIOServer(configuration);
    }

}

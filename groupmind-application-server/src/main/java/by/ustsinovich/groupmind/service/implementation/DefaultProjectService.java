package by.ustsinovich.groupmind.service.implementation;

import by.ustsinovich.groupmind.entity.Project;
import by.ustsinovich.groupmind.repository.ProjectRepository;
import by.ustsinovich.groupmind.service.ProjectService;
import by.ustsinovich.groupmind.utility.ProjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class DefaultProjectService implements ProjectService {

    private static final Logger log = LoggerFactory.getLogger(DefaultProjectService.class);
    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public DefaultProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper) {
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
    }

    public Project getProjectById(String id) {
        log.debug("getProjectById");
        return projectRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public Project getProjectByRoomId(String roomId) {
        log.debug("getProjectById");
        return projectRepository
                .findByRoomId(roomId)
                .orElseThrow(RuntimeException::new);
    }

    public boolean existsById(String id) {
        return projectRepository.existsById(id);
    }

    @Override
    public boolean existsByRoomId(String roomId) {
        return projectRepository
                .existsByRoomId(roomId);
    }

    @Override
    public String projectToJson(Project project) {
        return projectMapper.mapToJson(project);
    }

    @Override
    public Project jsonToProject(String json) {
        return projectMapper.mapFromJson(json);
    }

    @Override
    public Project getOrCreateByDefaultValues(String roomId) {
        log.info("Creating new project with default values");
        if (existsByRoomId(roomId)) {
            return getProjectByRoomId(roomId);
        }

        var project = new Project();

        project.setRoomId(roomId);
        project.setContent("");

        return create(project);
    }

    public Project create(Project project) {
        log.info("Creating new project: {}", project);
        if (existsByRoomId(project.getRoomId())) {
            throw new RuntimeException("Room already exists");
        }

        return projectRepository.save(project);
    }

    @Override
    public Project update(Project data) {
        log.debug("Updating project: {}", data);
        if (!existsByRoomId(data.getRoomId())) {
            data.setRoomId("");

            return create(data);
        }

        var existing = getProjectByRoomId(data.getRoomId());

        existing.setContent(data.getContent());

        return projectRepository.save(existing);
    }

}

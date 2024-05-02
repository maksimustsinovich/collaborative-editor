package by.ustsinovich.groupmind.service;

import by.ustsinovich.groupmind.entity.Project;

public interface ProjectService {

    Project getProjectByRoomId(String roomId);

    boolean existsByRoomId(String roomId);

    String projectToJson(Project project);

    Project jsonToProject(String json);

    Project getOrCreateByDefaultValues(String roomId);

    Project update(Project data);
}

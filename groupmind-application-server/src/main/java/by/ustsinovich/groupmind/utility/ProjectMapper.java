package by.ustsinovich.groupmind.utility;

import by.ustsinovich.groupmind.entity.Project;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    ObjectMapper mapper = new ObjectMapper();

    public String mapToJson(Project project) {
        try {
            return mapper.writeValueAsString(project);
        } catch (JsonProcessingException jsonProcessingException) {
            throw new RuntimeException();
        }
    }

    public Project mapFromJson(String json) {
        try {
            return mapper.readValue(json, Project.class);
        } catch (JsonProcessingException jsonProcessingException) {
            throw new RuntimeException();
        }
    }

}

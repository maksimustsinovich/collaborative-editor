package by.ustsinovich.groupmind.utility;

import by.ustsinovich.groupmind.model.ProjectMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class ProjectMessageMapper {

    ObjectMapper mapper = new ObjectMapper();

    public String mapToJson(ProjectMessage project) {
        try {
            return mapper.writeValueAsString(project);
        } catch (JsonProcessingException jsonProcessingException) {
            throw new RuntimeException();
        }
    }

    public ProjectMessage mapFromJson(String json) {
        try {
            return mapper.readValue(json, ProjectMessage.class);
        } catch (JsonProcessingException jsonProcessingException) {
            throw new RuntimeException();
        }
    }

}
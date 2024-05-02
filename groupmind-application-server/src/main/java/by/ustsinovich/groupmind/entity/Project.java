package by.ustsinovich.groupmind.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document
public class Project {

    @Id
    private String id;

    private String roomId;

    private String content;

    public Project() {

    }

    public Project(String roomId, String content) {
        this.roomId = roomId;
        this.content = content;
    }

    public Project(String id, String roomId, String content) {
        this.id = id;
        this.roomId = roomId;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return Objects.equals(id, project.id) && Objects.equals(roomId, project.roomId) && Objects.equals(content, project.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roomId, content);
    }

    @Override
    public String toString() {
        return "Project{" +
                "id='" + id + '\'' +
                ", roomId='" + roomId + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}

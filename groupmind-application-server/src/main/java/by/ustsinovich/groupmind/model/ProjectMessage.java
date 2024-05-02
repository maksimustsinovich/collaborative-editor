package by.ustsinovich.groupmind.model;

import java.util.Objects;

public class ProjectMessage {

    private String roomId;

    private String content;

    public ProjectMessage() {

    }

    public ProjectMessage(String roomId, String content) {
        this.roomId = roomId;
        this.content = content;
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
        ProjectMessage that = (ProjectMessage) o;
        return Objects.equals(roomId, that.roomId) && Objects.equals(content, that.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(roomId, content);
    }
}

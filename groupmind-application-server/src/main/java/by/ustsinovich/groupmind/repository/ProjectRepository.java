package by.ustsinovich.groupmind.repository;

import by.ustsinovich.groupmind.entity.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {

    Optional<Project> findByRoomId(String roomId);

    boolean existsByRoomId(String roomId);

}

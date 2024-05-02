package by.ustsinovich.groupmind;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GroupmindApplicationServerApplication {

    private final SocketIOServer server;

    @Autowired
    public GroupmindApplicationServerApplication(SocketIOServer server) {
        this.server = server;
    }

    public static void main(String[] args) {
        SpringApplication.run(GroupmindApplicationServerApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner() {
        return (args) -> server.start();
    }

}

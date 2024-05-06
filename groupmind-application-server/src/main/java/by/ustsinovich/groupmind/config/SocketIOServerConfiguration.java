package by.ustsinovich.groupmind.config;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SocketIOServerConfiguration {

    @Value("${socketio.server.hostname}")
    private String hostname;

    @Value("${socketio.server.port}")
    private Integer port;

    @Bean
    public SocketIOServer socketIOServer() {
        SocketIOConfiguration configuration = new SocketIOConfiguration();

        configuration.setHostname(hostname);
        configuration.setPort(port);

        return new SocketIOServer(configuration);
    }

}

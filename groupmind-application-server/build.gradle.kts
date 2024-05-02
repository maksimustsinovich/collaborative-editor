plugins {
    java
    id("org.springframework.boot") version "3.2.5"
    id("io.spring.dependency-management") version "1.1.4"
}
val springCloudVersion by extra("2023.0.1")

group = "by.ustsinovich"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_21
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-amqp")
    implementation("org.springframework.boot:spring-boot-starter-integration")
    implementation("org.springframework.boot:spring-boot-configuration-processor")
    implementation("org.springframework.integration:spring-integration-amqp")
    implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
    implementation("org.springframework.integration:spring-integration-mongodb")
    // https://mvnrepository.com/artifact/com.corundumstudio.socketio/netty-socketio
    implementation("com.corundumstudio.socketio:netty-socketio:2.0.9")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.cloud:spring-cloud-function-web")
    implementation("org.springframework.integration:spring-integration-http")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.integration:spring-integration-http")
    implementation("org.springframework.cloud:spring-cloud-function-web")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.amqp:spring-rabbit-test")
    testImplementation("org.springframework.integration:spring-integration-test")
    "developmentOnly"("org.springframework.boot:spring-boot-devtools")
}

dependencyManagement {
    imports {
        mavenBom("org.springframework.cloud:spring-cloud-dependencies:$springCloudVersion")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

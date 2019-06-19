FROM openjdk:8
ADD target/springbootprojects-0.0.1-SNAPSHOT.jar SpringBootExercises.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "SpringBootExercises.jar"]

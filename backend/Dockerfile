# Stage 1: Build
FROM eclipse-temurin:21-jdk-jammy as builder

WORKDIR /workspace/app

# Copy build files
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Download dependencies (cached layer)
RUN ./mvnw dependency:go-offline -B

# Build application
COPY src src
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copy built JAR
COPY --from=builder /workspace/app/target/*.jar app.jar

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Production JVM settings
ENV JAVA_OPTS="-Dspring.profiles.active=prod -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8080

ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]
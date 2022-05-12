# Java SDK

## Getting started

pom.xml
```xml
<repositories>
    <repository>
        <id>repsy</id>
        <name>My Private Maven Repository on Repsy</name>
        <url>https://repo.repsy.io/mvn/apistream/default/</url>
    </repository>
</repositories>
<dependencies>
    <dependency>
        <groupId>stream.api</groupId>
        <artifactId>api.stream-sdk</artifactId>
        <version>1.0.16</version>
    </dependency>
</dependencies>
```

build.sbt
```sbt
resolvers += "API Stream" at "https://repo.repsy.io/mvn/apistream/default/"
libraryDependencies ++= Seq(
  "stream.api" % "api.stream-sdk" % "1.0.16"
)
```

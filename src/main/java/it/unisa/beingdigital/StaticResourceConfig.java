package it.unisa.beingdigital;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Dice a Spring di servire TUTTO ciò che c’è in /static
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/");
    }
}

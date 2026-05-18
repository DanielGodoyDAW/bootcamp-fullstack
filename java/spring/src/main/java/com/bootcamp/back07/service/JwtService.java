package com.bootcamp.back07.service;

import com.bootcamp.back07.model.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.stream.Collectors;

@Service
public class JwtService {
    private final JwtEncoder jwtEncoder;
    private final long expirationMinutes;

    public JwtService(JwtEncoder jwtEncoder, @Value("${app.jwt.expiration-minutes}") long expirationMinutes) {
        this.jwtEncoder = jwtEncoder;
        this.expirationMinutes = expirationMinutes;
    }

    public String generarToken(Usuario usuario) {
        Instant now = Instant.now();
        String roles = usuario.getRoles()
                .stream()
                .map(Enum::name)
                .collect(Collectors.joining(" "));
        JwsHeader jwsHeader = JwsHeader.with(MacAlgorithm.HS256).build();
        // ROL_USER ROL_ADMIN ROL_OTRO
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("OnlyFran")
                .issuedAt(now)
                .expiresAt(now.plus(expirationMinutes, ChronoUnit.MINUTES))
                .subject(usuario.getEmail())
                .claim("roles", roles)
                .build();
        return jwtEncoder
                .encode(JwtEncoderParameters
                        .from(jwsHeader, claims))
                .getTokenValue();
    }
}

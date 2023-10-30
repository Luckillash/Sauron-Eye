const fragmentShader = `
precision mediump float; // Soluciona error con Raw Shader Material

varying vec3 vPosition;

varying vec3 vNormal;

varying vec2 vUv;

uniform float uTime;

uniform vec2 uResolution;

float sdfCircle(vec2 p, float r) {

    return length(p) - r;

}

void main() {

    // Coordenadas UV.

    vec2 uv = vUv - 0.5;

    uv = uv * 0.10;

    uv = uv * 100.0;

    // uv = uv * 2.0;

    // uv = uv * uResolution / 100.0;

    // Colores básicos.

    vec3 negro = vec3(0.0);

    vec3 blanco = vec3(1.0);

    vec3 rojo =  vec3(1.0, 0.0, 0.0);

    vec3 azul =  vec3(0.65, 0.85, 1.0);

    vec3 naranja =  vec3(0.9, 0.6, 0.3);

    vec3 color = rojo;

    color = vec3(uv, 0.0);

    // Dibujar círculo.

    float radius = 2.0;

    vec2 center = vec2(0.0, 0.0);

    // center = vec2(sin(2.0 * uTime), 0.0);

    float distanceToCircle = sdfCircle(uv - center, radius);

    color = distanceToCircle > 0.0 ? naranja : azul;

    // Agregar borde negro al círculo.

    // color = color * exp(distanceToCircle);

    // color = color * exp(2.0 * distanceToCircle);

    // color = color * exp(-2.0 * abs(distanceToCircle));

    // color = color * (1.0 - exp(-2.0 * abs(distanceToCircle))); // Principal

    color = color * (0.92 - exp(-2.0 * abs(distanceToCircle)));

    // Agregar ondas.

    // color = color * 0.8 + color * 0.2 * sin(50.0 * distanceToCircle);

    color = color * 0.8 + color * 0.2 * sin(50.0 * distanceToCircle - 4.0  * uTime);

    // Agregar borde blanco al círculo.

    // color = mix(blanco, color, step(0.1, distanceToCircle));

    // color = mix(blanco, color, step(0.1, abs(distanceToCircle)));

    // color = mix(blanco, color, smoothstep(0.0, 0.1, abs(distanceToCircle)));

    // color = mix(blanco, color, abs(distanceToCircle));

    color = mix(blanco, color, 2.0 * abs(distanceToCircle));

    // color = mix(blanco, color, 4.0 * abs(distanceToCircle));


    gl_FragColor = vec4(color, 1.0);

}
`

export default fragmentShader
const fragmentShaderSource = "precision lowp float;\n\
uniform sampler2D samplerVideo;\n\
varying vec2 vUVvideo;\n\
varying float vY, vNormalDotZ;\n\
void main() {\n\
  vec3 videoColor = texture2D(samplerVideo, vUVvideo).rgb;\n\
  float darkenCoeff = smoothstep(-0.15, 0.05, vY);\n\
  float borderCoeff = smoothstep(0.0, 0.55, vNormalDotZ);\n\
  gl_FragColor = vec4(videoColor * (1.-darkenCoeff), borderCoeff );\n\
}";
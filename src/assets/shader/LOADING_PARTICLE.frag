varying float vAlpha;
uniform sampler2D diffuse;
varying vec2 vUv;
void main(){
  gl_FragColor = texture2D(diffuse,vUv);
  gl_FragColor.a *= vAlpha;
}

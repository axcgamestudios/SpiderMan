import{$ as e,$n as t,$r as n,$t as r,A as i,An as a,Ar as o,At as s,B as c,Br as l,Bt as u,C as d,Cr as f,Ct as p,D as m,Dr as h,Dt as g,E as _,Er as v,Et as y,F as b,Fn as x,Fr as S,Ft as C,G as w,Gn as T,Gr as E,Gt as D,H as O,Hr as k,Ht as A,I as ee,In as j,Ir as te,It as ne,J as re,Jn as ie,Jr as ae,Jt as oe,K as se,Kn as ce,Kr as M,Kt as le,L as N,Ln as P,Lr as ue,Lt as de,M as F,Mn as fe,Mr as pe,Mt as me,N as he,Nn as ge,Nr as _e,Nt as ve,O as ye,Or as be,Ot as xe,P as Se,Pr as Ce,Pt as we,Qn as Te,Qr as Ee,Qt as De,R as Oe,Rn as ke,Rr as I,Rt as Ae,S as L,Sr as je,St as R,T as Me,Tr as z,Tt as Ne,U as Pe,Un as Fe,Ur as B,Ut as Ie,V as Le,Vr as Re,Vt as ze,Wn as Be,Wr as Ve,Wt as He,X as Ue,Xn as We,Xr as Ge,Y as Ke,Yn as qe,Yr as Je,Z as Ye,Zn as Xe,Zr as Ze,_ as Qe,_i as $e,_r as et,_t as tt,a as nt,ai as rt,ar as it,at,b as ot,br as st,bt as ct,ci as lt,cr as ut,ct as dt,d as ft,di as pt,dr as mt,dt as ht,ei as gt,er as _t,et as vt,f as yt,fi as bt,fr as xt,ft as St,g as Ct,gi as wt,gr as Tt,gt as Et,h as Dt,hi as Ot,hr as V,ht as kt,i as At,ii as jt,ir as Mt,it as Nt,j as H,jn as U,jr as Pt,jt as Ft,k as It,kn as Lt,kr as Rt,kt as zt,l as Bt,li as Vt,lt as Ht,m as Ut,mi as Wt,mr as Gt,mt as Kt,n as qt,ni as Jt,nr as Yt,nt as Xt,o as Zt,oi as Qt,or as $t,ot as en,p as tn,pi as nn,pr as rn,pt as an,q as on,qr as sn,r as cn,ri as ln,rr as un,rt as dn,s as fn,si as pn,st as mn,t as hn,ti as gn,tr as _n,tt as vn,u as yn,ui as bn,ur as xn,ut as Sn,vi as Cn,vr as wn,vt as Tn,w as En,wr as Dn,wt as W,x as On,xr as kn,xt as G,y as An,yr as jn,yt as Mn,z as Nn,zr as Pn,zt as Fn}from"./index-jGRDIjhA.js";import{t as In}from"./supabase-browser-BIEfYULh.js";function Ln(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Rn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zn={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new L(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new L(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new L(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new L(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Bn={basic:{uniforms:be([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:zn.meshbasic_vert,fragmentShader:zn.meshbasic_frag},lambert:{uniforms:be([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new L(0)},envMapIntensity:{value:1}}]),vertexShader:zn.meshlambert_vert,fragmentShader:zn.meshlambert_frag},phong:{uniforms:be([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new L(0)},specular:{value:new L(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zn.meshphong_vert,fragmentShader:zn.meshphong_frag},standard:{uniforms:be([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new L(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zn.meshphysical_vert,fragmentShader:zn.meshphysical_frag},toon:{uniforms:be([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new L(0)}}]),vertexShader:zn.meshtoon_vert,fragmentShader:zn.meshtoon_frag},matcap:{uniforms:be([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:zn.meshmatcap_vert,fragmentShader:zn.meshmatcap_frag},points:{uniforms:be([K.points,K.fog]),vertexShader:zn.points_vert,fragmentShader:zn.points_frag},dashed:{uniforms:be([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zn.linedashed_vert,fragmentShader:zn.linedashed_frag},depth:{uniforms:be([K.common,K.displacementmap]),vertexShader:zn.depth_vert,fragmentShader:zn.depth_frag},normal:{uniforms:be([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:zn.meshnormal_vert,fragmentShader:zn.meshnormal_frag},sprite:{uniforms:be([K.sprite,K.fog]),vertexShader:zn.sprite_vert,fragmentShader:zn.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zn.background_vert,fragmentShader:zn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:zn.backgroundCube_vert,fragmentShader:zn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zn.cube_vert,fragmentShader:zn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zn.equirect_vert,fragmentShader:zn.equirect_frag},distance:{uniforms:be([K.common,K.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zn.distance_vert,fragmentShader:zn.distance_frag},shadow:{uniforms:be([K.lights,K.fog,{color:{value:new L(0)},opacity:{value:1}}]),vertexShader:zn.shadow_vert,fragmentShader:zn.shadow_frag}};Bn.physical={uniforms:be([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new L(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new L(0)},specularColor:{value:new L(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:zn.meshphysical_vert,fragmentShader:zn.meshphysical_frag};var Vn={r:0,b:0,g:0},Hn=new p,Un=new R;Un.set(-1,0,0,0,1,0,0,0,1);function Wn(e,t,n,r,i,a){let o=new L(0),s=i===!0?0:1,c,l,f=null,p=0,m=null;function h(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function g(t){let r=!1,i=h(t);i===null?y(o,s):i&&i.isColor&&(y(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let i=h(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Dt(1,1,1),new ce({name:`BackgroundCubeMaterial`,uniforms:kn(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Un),l.material.toneMapped=d.getTransfer(i.colorSpace)!==Be,(f!==i||p!==i.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,f=i,p=i.version,m=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new u(2,2),new ce({name:`BackgroundMaterial`,uniforms:kn(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=d.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(f!==i||p!==i.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,f=i,p=i.version,m=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function y(t,r){t.getRGB(Vn,v(e)),n.buffers.color.setClear(Vn.r,Vn.g,Vn.b,r,a)}function b(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,y(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,y(o,s)},render:g,addToRenderList:_,dispose:b}}function Gn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Kn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(o(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&o(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Jn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fn,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yn=4,Xn=[.125,.215,.35,.446,.526,.582],Zn=20,Qn=256,$n=new de,er=new L,tr=null,nr=0,rr=0,ir=!1,ar=new V,or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ar}=i;tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tr,nr,rr),this._renderer.xr.enabled=ir,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:se,format:De,colorSpace:an,depthBuffer:!1},r=cr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cr(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sr(r)),this._blurMaterial=dr(r,e,t),this._ggxMaterial=ur(r,e,t)}return r}_compileMaterial(e){let t=new W(new Qe,e);this._renderer.compile(t,$n)}_sceneToCubeUV(e,t,n,r,i){let a=new Ae(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(er),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Dt,new Ne({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(er),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;lr(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;lr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$n)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Yn?n-d+Yn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,lr(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$n),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,lr(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$n)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,s){let c=this._renderer,l=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Dn(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[r];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(i)?Math.PI/(2*f):2*Math.PI/39,m=i/p,h=isFinite(i)?1+Math.floor(3*m):Zn;h>Zn&&o(`sigmaRadians, ${i}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Zn}`);let g=[],_=0;for(let e=0;e<Zn;++e){let t=e/m,n=Math.exp(-t*t/2);g.push(n),e===0?_+=n:e<h&&(_+=2*n)}for(let e=0;e<g.length;e++)g[e]=g[e]/_;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=a===`latitudinal`,s&&(d.poleAxis.value=s);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let y=this._sizeLods[r];lr(t,3*y*(r>v-Yn?r-v+Yn:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(u,$n)}};function sr(e){let t=[],n=[],r=[],i=e,a=e-Yn+1+Xn.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Yn?s=Xn[o-e+Yn-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Qe;h.setAttribute(`position`,new Ct(f,3)),h.setAttribute(`uv`,new Ct(p,2)),h.setAttribute(`faceIndex`,new Ct(m,1)),r.push(new W(h,null)),i>Yn&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function cr(e,t,n){let r=new jn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function lr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ur(e,t,n){return new ce({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dr(e,t,n){let r=new Float32Array(Zn),i=new V(0,1,0);return new ce({name:`SphericalGaussianBlur`,defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fr(){return new ce({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pr(){return new ce({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var hr=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new m(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dt(5,5,5),i=new ce({name:`CubemapFromEquirect`,uniforms:kn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Sn),new Me(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new hr(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new or(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new or(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _r(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Pt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Mt:un)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function yr(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function br(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Dn(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xr(e,t,n){let r=new WeakMap,a=new Tt;function o(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=s.morphAttributes.position!==void 0,n=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),o===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new i(g,m,h,d);_.type=Le,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=c[t],i=l[t],s=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let c=t*v;e===!0&&(a.fromBufferAttribute(r,t),g[d+c+0]=a.x,g[d+c+1]=a.y,g[d+c+2]=a.z,g[d+c+3]=0),n===!0&&(a.fromBufferAttribute(i,t),g[d+c+4]=a.x,g[d+c+5]=a.y,g[d+c+6]=a.z,g[d+c+7]=0),o===!0&&(a.fromBufferAttribute(s,t),g[d+c+8]=a.x,g[d+c+9]=a.y,g[d+c+10]=a.z,g[d+c+11]=s.itemSize===4?a.w:1)}}f={count:d,texture:_,size:new Gt(m,h)},r.set(s,f);function y(){_.dispose(),r.delete(s),s.removeEventListener(`dispose`,y)}s.addEventListener(`dispose`,y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,n);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:o}}function Sr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wr(e,t,n,r,i,a){let o=new jn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Se(t,n):void 0}),s=new jn(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}),l=new Qe;l.setAttribute(`position`,new c([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new c([0,2,0,0,2,0],2));let u=new U({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new W(l,u),p=new de(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,u.defines={},d.getTransfer(m)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Cr[h];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),l.dispose(),u.dispose()}}var Tr=new t,Er=new Se(1,1),Dr=new i,Or=new It,kr=new m,Ar=[],q=[],jr=new Float32Array(16),Mr=new Float32Array(9),Nr=new Float32Array(4);function Pr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ar[i];if(a===void 0&&(a=new Float32Array(i),Ar[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Fr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ir(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Lr(e,t){let n=q[t];n===void 0&&(n=new Int32Array(t),q[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Rr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function zr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fr(n,t))return;e.uniform2fv(this.addr,t),Ir(n,t)}}function Br(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fr(n,t))return;e.uniform3fv(this.addr,t),Ir(n,t)}}function Vr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fr(n,t))return;e.uniform4fv(this.addr,t),Ir(n,t)}}function Hr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ir(n,t)}else{if(Fr(n,r))return;Nr.set(r),e.uniformMatrix2fv(this.addr,!1,Nr),Ir(n,r)}}function Ur(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ir(n,t)}else{if(Fr(n,r))return;Mr.set(r),e.uniformMatrix3fv(this.addr,!1,Mr),Ir(n,r)}}function Wr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ir(n,t)}else{if(Fr(n,r))return;jr.set(r),e.uniformMatrix4fv(this.addr,!1,jr),Ir(n,r)}}function Gr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Kr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fr(n,t))return;e.uniform2iv(this.addr,t),Ir(n,t)}}function qr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fr(n,t))return;e.uniform3iv(this.addr,t),Ir(n,t)}}function Jr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fr(n,t))return;e.uniform4iv(this.addr,t),Ir(n,t)}}function Yr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Xr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fr(n,t))return;e.uniform2uiv(this.addr,t),Ir(n,t)}}function Zr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fr(n,t))return;e.uniform3uiv(this.addr,t),Ir(n,t)}}function Qr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fr(n,t))return;e.uniform4uiv(this.addr,t),Ir(n,t)}}function $r(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Er.compareFunction=n.isReversedDepthBuffer()?518:515,a=Er):a=Tr,n.setTexture2D(t||a,i)}function ei(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Or,i)}function ti(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||kr,i)}function ni(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Dr,i)}function ri(e){switch(e){case 5126:return Rr;case 35664:return zr;case 35665:return Br;case 35666:return Vr;case 35674:return Hr;case 35675:return Ur;case 35676:return Wr;case 5124:case 35670:return Gr;case 35667:case 35671:return Kr;case 35668:case 35672:return qr;case 35669:case 35673:return Jr;case 5125:return Yr;case 36294:return Xr;case 36295:return Zr;case 36296:return Qr;case 35678:case 36198:case 36298:case 36306:case 35682:return $r;case 35679:case 36299:case 36307:return ei;case 35680:case 36300:case 36308:case 36293:return ti;case 36289:case 36303:case 36311:case 36292:return ni}}function ii(e,t){e.uniform1fv(this.addr,t)}function ai(e,t){let n=Pr(t,this.size,2);e.uniform2fv(this.addr,n)}function oi(e,t){let n=Pr(t,this.size,3);e.uniform3fv(this.addr,n)}function si(e,t){let n=Pr(t,this.size,4);e.uniform4fv(this.addr,n)}function ci(e,t){let n=Pr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function li(e,t){let n=Pr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ui(e,t){let n=Pr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function di(e,t){e.uniform1iv(this.addr,t)}function fi(e,t){e.uniform2iv(this.addr,t)}function pi(e,t){e.uniform3iv(this.addr,t)}function mi(e,t){e.uniform4iv(this.addr,t)}function hi(e,t){e.uniform1uiv(this.addr,t)}function gi(e,t){e.uniform2uiv(this.addr,t)}function _i(e,t){e.uniform3uiv(this.addr,t)}function vi(e,t){e.uniform4uiv(this.addr,t)}function yi(e,t,n){let r=this.cache,i=t.length,a=Lr(n,i);Fr(r,a)||(e.uniform1iv(this.addr,a),Ir(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Er:Tr;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function bi(e,t,n){let r=this.cache,i=t.length,a=Lr(n,i);Fr(r,a)||(e.uniform1iv(this.addr,a),Ir(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Or,a[e])}function xi(e,t,n){let r=this.cache,i=t.length,a=Lr(n,i);Fr(r,a)||(e.uniform1iv(this.addr,a),Ir(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||kr,a[e])}function Si(e,t,n){let r=this.cache,i=t.length,a=Lr(n,i);Fr(r,a)||(e.uniform1iv(this.addr,a),Ir(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Dr,a[e])}function Ci(e){switch(e){case 5126:return ii;case 35664:return ai;case 35665:return oi;case 35666:return si;case 35674:return ci;case 35675:return li;case 35676:return ui;case 5124:case 35670:return di;case 35667:case 35671:return fi;case 35668:case 35672:return pi;case 35669:case 35673:return mi;case 5125:return hi;case 36294:return gi;case 36295:return _i;case 36296:return vi;case 35678:case 36198:case 36298:case 36306:case 35682:return yi;case 35679:case 36299:case 36307:return bi;case 35680:case 36300:case 36308:case 36293:return xi;case 36289:case 36303:case 36311:case 36292:return Si}}var wi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ri(t.type)}},Ti=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ci(t.type)}},Ei=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Di=/(\w+)(\])?(\[|\.)?/g;function Oi(e,t){e.seq.push(t),e.map[t.id]=t}function ki(e,t,n){let r=e.name,i=r.length;for(Di.lastIndex=0;;){let a=Di.exec(r),o=Di.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Oi(n,l===void 0?new wi(s,e,t):new Ti(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ei(s),Oi(n,e)),n=e}}}var Ai=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ki(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ji(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Mi=37297,Ni=0;function Pi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Fi=new R;function Ii(e){d._getMatrix(Fi,d.workingColorSpace,e);let t=`mat3( ${Fi.elements.map(e=>e.toFixed(4))} )`;switch(d.getTransfer(e)){case Kt:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return o(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Li(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Pi(e.getShaderSource(t),r)}return i}function Ri(e,t){let n=Ii(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var zi={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Bi(e,t){let n=zi[t];return n===void 0?(o(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Vi=new V;function Hi(){return d.getLuminanceCoefficients(Vi),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Vi.x.toFixed(4)}, ${Vi.y.toFixed(4)}, ${Vi.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ui(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ki).join(`
`)}function Wi(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Gi(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ki(e){return e!==``}function qi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ji(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yi=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xi(e){return e.replace(Yi,Qi)}var Zi=new Map;function Qi(e,t){let n=zn[t];if(n===void 0){let e=Zi.get(t);if(e!==void 0)n=zn[e],o(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Xi(n)}var $i=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ea(e){return e.replace($i,ta)}function ta(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function na(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ra={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ia(e){return ra[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var aa={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function oa(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:aa[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var sa={302:`ENVMAP_MODE_REFRACTION`};function ca(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:sa[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var la={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ua(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:la[e.combine]||`ENVMAP_BLENDING_NONE`}function da(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function fa(e,t,n,r){let i=e.getContext(),a=n.defines,s=n.vertexShader,c=n.fragmentShader,l=ia(n),u=oa(n),d=ca(n),f=ua(n),p=da(n),m=Ui(n),h=Wi(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ki).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ki).join(`
`),v.length>0&&(v+=`
`)):(_=[na(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ki).join(`
`),v=[na(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zn.tonemapping_pars_fragment,n.toneMapping===0?``:Bi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zn.colorspace_pars_fragment,Ri(`linearToOutputTexel`,n.outputColorSpace),Hi(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ki).join(`
`)),s=Xi(s),s=qi(s,n),s=Ji(s,n),c=Xi(c),c=qi(c,n),c=Ji(c,n),s=ea(s),c=ea(c),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=ji(i,i.VERTEX_SHADER,b),C=ji(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,s=n.trim(),c=r.trim(),l=a.trim(),u=!0,d=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Li(i,S,`vertex`),n=Li(i,C,`fragment`);Dn(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}}else s===``?(c===``||l===``)&&(d=!1):o(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new Ai(i,g),E=Gi(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Mi)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ni++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var pa=0,ma=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ha(e),t.set(e,n)),n}},ha=class{constructor(e){this.id=pa++,this.code=e,this.usedTimes=0}};function ga(e){return e===1030||e===37490||e===36285}function _a(e,t,n,r,i,a){let s=new Nt,c=new ma,l=new Set,u=[],f=new Map,p=r.logarithmicDepthBuffer,m=r.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(i,s,u,f,_,v){let y=f.fog,b=_.geometry,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?f.environment:null,S=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,C=t.get(i.envMap||x,S),w=C&&C.mapping===306?C.image.height:null,T=h[i.type];i.precision!==null&&(m=r.getMaxPrecision(i.precision),m!==i.precision&&o(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,m,`instead.`));let E=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,D=E===void 0?0:E.length,O=0;b.morphAttributes.position!==void 0&&(O=1),b.morphAttributes.normal!==void 0&&(O=2),b.morphAttributes.color!==void 0&&(O=3);let k,A,ee,j;if(T){let e=Bn[T];k=e.vertexShader,A=e.fragmentShader}else{k=i.vertexShader,A=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),ee=e.id,j=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=_.isInstancedMesh===!0,ie=_.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!C,ce=!!i.aoMap,M=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,P=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,F=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=fe&&!!i.anisotropyMap,ye=pe&&!!i.clearcoatMap,be=pe&&!!i.clearcoatNormalMap,xe=pe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,I=_e&&!!i.thicknessMap,Ae=!!i.gradientMap,L=!!i.alphaMap,je=i.alphaTest>0,R=!!i.alphaHash,Me=!!i.extensions,z=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(z=e.toneMapping);let Ne={shaderID:T,shaderType:i.type,shaderName:i.name,vertexShader:k,fragmentShader:A,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:m,batching:ie,batchingColor:ie&&_._colorsTexture!==null,instancing:re,instancingColor:re&&_.instanceColor!==null,instancingMorph:re&&_.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:d.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&C.mapping,envMapCubeUVHeight:w,aoMap:ce,lightMap:M,bumpMap:le,normalMap:N,displacementMap:P,emissiveMap:ue,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&ga(i.normalMap.format),metalnessMap:de,roughnessMap:F,anisotropy:fe,anisotropyMap:ve,clearcoat:pe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:I,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:L,alphaTest:je,alphaHash:R,combine:i.combine,mapUv:ae&&g(i.map.channel),aoMapUv:ce&&g(i.aoMap.channel),lightMapUv:M&&g(i.lightMap.channel),bumpMapUv:le&&g(i.bumpMap.channel),normalMapUv:N&&g(i.normalMap.channel),displacementMapUv:P&&g(i.displacementMap.channel),emissiveMapUv:ue&&g(i.emissiveMap.channel),metalnessMapUv:de&&g(i.metalnessMap.channel),roughnessMapUv:F&&g(i.roughnessMap.channel),anisotropyMapUv:ve&&g(i.anisotropyMap.channel),clearcoatMapUv:ye&&g(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(i.sheenRoughnessMap.channel),specularMapUv:Ee&&g(i.specularMap.channel),specularColorMapUv:De&&g(i.specularColorMap.channel),specularIntensityMapUv:Oe&&g(i.specularIntensityMap.channel),transmissionMapUv:ke&&g(i.transmissionMap.channel),thicknessMapUv:I&&g(i.thicknessMap.channel),alphaMapUv:L&&g(i.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(N||fe),vertexNormals:!!b.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!b.attributes.uv&&(ae||L),fog:!!y,useFog:i.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||b.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ne,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:O,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:v.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:z,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&d.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&d.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=Bn[t];n=it.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=f.get(n);return r===void 0?(r=new fa(e,n,t,i),u.push(r),f.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),f.delete(e.cacheKey),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function va(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ya(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ba(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||ya),r.length>1&&r.sort(t||ba),i.length>1&&i.sort(t||ba),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Sa(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new xa,e.set(t,[i])):n>=r.length?(i=new xa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ca(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new L};break;case`SpotLight`:n={position:new V,direction:new V,color:new L,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new L,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new L,groundColor:new L};break;case`RectAreaLight`:n={color:new L,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function wa(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ta=0;function Ea(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Da(e){let t=new Ca,n=wa(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new p,o=new p;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ea);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ta++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Oa(e){let t=new Da(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ka(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Oa(e),t.set(n,[a])):r>=i.length?(a=new Oa(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Aa=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ja=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ma=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Na=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Pa=new p,Fa=new V,Ia=new V;function La(e,t,n){let r=new Pe,i=new Gt,a=new Gt,s=new Tt,c=new y,l=new g,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Aa,fragmentShader:ja}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Qe;h.setAttribute(`position`,new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new W(h,p),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,n,c){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(o(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=x!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){o(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let h=f.getFrameExtents();i.multiply(h),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/h.x),i.x=a.x*h.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/h.y),i.y=a.y*h.y,f.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){o(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new jn(i.x,i.y,{format:Lt,type:se,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new Se(i.x,i.y,Le),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=F,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Ft,f.map.depthTexture.magFilter=Ft}else u.isPointLight?(f.map=new hr(i.x),f.map.depthTexture=new _(i.x,xn)):(f.map=new jn(i.x,i.y),f.map.depthTexture=new Se(i.x,i.y,xn)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=F,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=Sn,f.map.depthTexture.magFilter=Sn):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Ft,f.map.depthTexture.magFilter=Ft);f.camera.updateProjectionMatrix()}let v=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(s)}if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Fa.setFromMatrixPosition(u.matrixWorld),e.position.copy(Fa),Ia.copy(e.position),Ia.add(Ma[t]),e.up.copy(Na[t]),e.lookAt(Ia),e.updateMatrixWorld(),n.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Pa,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);r=f.getFrustum(),w(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&S(f,c),f.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(l,u,f)};function S(n,r){let a=t.update(v);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new jn(i.x,i.y,{format:Lt,type:se})),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,v,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,v,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=C(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=C(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)w(c[e],i,a,o,s)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ra(e,t){function n(){let t=!1,n=new Tt,r=null,i=new Tt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=P[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new L(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Tt().fromArray(oe),M=new Tt().fromArray(se);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let N={};N[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),N[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),N[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),ue(e.CULL_FACE),ge(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function F(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Dn(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Dn(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Dn(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Dn(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Se(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),ie!==t&&(e.activeTexture(t),ie=t)}function we(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+j-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||N[t]),i.type=t,i.texture=n)}function Te(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function R(){try{e.texStorage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function B(t){M.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),M.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new L(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ce.set(0,0,e.canvas.width,e.canvas.height),M.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:F,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Me,texImage3D:z,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:R,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:I,compressedTexSubImage3D:Ae,scissor:Fe,viewport:B,reset:Re}}function za(e,t,n,r,i,a,c){let l=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,u=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Gt,m=new WeakMap,h=new Set,g,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function y(e,t){return v?new OffscreenCanvas(e,t):f(`canvas`)}function b(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);g===void 0&&(g=y(n,a));let s=t?y(n,a):g;return s.width=n,s.height=a,s.getContext(`2d`).drawImage(e,0,0,n,a),o(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),s}return`data`in e&&o(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function x(e){return e.generateMipmaps}function S(t){e.generateMipmap(t)}function C(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(n,r,i,a,s,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];o(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;a&&(l=t.get(`EXT_texture_norm16`),l||o(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(i===e.FLOAT&&(u=e.R32F),i===e.HALF_FLOAT&&(u=e.R16F),i===e.UNSIGNED_BYTE&&(u=e.R8),i===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),i===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.R8UI),i===e.UNSIGNED_SHORT&&(u=e.R16UI),i===e.UNSIGNED_INT&&(u=e.R32UI),i===e.BYTE&&(u=e.R8I),i===e.SHORT&&(u=e.R16I),i===e.INT&&(u=e.R32I)),r===e.RG&&(i===e.FLOAT&&(u=e.RG32F),i===e.HALF_FLOAT&&(u=e.RG16F),i===e.UNSIGNED_BYTE&&(u=e.RG8),i===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),i===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RG8UI),i===e.UNSIGNED_SHORT&&(u=e.RG16UI),i===e.UNSIGNED_INT&&(u=e.RG32UI),i===e.BYTE&&(u=e.RG8I),i===e.SHORT&&(u=e.RG16I),i===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGB8UI),i===e.UNSIGNED_SHORT&&(u=e.RGB16UI),i===e.UNSIGNED_INT&&(u=e.RGB32UI),i===e.BYTE&&(u=e.RGB8I),i===e.SHORT&&(u=e.RGB16I),i===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),i===e.UNSIGNED_INT&&(u=e.RGBA32UI),i===e.BYTE&&(u=e.RGBA8I),i===e.SHORT&&(u=e.RGBA16I),i===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),i===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=c?Kt:d.getTransfer(s);i===e.FLOAT&&(u=e.RGBA32F),i===e.HALF_FLOAT&&(u=e.RGBA16F),i===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),i===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function T(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,o(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function E(e,t){return x(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),k(t),t.isVideoTexture&&m.delete(t),t.isHTMLTexture&&h.delete(t)}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),ee(t)}function k(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=_.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&A(e),Object.keys(i).length===0&&_.delete(n)}r.remove(e)}function A(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=_.get(i);delete a[n.__cacheKey],c.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),c.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function ae(){let e=te;return e>=i.maxTextures&&o(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&Ae(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)o(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)o(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let N={[j]:e.REPEAT,[On]:e.CLAMP_TO_EDGE,[s]:e.MIRRORED_REPEAT},P={[Ft]:e.NEAREST,[ve]:e.NEAREST_MIPMAP_NEAREST,[me]:e.NEAREST_MIPMAP_LINEAR,[Sn]:e.LINEAR,[St]:e.LINEAR_MIPMAP_NEAREST,[ht]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&o(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,N[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,N[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,N[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,P[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,P[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function F(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D));let i=n.source,a=_.get(i);a===void 0&&(a={},_.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,s,c){let l=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(l=e.TEXTURE_3D);let u=F(t,s),f=s.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let p=r.get(f);if(f.version!==p.__version||u===!0){if(n.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&s.image instanceof ImageBitmap)){let t=d.getPrimaries(d.workingColorSpace),r=s.colorSpace===``?null:d.getPrimaries(s.colorSpace),i=s.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let t=b(s.image,!1,i.maxTextureSize);t=L(s,t);let r=a.convert(s.format,s.colorSpace),m=a.convert(s.type),g=w(s.internalFormat,r,m,s.normalized,s.colorSpace,s.isVideoTexture);de(l,s);let _,v=s.mipmaps,y=s.isVideoTexture!==!0,C=p.__version===void 0||u===!0,D=f.dataReady,O=E(s,t);if(s.isDepthTexture)g=T(s.format===he,s.type),C&&(y?n.texStorage2D(e.TEXTURE_2D,1,g,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,r,m,null));else if(s.isDataTexture){if(v.length>0){y&&C&&n.texStorage2D(e.TEXTURE_2D,O,g,v[0].width,v[0].height);for(let t=0,i=v.length;t<i;t++)_=v[t],y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,m,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,r,m,_.data);s.generateMipmaps=!1}else y?(C&&n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height),D&&pe(s,t,r,m)):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,r,m,t.data)}else if(s.isCompressedTexture){if(s.isCompressedArrayTexture){y&&C&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,g,v[0].width,v[0].height,t.depth);for(let i=0,a=v.length;i<a;i++)if(_=v[i],s.format!==1023){if(r!==null){if(y){if(D){if(s.layerUpdates.size>0){let t=z(_.width,_.height,s.format,s.type);for(let a of s.layerUpdates){let o=_.data.subarray(a*t/_.data.BYTES_PER_ELEMENT,(a+1)*t/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,_.width,_.height,1,r,o)}s.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,_.width,_.height,t.depth,r,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,g,_.width,_.height,t.depth,0,_.data,0,0)}else o(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,_.width,_.height,t.depth,r,m,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,g,_.width,_.height,t.depth,0,r,m,_.data)}else{y&&C&&n.texStorage2D(e.TEXTURE_2D,O,g,v[0].width,v[0].height);for(let t=0,i=v.length;t<i;t++)_=v[t],s.format===1023?y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,m,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,r,m,_.data):r===null?o(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(s.isDataArrayTexture){if(y){if(C&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,g,t.width,t.height,t.depth),D){if(s.layerUpdates.size>0){let i=z(t.width,t.height,s.format,s.type);for(let a of s.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,m,o)}s.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,t.width,t.height,t.depth,0,r,m,t.data)}else if(s.isData3DTexture)y?(C&&n.texStorage3D(e.TEXTURE_3D,O,g,t.width,t.height,t.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)):n.texImage3D(e.TEXTURE_3D,0,g,t.width,t.height,t.depth,0,r,m,t.data);else if(s.isFramebufferTexture){if(C){if(y)n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<O;t++)n.texImage2D(e.TEXTURE_2D,t,g,i,a,0,r,m,null),i>>=1,a>>=1}}}else if(s.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),h.add(s),n.onpaint=e=>{let t=e.changedElements;for(let e of h)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(v.length>0){if(y&&C){let t=je(v[0]);n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height)}for(let t=0,i=v.length;t<i;t++)_=v[t],y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,m,_):n.texImage2D(e.TEXTURE_2D,t,g,r,m,_);s.generateMipmaps=!1}else if(y){if(C){let r=je(t);n.texStorage2D(e.TEXTURE_2D,O,g,r.width,r.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,m,t)}else n.texImage2D(e.TEXTURE_2D,0,g,r,m,t);x(s)&&S(l),p.__version=f.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function _e(t,s,c){if(s.image.length!==6)return;let l=F(t,s),u=s.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let f=r.get(u);if(u.version!==f.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=d.getPrimaries(d.workingColorSpace),r=s.colorSpace===``?null:d.getPrimaries(s.colorSpace),p=s.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=s.isCompressedTexture||s.image[0].isCompressedTexture,h=s.image[0]&&s.image[0].isDataTexture,g=[];for(let e=0;e<6;e++)!m&&!h?g[e]=b(s.image[e],!0,i.maxCubemapSize):g[e]=h?s.image[e].image:s.image[e],g[e]=L(s,g[e]);let _=g[0],v=a.convert(s.format,s.colorSpace),y=a.convert(s.type),C=w(s.internalFormat,v,y,s.normalized,s.colorSpace),T=s.isVideoTexture!==!0,D=f.__version===void 0||l===!0,O=u.dataReady,k=E(s,_);de(e.TEXTURE_CUBE_MAP,s);let A;if(m){T&&D&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,C,_.width,_.height);for(let t=0;t<6;t++){A=g[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];s.format===1023?T?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,v,y,i.data):v===null?o(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?O&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(A=s.mipmaps,T&&D){A.length>0&&k++;let t=je(g[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,k,C,t.width,t.height)}for(let t=0;t<6;t++)if(h){T?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g[t].width,g[t].height,v,y,g[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,g[t].width,g[t].height,0,v,y,g[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;T?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,v,y,i.data)}}else{T?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,v,y,g[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,v,y,g[t]);for(let r=0;r<A.length;r++){let i=A[r];T?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,v,y,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,v,y,i.image[t])}}}x(s)&&S(e.TEXTURE_CUBE_MAP),f.__version=u.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function ye(t,i,o,s,c,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=w(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(c,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,c,h.__webglTexture,0,ke(i)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,c,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=T(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),c=a.convert(o.type),u=w(o.internalFormat,s,c,o.normalized,o.colorSpace);I(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i,o){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);if(c.__renderTarget=i,(!c.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(c.__webglInit===void 0&&(c.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,D)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else se(i.depthTexture,0);let u=c.__webglTexture,d=ke(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)xe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?xe(i.__webglFramebuffer[0],t,0):xe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),be(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),be(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,i){let a=r.get(t);n!==void 0&&ye(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function we(t){let i=t.texture,o=r.get(t),s=r.get(i);t.addEventListener(`dispose`,O);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(s.__webglTexture===void 0&&(s.__webglTexture=e.createTexture()),s.__version=i.version,c.memory.textures++),u){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)o.__webglFramebuffer[t][n]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),c.memory.textures++)}if(t.samples>0&&I(t)===!1){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];o.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),s=a.convert(r.type),c=w(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ke(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,o.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),be(o.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),de(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ye(o.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ye(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);x(i)&&S(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],s=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),de(c,a),ye(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),x(a)&&S(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,s.__webglTexture),de(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ye(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ye(o.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);x(i)&&S(r),n.unbindTexture()}t.depthBuffer&&Se(t)}function Te(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(x(a)){let t=C(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),S(t),n.unbindTexture()}}}let Ee=[],De=[];function Oe(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),u===!0&&(Ee.length=0,De.length=0,Ee.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ee.push(c),De.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&u){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ke(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ae(e){let t=c.render.frame;m.get(e)!==t&&(m.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(d.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&o(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Dn(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(p.width=e.naturalWidth||e.width,p.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(p.width=e.displayWidth,p.height=e.displayHeight):(p.width=e.width,p.height=e.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=M,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ba(e,t){function n(n,r=``){let i,a=d.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Va=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ha=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ua=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oe(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ce({vertexShader:Va,fragmentShader:Ha,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new u(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wa=class extends N{constructor(e,t){super();let n=this,r=null,i=1,a=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Ua,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new Gt,w=null,T=new Ae;T.viewport=new Tt;let E=new Ae;E.viewport=new Tt;let D=[T,E],O=new yt,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new st,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new st,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new st,x[e]=t),t.getHandSpace()};function ee(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}k=null,A=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(y),p=null,f=null,d=null,r=null,b=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&o(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&o(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&h&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(o){if(r=o,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,te),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?he:F,a=v.stencil?ut:xn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new jn(f.textureWidth,f.textureHeight,{format:De,type:$t,depthTexture:new Se(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new jn(p.framebufferWidth,p.framebufferHeight,{format:De,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(s),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new V,re=new V;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ae(O,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),se(e,O,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=oe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(f!==null||p!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(e){return _[e]};let ce=null;function M(t,i){if(u=i.getViewerPose(l||a),m=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=D[n];o===void 0&&(o=new Ae,o.layers.enable(n),o.viewport=new Tt,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Oe,_[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,l||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new Ln;le.setAnimationLoop(M),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Ga=new p,Ka=new R;Ka.set(-1,0,0,0,1,0,0,0,1);function qa(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,v(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ga.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ka),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ja(e,t,n,r){let i={},a={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let o=i[e.id];o===void 0&&(_(e),o=d(e),i[e.id]=o,e.addEventListener(`dispose`,y));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(p(e),a[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return Dn(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,a);else m(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?o(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):o(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);s=[],i={},a={}}return{bind:l,update:u,dispose:b}}var Ya=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xa=null;function Za(){return Xa===null&&(Xa=new H(Ya,16,16,Lt,se),Xa.name=`DFG_LUT`,Xa.minFilter=Sn,Xa.magFilter=Sn,Xa.wrapS=On,Xa.wrapT=On,Xa.generateMipmaps=!1,Xa.needsUpdate=!0),Xa}var Qa=class{constructor(e={}){let{canvas:t=je(),context:n=null,depth:i=!0,stencil:s=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:m=`default`,failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:v=$t}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);y=n.getContextAttributes().alpha}else y=c;let b=v,S=new Set([r,a,x]),C=new Set([$t,xn,rn,ut,mt,xt]),w=new Uint32Array(4),T=new Int32Array(4),E=new V,D=null,O=null,k=[],A=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Fe;let oe=0,ce=0,M=null,le=-1,N=null,P=new Tt,ue=new Tt,de=null,F=new L(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Tt(0,0,pe,me),ye=new Tt(0,0,pe,me),be=!1,xe=new Pe,Se=!1,Ce=!1,we=new p,Te=new V,Ee=new Tt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return M===null?he:1}let I=n;function Ae(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),I===null){let t=`webgl2`;if(I=Ae(t,e),I===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw Dn(`WebGLRenderer: `+e.message),e}let R,Me,z,Ne,B,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e;function et(){R=new _r(I),R.init(),Ze=new Ba(I,R),Me=new qn(I,R,e,Ze),z=new Ra(I,R),Me.reversedDepthBuffer&&_&&z.buffers.depth.setReversed(!0),re=I.createFramebuffer(),ie=I.createFramebuffer(),ae=I.createFramebuffer(),Ne=new br(I),B=new va,Ie=new za(I,R,z,B,Me,Ze,Ne),Le=new gr(j),Re=new Rn(I),Qe=new Gn(I,Re),ze=new vr(I,Re,Ne,Qe),Be=new Sr(I,ze,Re,Qe,Ne),Je=new xr(I,Me,Ie),Ge=new Jn(B),Ve=new _a(j,Le,R,Me,Qe,Ge),He=new qa(j,B),Ue=new Sa,We=new ka(R),qe=new Wn(j,Le,z,Be,y,u),Ke=new La(j,Be,Me),$e=new Ja(I,Ne,Me,z),Ye=new Kn(I,R,Ne),Xe=new yr(I,R,Ne),Ne.programs=Ve.programs,j.capabilities=Me,j.extensions=R,j.properties=B,j.renderLists=Ue,j.shadowMap=Ke,j.state=z,j.info=Ne}et(),b!==1009&&(ee=new wr(b,t.width,t.height,l,i,s));let tt=new Wa(j,I);this.xr=tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(tt.isPresenting){o(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(b===1009){Dn(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){o(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),z.viewport(P.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.scissor(ue.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){z.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=S.has(t)}if(e){let e=M.texture.type,t=C.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(w[0]=i,w[1]=a,w[2]=o,w[3]=r,I.clearBufferuiv(I.COLOR,0,w)):(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferiv(I.COLOR,0,T))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),qe.dispose(),Ue.dispose(),We.dispose(),B.dispose(),Le.dispose(),Be.dispose(),Qe.dispose(),$e.dispose(),Ve.dispose(),tt.dispose(),tt.removeEventListener(`sessionstart`,ft),tt.removeEventListener(`sessionend`,pt),gt.stop()};function nt(e){e.preventDefault(),h(`WebGLRenderer: Context Lost.`),te=!0}function rt(){h(`WebGLRenderer: Context Restored.`),te=!1;let e=Ne.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;et(),Ne.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function it(e){Dn(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),B.remove(e)}function st(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Qe.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=Re.get(c),g=Xe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ke()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(R.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ct(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,n),e.side=0,e.needsUpdate=!0,Ct(e,t,n),e.side=2):Ct(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=We.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ct(a,n,e),r.add(a)}else ct(t,n,e),r.add(t)}}),O=A.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let lt=null;function dt(e){lt&&lt(e)}function ft(){gt.stop()}function pt(){gt.start()}let gt=new Ln;gt.setAnimationLoop(dt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){lt=e,tt.setAnimationLoop(e),e===null?gt.stop():gt.start()},tt.addEventListener(`sessionstart`,ft),tt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Dn(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=tt.enabled===!0&&tt.isPresenting===!0,r=ee!==null&&(M===null||n)&&ee.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(t),t=tt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),O=We.get(e,A.length),O.init(t),O.state.textureUnits=Ie.getTextureUnits(),A.push(O),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,wn,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ge.init(this.clippingPlanes,Ce),D=Ue.get(e,k.length),D.init(),k.push(D),tt.enabled===!0&&tt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,j.sortObjects)}_t(e,t,0,j.sortObjects),D.finish(),j.sortObjects===!0&&D.sort(ge,_e,t.reversedDepth),Oe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Oe&&qe.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ge.beginShadows();let i=O.state.shadowsArray;if(Ke.render(i,e,t),Se===!0&&Ge.endShadows(),(r&&ee.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Oe&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(D,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Oe&&qe.render(e),vt(D,e,t)}M!==null&&ce===0&&(Ie.updateMultisampleRenderTarget(M),Ie.updateRenderTargetMipmap(M)),r&&ee.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),Qe.resetDefaultState(),le=-1,N=null,A.pop(),A.length>0?(O=A[A.length-1],Ie.setTextureUnits(O.state.textureUnits),Se===!0&&Ge.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),D=k.length>0?k[k.length-1]:null,ne!==null&&ne.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||xe.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let t=Be.update(e),i=e.material;i.visible&&D.push(e,t,i,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||xe.intersectsObject(e))){let t=Be.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&D.push(e,t,s,n,Ee.z,o)}}else i.visible&&D.push(e,t,i,n,Ee.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Se===!0&&Ge.setGlobalState(j.clippingPlanes,n),r&&z.viewport(P.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=R.has(`EXT_color_buffer_half_float`)||R.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new jn(1,1,{generateMipmaps:!0,type:e?se:$t,minFilter:ht,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:d.workingColorSpace})}let i=O.state.transmissionRenderTarget[r.id],a=r.viewport||P;i.setSize(a.z*j.transmissionResolutionScale,a.w*j.transmissionResolutionScale);let o=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(i),j.getClearColor(F),fe=j.getClearAlpha(),fe<1&&j.setClearColor(16777215,.5),j.clear(),Oe&&qe.render(n);let u=j.toneMapping;j.toneMapping=0;let f=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Se===!0&&Ge.setGlobalState(j.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(i),Ie.updateRenderTargetMipmap(i),R.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(i),Ie.updateRenderTargetMipmap(i))}j.setRenderTarget(o,c,l),j.setClearColor(F,fe),f!==void 0&&(r.viewport=f),j.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=De);let r=B.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ve.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,j),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),Et(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ai.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];E.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(E))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=De),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:d.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,f=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),p=!!n.morphAttributes.position,m=!!n.morphAttributes.normal,h=!!n.morphAttributes.color,g=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(g=j.toneMapping);let _=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=_===void 0?0:_.length,y=B.get(r),b=O.state.lights;if(Se===!0&&(Ce===!0||e!==N)){let t=e===N&&r.id===le;Ge.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===l?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Ge.numPlanes||y.numIntersection!==Ge.numIntersection)?x=!0:y.vertexAlphas===u&&y.vertexTangents===f&&y.morphTargets===p&&y.morphNormals===m&&y.morphColors===h&&y.toneMapping===g&&y.morphTargetsCount===v?!!y.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let S=y.currentProgram;x===!0&&(S=Ct(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,S,y));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=y.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==le&&(le=r.id,w=!0),y.needsLights){let e=Dt(O.state.lightProbeGridArray,i);y.lightProbeGrid!==e&&(y.lightProbeGrid=e,w=!0)}if(C||N!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),N!==e&&(N=e,w=!0,T=!0)}if(y.needsLights&&(b.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,b.state.directionalShadowMap,Ie),b.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,b.state.spotShadowMap,Ie),b.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,b.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,Ie));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Je.update(i,n,S),(w||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Za()),w){if(E.setValue(I,`toneMappingExposure`,j.toneMappingExposure),y.needsLights&&kt(D,T),a&&r.fog===!0&&He.refreshFogUniforms(D,a),He.refreshMaterialUniforms(D,r,he,me,O.state.transmissionRenderTarget[e.id]),y.needsLights&&y.lightProbeGrid){let e=y.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Ai.upload(I,wt(y),D,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ai.upload(I,wt(y),D,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];$e.update(n,S),$e.bind(n,S)}}return S}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,oe=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(P),z.scissor(ue),z.setScissorTest(de),le=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else P.copy(ve).multiplyScalar(he).floor(),ue.copy(ye).multiplyScalar(he).floor(),de=be;if(n!==0&&(r=re),z.bindFramebuffer(I.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(P),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(c)){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Me.textureTypeReadable(l)){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ze.convert(c),Ze.convert(l),a)}finally{let e=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Me.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Ze.convert(l),Ze.convert(u),0);let f=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rt(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ze.convert(t.format),_=Ze.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=I.TEXTURE_2D),z.activeTexture(I.TEXTURE0),z.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(I.UNPACK_ROW_LENGTH),b=z.getParameter(I.UNPACK_IMAGE_HEIGHT),x=z.getParameter(I.UNPACK_SKIP_PIXELS),S=z.getParameter(I.UNPACK_SKIP_ROWS),C=z.getParameter(I.UNPACK_SKIP_IMAGES);z.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(I.UNPACK_SKIP_PIXELS,l),z.pixelStorei(I.UNPACK_SKIP_ROWS,u),z.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(I.READ_FRAMEBUFFER,ie),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(I.UNPACK_ROW_LENGTH,y),z.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(I.UNPACK_SKIP_PIXELS,x),z.pixelStorei(I.UNPACK_SKIP_ROWS,S),z.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){oe=0,ce=0,M=null,z.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=d._getDrawingBufferColorSpace(e),t.unpackColorSpace=d._getUnpackColorSpace()}};function $a(e,t,r,i,a,o,s=29){let c={slingshotAnchors:null,cornerTarget:null},l=n({x:i.x,y:0,z:i.z}),u=ae(l,{x:0,y:1,z:0}),d=sn(t,{x:0,y:1.3,z:0});function f(t,r){let i=e.raycast(d,n(t),r);if(!i||i.distance<3||Math.abs(i.normal.y)>.4)return null;let a=Ee(i.point,d),o=Ge(a);return e.raycast(d,n(a),Math.max(0,o-.1))?null:{id:`feature:${i.triangleIndex??`surface`}:${i.point.x.toFixed(2)}:${i.point.z.toFixed(2)}`,point:{...i.point},normal:{...i.normal},kind:`facade`,lineOfSight:!0}}if(a){let e=[];for(let t of[-1,1]){let n=null,r=-1/0;for(let e of[.7,1.15,1.6])for(let i of[.2,.55]){let a=f(sn(sn(l,Ze(u,t*e)),{x:0,y:i,z:0}),65);if(!a)continue;let o=Ee(a.point,d);if(Je(o,u)*t<2||Je(o,l)<3)continue;let s=Je(o,l)-Math.abs(Ge(o)-30)*.2;s>r&&(n=a,r=s)}n&&e.push(n)}e.length===2&&(c.slingshotAnchors=[e[0],e[1]])}if(Math.abs(o)>.5&&Math.hypot(r.x,r.z)>16){let n=Ze(u,Math.sign(o)),i=f(sn(Ze(l,.25),n),17)??f(sn(Ze(l,.7),n),17);if(i){let a={...t},o={...r},l=!0,u=M.cornerSeconds/12;for(let t=0;t<12;t++){o=Vt(o,n,u,M.cornerTurnRate),o.y-=s*u;let t=sn(a,Ze(o,u)),r=e.sweepCapsule(a,t,o);if(r.blocked||r.grounded||Ge(Ee(r.position,t))>.04){l=!1;break}a=t}l&&(c.cornerTarget={anchor:i,direction:n})}}return c}function eo(e,t,r){if(Math.hypot(r.x,r.z)<.1)return null;let i=n({x:r.x,y:0,z:r.z}),a=e.raycast(sn(t,{x:0,y:.35,z:0}),i,1.4);if(!a||Math.abs(a.normal.y)>.35)return null;let o=sn(t,Ze(i,a.distance+1)),s=e.raycast({...o,y:t.y+2.04},{x:0,y:-1,z:0},2);if(!s||s.normal.y<.85||s.point.y-t.y<.2||s.point.y-t.y>1.95)return null;let c={...s.point,y:s.point.y+.04},l={...t,y:c.y},u=e.sweepCapsule(t,l,{x:0,y:1,z:0});if(Ge(Ee(u.position,l))>.025)return null;let d=e.sweepCapsule(l,c,i);return Ge(Ee(d.position,c))<.025?c:null}var to=class{constructor(e,t){this.positions=new Float32Array(378),this.windPositions=new Float32Array(192),this.lineIndices=[],this.inverse=new p,this.amount=0,this.time=0,this.model=e,this.bones=t;let n=new Qe;n.setAttribute(`position`,new Ct(this.positions,3));let r=[];for(let e=0;e<2;e++)for(let t=0;t<9;t++)for(let n=0;n<7;n++){let i=e*63+t*7+n;t<8&&n<6&&r.push(i,i+7,i+1,i+1,i+7,i+8),t<8&&(n===6||n===3)&&this.lineIndices.push(i,i+7),n<6&&t%2==0&&this.lineIndices.push(i,i+1)}n.setIndex(r),this.mesh=new W(n,new Ne({color:15197913,side:2,transparent:!0,opacity:.55,depthWrite:!1})),this.mesh.name=`Deploying web-wing membranes`,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.linePositions=new Float32Array(this.lineIndices.length*3);let i=new Qe;i.setAttribute(`position`,new Ct(this.linePositions,3)),this.ribs=new Ht(i,new en({color:2635858,transparent:!0,opacity:.85})),this.ribs.frustumCulled=!1,this.ribs.visible=!1;let a=new Qe;a.setAttribute(`position`,new Ct(this.windPositions,3)),this.wind=new Ht(a,new en({color:14677503,transparent:!0,opacity:.4,depthWrite:!1})),this.wind.frustumCulled=!1,this.wind.visible=!1,e.add(this.mesh,this.ribs,this.wind)}update(e,t=1/60,n=0){if(this.time+=t,this.amount=G.damp(this.amount,+!!e,e?10:18,t),this.mesh.visible=this.ribs.visible=this.amount>.015,this.wind.visible=e&&n>18,!this.mesh.visible)return;this.model.updateWorldMatrix(!0,!0),this.inverse.copy(this.model.matrixWorld).invert();let r=e=>this.bones.find(t=>t.role===e)?.bone.getWorldPosition(new V).applyMatrix4(this.inverse);for(let[e,t]of[`left`,`right`].entries()){let n=r(`${t}Arm`),i=r(`${t}Hand`),a=r(`${t}UpLeg`);if(!n||!i||!a){this.mesh.visible=this.ribs.visible=!1;return}let o=n.clone().lerp(a,.14);for(let t=0;t<9;t++){let n=t/8,r=i.clone().lerp(a,n);r.lerp(o,Math.sin(Math.PI*n)*.25+Math.sin(n*Math.PI*4)**2*.07);for(let n=0;n<7;n++){let i=n/6,a=o.clone().lerp(r,i*this.amount);a.z+=Math.sin(this.time*9+t*.8)*.7*Math.sin(Math.PI*i)*this.amount,a.toArray(this.positions,(e*63+t*7+n)*3)}}}for(let e=0;e<this.lineIndices.length;e++)this.linePositions.set(this.positions.subarray(this.lineIndices[e]*3,this.lineIndices[e]*3+3),e*3);this.mesh.geometry.getAttribute(`position`).needsUpdate=!0,this.ribs.geometry.getAttribute(`position`).needsUpdate=!0;let i=this.model.getWorldScale(new V).length()/Math.sqrt(3),a=r(`hips`)??new V;for(let e=0;e<32;e++){let t=e*2.39996,r=(1.4+e%5*.55)/i,o=((e*.618+this.time*n/25)%1*16-8)/i,s=a.x+Math.cos(t)*r,c=a.y+Math.sin(t)*r;this.windPositions.set([s,c,a.z+o,s,c,a.z+o+Math.min(2,n/30)/i],e*6)}this.wind.geometry.getAttribute(`position`).needsUpdate=!0}},no=class{constructor(e){this.positions=new Float32Array(12);let t=new Qe;t.setAttribute(`position`,new Ct(this.positions,3)),this.lines=new Ht(t,new en({color:15137791,transparent:!0,opacity:.9})),this.lines.name=`Slingshot and corner webs`,this.lines.visible=!1,this.lines.frustumCulled=!1,e.add(this.lines)}update(e,t){let n=t?.sling?.anchors??(t?.corner?[t.corner.anchor]:[]);if(this.lines.visible=n.length>0,n.length){for(let t=0;t<2;t++){let r=n[Math.min(t,n.length-1)],i=e[t]??e[0];this.positions.set([i.x,i.y,i.z,r.x,r.y,r.z],t*6)}this.lines.geometry.getAttribute(`position`).needsUpdate=!0}}dispose(){this.lines.removeFromParent(),this.lines.geometry.dispose(),this.lines.material.dispose()}};function ro(e){let t=new Map,n=new Map,r=e.clone();return io(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function io(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)io(e.children[r],t.children[r],n)}function ao(e){return e!==`countdown`}function oo(e,t,n=!0){return e.sample({enabled:n&&ao(t)})}var so={moveForward:[`KeyW`],moveBack:[`KeyS`],moveLeft:[`KeyA`],moveRight:[`KeyD`],swing:[`Mouse0`],zip:[],pointLaunch:[`KeyE`],jump:[`Space`],aim:[`AltLeft`,`AltRight`],dive:[`ShiftLeft`,`ShiftRight`],roll:[`KeyR`],trick:[`KeyF`],wallCrawl:[`KeyQ`],glide:[`KeyG`],chargeJump:[`KeyC`],slingshot:[`KeyX`],corner:[`KeyZ`],loop:[`KeyL`],reelIn:[`KeyV`],reelOut:[`KeyB`],attack:[`KeyK`],heavy:[`KeyL`],launcher:[`KeyI`],grab:[`KeyU`],dodge:[`KeyJ`],block:[`KeyO`],web:[`KeyH`],taunt:[`KeyY`],interact:[`KeyN`]},co=Object.keys(so),lo=(e,t)=>t.startsWith(`Mouse`)?e.buttons.has(Number(t.slice(5))):e.keys.has(t),uo=class{constructor(){this.raw={keys:new Set,buttons:new Set,focused:!0},this.controllerHeld=new Set,this.controllerMove={x:0,y:0},this.previous=new Set,this.presses=new Set,this.releases=new Set,this.cancelPending=!1}setController(e,t=0,n=0){this.controllerHeld=e,this.controllerMove={x:t,y:n}}disconnectController(){this.setController(new Set),this.resetActions()}setKey(e,t){let n=this.raw.keys.has(e);t?this.raw.keys.add(e):this.raw.keys.delete(e),t!==n&&(t?this.presses:this.releases).add(e)}setButton(e,t){let n=this.raw.buttons.has(e);t?this.raw.buttons.add(e):this.raw.buttons.delete(e),t!==n&&(t?this.presses:this.releases).add(`Mouse${e}`),this.raw.buttons.size||(this.raw.pointerPressure=void 0)}setPressure(e){this.raw.pointerPressure=e!==void 0&&Number.isFinite(e)?Math.max(0,Math.min(1,e)):void 0}resetActions(){this.previous.clear(),this.presses.clear(),this.releases.clear(),this.cancelPending=!0}loseFocus(){this.raw.focused=!1,this.raw.keys.clear(),this.raw.buttons.clear(),this.raw.pointerPressure=void 0,this.resetActions()}gainFocus(){this.raw.focused=!0}sample(e={}){let t=(e.enabled??!0)&&this.raw.focused,n=new Set,r={},i=this.cancelPending;for(let a of co){let o=t&&!e.disabledActions?.has(a),s=so[a],c=o&&(this.controllerHeld.has(a)||s.some(e=>lo(this.raw,e))),l=this.previous.has(a),u=o&&s.some(e=>this.presses.has(e));r[a]={held:c,pressed:o&&!l&&(c||u),released:o&&!c&&(l||u&&s.some(e=>this.releases.has(e)))},c&&n.add(a),!o&&l&&(i=!0)}return r.enabled=t,r.moveX=Math.max(-1,Math.min(1,Number(r.moveRight.held)-Number(r.moveLeft.held)+(t?this.controllerMove.x:0))),r.moveY=Math.max(-1,Math.min(1,Number(r.moveForward.held)-Number(r.moveBack.held)+(t?this.controllerMove.y:0))),r.pointerPressure=r.swing.held?this.raw.pointerPressure:void 0,r.cancelAbilities=i,this.previous=n,this.presses.clear(),this.releases.clear(),this.cancelPending=!1,r}};function fo(e,t,n=t){let r=Math.hypot(t.x,t.z),i=r>1e-6?{x:t.x/r,y:0,z:t.z/r}:{x:0,y:0,z:-1},a=1/Math.max(1,Math.hypot(e.moveX,e.moveY)),o=e.zip.held||e.pointLaunch.held;return{move:{x:(i.x*e.moveY-i.z*e.moveX)*a,y:0,z:(i.z*e.moveY+i.x*e.moveX)*a},cameraForward:i,aimDirection:n,jumpPressed:e.jump.pressed,jumpHeld:e.jump.held,swingPressed:e.swing.pressed,swingHeld:e.swing.held,swingReleased:e.swing.released,zipPressed:e.zip.pressed||e.pointLaunch.pressed,zipHeld:o,zipReleased:!o&&(e.zip.released||e.pointLaunch.released),zipStyle:`point`,diveHeld:e.dive.held,rollPressed:e.roll.pressed,trickPressed:e.trick.pressed,wallCrawlPressed:e.wallCrawl.pressed,wallClimb:e.moveY,wallStrafe:e.moveX,glidePressed:e.glide.pressed,glidePitch:-e.moveY,chargeJumpHeld:e.chargeJump.held,chargeJumpReleased:e.chargeJump.released,slingshotHeld:e.slingshot.held,slingshotReleased:e.slingshot.released,cornerHeld:e.corner.held,loopHeld:e.loop.held,reel:Number(e.reelOut.held)-Number(e.reelIn.held),pointerPressure:e.pointerPressure,cancelAbilities:e.cancelAbilities}}var po=[`frame`,`physics`,`collision`,`anchor`,`animation`,`streaming`,`render`],mo=class{constructor(e=600){this.counts=Object.fromEntries(po.map(e=>[e,0])),this.cursors={...this.counts},this.counters={drawCalls:0,triangles:0,textures:0,geometries:0},this.capacity=Number.isFinite(e)?Math.max(30,Math.min(3600,Math.floor(e))):600,this.samples=Object.fromEntries(po.map(e=>[e,new Float64Array(this.capacity)]))}record(e,t){!Number.isFinite(t)||t<0||(this.samples[e][this.cursors[e]]=t,this.cursors[e]=(this.cursors[e]+1)%this.capacity,this.counts[e]=Math.min(this.capacity,this.counts[e]+1))}setRenderCounters(e){for(let t of Object.keys(this.counters)){let n=e[t];Number.isFinite(n)&&n>=0&&(this.counters[t]=n)}}snapshot(){let e=Object.fromEntries(po.map(e=>{let t=Array.from(this.samples[e].subarray(0,this.counts[e])).sort((e,t)=>e-t),n=e=>t.length?t[Math.max(0,Math.ceil(t.length*e)-1)]:null;return[e,{count:t.length,meanMs:t.length?t.reduce((e,t)=>e+t,0)/t.length:null,p50Ms:n(.5),p95Ms:n(.95),p99Ms:n(.99),maxMs:t.at(-1)??null}]}));return{windowCapacity:this.capacity,timings:e,renderer:{...this.counters},note:`CPU timings; render excludes asynchronous GPU completion.`}}};function ho(e){let t=Number.isFinite(e)?Math.max(0,Math.min(6,Math.floor(e))):0;return{level:t,farDetail:t>=1?.65:1,weatherDensity:t>=2?.5:1,particleDensity:t>=3?.5:1,postprocessScale:t>=4?.65:.85,secondaryAnimationHz:t>=5?20:60,resolutionScale:t>=6?.85:t>=3?.92:1}}var go=class{constructor(){this.level=0,this.averageMs=16.67,this.slowSeconds=0,this.fastSeconds=0,this.cooldown=2}get settings(){return ho(this.level)}get averageFrameMs(){return this.averageMs}update(e,t,n=!0){if(!n||!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||e>.5)return this.slowSeconds=this.fastSeconds=0,!1;let r=Math.min(e,.1);if(this.averageMs+=(t-this.averageMs)*(1-Math.exp(-r*2)),this.cooldown=Math.max(0,this.cooldown-r),this.cooldown>0)return!1;this.slowSeconds=this.averageMs>23?this.slowSeconds+r:0,this.fastSeconds=this.averageMs<18?this.fastSeconds+r:0;let i=this.averageMs>45?2:1,a=this.slowSeconds>=1.5?Math.min(6,this.level+i):this.fastSeconds>=8?Math.max(0,this.level-1):this.level;return a!==this.level&&(this.level=a,this.slowSeconds=this.fastSeconds=0,this.cooldown=1.2,!0)}},_o=e=>Math.hypot(e.velocity.x,e.velocity.y,e.velocity.z),vo=class{constructor(){this.score=0,this.chain=0,this.multiplier=1,this.time=0,this.lastAward=-100,this.serial=0,this.cooldowns=new Map,this.previousSpeed=0,this.previousYSpeed=0,this.previousMode=`idle`,this.previousSwing=null,this.wallDistance=0,this.glideSeconds=0,this.diveAt=-100,this.flowStage=0,this.flowAt=-100,this.flowSpeed=0,this.stalled=0,this.flipSequence=``,this.flipCount=0,this.narrow=!1,this.deepAwarded=!1,this.lowAwarded=!1,this.arcMin=1,this.arcMax=-1}resetCombo(){this.chain=0,this.multiplier=1,this.flowStage=0,this.flipCount=0}reset(){this.resetCombo(),this.score=0,this.cooldowns.clear(),this.previousSwing=null,this.lastAward=-100}update(e){let{state:t,dt:n,events:r}=e;this.time+=Math.max(0,n);let i=_o(t),a=[];this.stalled=i<2?this.stalled+n:0,(this.time-this.lastAward>5||this.stalled>1.2||e.contact&&(e.impactSpeed??0)>23)&&this.resetCombo();let o=(e,t,n,r=2)=>{if(this.time<(this.cooldowns.get(e)??-1))return;this.cooldowns.set(e,this.time+r),this.chain++,this.multiplier=Math.min(4,1+(this.chain-1)*.2);let i=Math.round(t*this.multiplier);this.score+=i,this.lastAward=this.time,a.push({id:++this.serial,label:e,score:i,multiplier:this.multiplier,kind:n})};if(t.mode===`dive`&&i>26&&(this.diveAt=this.time),r.some(e=>e.type===`web-attached`)&&(this.deepAwarded=!1,this.lowAwarded=!1,this.arcMin=1,this.arcMax=-1,this.time-this.diveAt<1.4&&i>24&&(o(`DIVE → SWING`,300,`web`,3),this.diveAt=-100),this.flowStage===2&&this.time-this.flowAt<5&&i>=this.flowSpeed*.65&&o(`WALL FLOW`,400,`web`,4),this.flowStage=0),t.swing){let n=t.swing.simulationPivot??t.swing.pivot??t.swing.anchor,r=t.position.x-n.x,a=t.position.y-n.y,s=t.position.z-n.z,c=Math.hypot(r,a,s)||1,l=a/c;this.arcMin=Math.min(this.arcMin,l),this.arcMax=Math.max(this.arcMax,l);let u=(t.velocity.x*r+t.velocity.y*a+t.velocity.z*s)/c;this.previousSwing={seconds:t.swing.attachedSeconds,tangentSpeed:Math.sqrt(Math.max(0,i*i-u*u)),radialY:l},!this.lowAwarded&&this.previousYSpeed<0&&t.velocity.y>=0&&i>18&&t.position.y-e.groundY<8&&(o(`LOW SWING`,120,`web`),this.lowAwarded=!0),!this.deepAwarded&&t.swing.attachedSeconds>1.2&&this.arcMax-this.arcMin>.65&&t.swing.ropeLength>22&&(o(`DEEP SWING`,180,`web`),this.deepAwarded=!0)}else this.previousSwing&&=(r.some(e=>e.type===`web-released`)&&this.previousSwing.seconds>.2&&i>10&&(o(`WEB RELEASE`,80,`web`,.4),this.previousYSpeed>8&&this.previousSwing.radialY<-.15&&this.previousSwing.radialY>-.9&&i>=this.previousSwing.tangentSpeed*.9&&o(`PERFECT RELEASE`,250,`web`,1.5)),t.mode===`wallRun`&&(this.flowStage=1,this.flowAt=this.time,this.flowSpeed=this.previousSpeed),null);if(t.mode===`wallRun`?(this.wallDistance+=i*n,this.wallDistance>=12&&(o(`WALL RUN`,100,`impact`,3),this.wallDistance=0)):this.wallDistance=0,this.flowStage===1&&(t.mode===`mantle`||r.some(e=>e.type===`wall-jump`))&&(this.flowStage=2),this.time-this.flowAt>6&&(this.flowStage=0),t.mode===`glide`?(this.glideSeconds+=n,this.glideSeconds>=.8&&this.glideSeconds-n<.8&&i>12&&o(`WEB GLIDE`,150,`glide`),this.glideSeconds>=4&&this.glideSeconds-n<4&&i>12&&o(`EXTENDED GLIDE`,250,`glide`),this.glideSeconds>=8&&this.glideSeconds-n<8&&i>12&&o(`SKY SURFER`,400,`glide`)):this.glideSeconds=0,e.clearance&&i>22&&!t.grounded&&!e.contact&&!t.wallRunActive&&!t.wallCrawlActive){let{left:t,right:n}=e.clearance;Math.min(t,n)<1.8&&Math.min(t,n)>.45&&o(`NEAR MISS`,200,`air`,4);let r=t+n<8&&t>.5&&n>.5;r&&!this.narrow&&o(`THREAD THE NEEDLE`,400,`air`,5),this.narrow=r}else this.narrow=!1;for(let e of r)e.type===`loop-completed`&&o(`LOOP DE LOOP`,500,`web`,1),e.type===`point-launch`&&i>15&&o(`POINT LAUNCH`,180,`web`,1),e.type===`slingshot-launch`&&i>25&&o(`SLINGSHOT`,300,`web`,2),e.type===`roll`&&i>5&&o(`IMPACT ROLL`,100,`impact`,2);let s=e.animation;if(s&&!t.grounded&&s.progress>=.85&&/Backflip|Front Flip|Front Twist|Forward Flip|Corkscrew|Aerial Evade|Butterfly/i.test(s.name)){let e=`${s.name}:${s.sequence}`;e!==this.flipSequence&&(this.flipSequence=e,this.flipCount++,o(/backflip/i.test(s.name)?this.flipCount===2?`DOUBLE BACKFLIP`:`BACKFLIP`:/front|forward/i.test(s.name)?`FRONT FLIP`:`AERIAL TRICK`,150,`air`,.2))}return t.grounded&&(this.flipCount=0),t.mode===`mantle`&&this.previousMode!==`mantle`&&i>8&&o(`ROOFTOP VAULT`,150,`impact`,2),this.previousMode=t.mode,this.previousSpeed=i,this.previousYSpeed=t.velocity.y,a}},yo=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z),bo=class{constructor(){this.definition=null,this.index=0,this.elapsed=0,this.nodeElapsed=0,this.startScore=0,this.status=`active`}start(e,t=0){if(!e.nodes.length||new Set(e.nodes.map(e=>e.id)).size!==e.nodes.length)throw Error(`Mission nodes must be unique and nonempty`);for(let t of e.nodes)if(t.next&&!e.nodes.some(e=>e.id===t.next))throw Error(`Unknown objective edge`);this.definition=e,this.index=0,this.elapsed=0,this.nodeElapsed=0,this.startScore=t,this.status=`active`}retry(e=0){this.definition&&this.start(this.definition,e)}stop(){this.definition=null}step(e,t){let n=this.definition;if(!n)return null;if(this.status!==`active`)return this.view();if(this.elapsed+=Math.max(0,e),this.nodeElapsed+=Math.max(0,e),!t.alive||this.elapsed>n.seconds)return this.status=`failed`,this.view();let r=n.nodes[this.index],i=!r.position||yo(t.position,r.position)<(r.radius??6),a=!1;switch(r.kind){case`reach`:case`chase`:a=i;break;case`collect`:a=i&&(!r.target||!!t.collected?.has(r.target));break;case`interact`:case`dialogue`:a=i&&t.interact;break;case`protect`:(t.protectedHealth??0)<=0&&(this.status=`failed`),a=(t.protectedHealth??0)>0&&this.nodeElapsed>=(r.duration??10);break;case`survive`:a=this.nodeElapsed>=(r.duration??10);break;case`escape`:a=!!r.position&&yo(t.position,r.position)>(r.radius??30);break;case`destroy`:a=!!r.target&&!!t.destroyed?.has(r.target);break;case`bossPhase`:a=(t.bossPhase??0)>=(r.amount??1);break;case`reward`:a=t.score-this.startScore>=(r.amount??0)}return a&&(this.index=r.next?n.nodes.findIndex(e=>e.id===r.next):this.index+1,this.nodeElapsed=0,this.index>=n.nodes.length&&(this.status=`complete`)),this.view()}view(){let e=this.definition;if(!e)return null;let t=e.nodes[Math.min(this.index,e.nodes.length-1)];return{id:e.id,name:e.name,status:this.status,objective:this.status===`complete`?`COMPLETE +${e.reward}`:this.status===`failed`?`TIME EXPIRED · RETRY`:t.label,remaining:Math.max(0,e.seconds-this.elapsed),target:this.status===`active`?t.position??null:null,radius:t.radius??6,reward:e.reward,step:Math.min(this.index+1,e.nodes.length),steps:e.nodes.length}}};function xo(e,t){if(t.length<3)throw Error(`Three verified locations required`);return e===`style`?{id:`flow-challenge`,name:`ROOFTOP FLOW`,seconds:90,reward:600,nodes:[{id:`start`,kind:`reach`,label:`Reach the cyan marker`,position:t[0],radius:12},{id:`score`,kind:`reward`,label:`Earn 1,000 trick points`,amount:1e3},{id:`finish`,kind:`reach`,label:`Return to the beacon`,position:t[2],radius:12}]}:e===`rescue`?{id:`timed-rescue`,name:`EMERGENCY SIGNAL`,seconds:80,reward:500,nodes:[{id:`signal`,kind:`reach`,label:`Reach the distress signal`,position:t[0],radius:10},{id:`rescue`,kind:`interact`,label:`Press N to secure the rescue beacon`,position:t[0],radius:10},{id:`evacuate`,kind:`reach`,label:`Carry the beacon to the safe rooftop`,position:t[2],radius:10}]}:{id:`rooftop-courier`,name:`ROOFTOP COURIER`,seconds:110,reward:400,nodes:t.map((e,t)=>({id:`delivery-${t}`,kind:t===0?`collect`:`reach`,label:t===0?`Collect the glowing delivery capsule`:`Deliver to rooftop ${t+1}`,position:e,radius:10}))}}var So=class{constructor(e){this.root=new w,this.material=new Ne({color:6680575,transparent:!0,opacity:.75,depthWrite:!1}),this.ring=new W(new _n(5,.12,5,32),this.material),this.core=new W(new ne(.8),this.material),this.root.add(this.ring,this.core),e.add(this.root),this.root.visible=!1}update(e,t){this.root.visible=!!e?.target,e?.target&&(this.root.position.copy(e.target),this.root.position.y+=2,this.ring.rotation.y=t*.4,this.core.position.y=1+Math.sin(t*2)*.5,this.core.rotation.y=t)}dispose(){this.root.removeFromParent(),this.ring.geometry.dispose(),this.core.geometry.dispose(),this.material.dispose()}},Co=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),wo=(e,t)=>Co(e.x+t.x,e.y+t.y,e.z+t.z),To=(e,t)=>Co(e.x-t.x,e.y-t.y,e.z-t.z),Eo=(e,t)=>Co(e.x*t,e.y*t,e.z*t),Do=e=>Math.hypot(e.x,e.y,e.z),Oo=e=>Eo(e,1/Math.max(1e-4,Do(e)));function ko(e,t,n,r){let i=To(t,e),a=To(n,e),o=i.x**2+i.y**2+i.z**2;return Do(To(wo(e,Eo(i,o>1e-9?Math.max(0,Math.min(1,(a.x*i.x+a.y*i.y+a.z*i.z)/o)):0)),n))<=r}var Ao=()=>({elapsed:0,previous:0,hits:new Set,fired:!1});function jo(e,t){e.previous=e.elapsed,e.elapsed+=Math.max(0,t)}function Mo(e,t){return e.elapsed<t.startup?`startup`:e.elapsed<t.startup+t.active?`active`:e.elapsed<t.startup+t.active+t.recovery?`recovery`:`complete`}function No(e,t,n){return e.elapsed>=t.startup&&e.previous<t.startup+t.active&&!e.hits.has(n)}function Po(e,t){e.hits.add(t)}var Fo=class{constructor(){this.health=100,this.attack=null,this.attackKind=`light`,this.comboIndex=0,this.bufferedAttack=null,this.comboGrace=0,this.dodge=0,this.dodgeCooldown=0,this.hurtCooldown=0,this.blocking=!1,this.webPulling=!1,this.webPullElapsed=0,this.taunt=0,this.lastDamageBlocked=!1,this.timings={light:[{startup:.16,active:.15,recovery:.24},{startup:.18,active:.16,recovery:.27},{startup:.21,active:.17,recovery:.31},{startup:.24,active:.2,recovery:.38}],heavy:[{startup:.3,active:.2,recovery:.48},{startup:.34,active:.22,recovery:.52},{startup:.39,active:.24,recovery:.58},{startup:.44,active:.28,recovery:.66}],launcher:[{startup:.3,active:.2,recovery:.52},{startup:.38,active:.24,recovery:.58}],airLight:[{startup:.18,active:.2,recovery:.34},{startup:.24,active:.22,recovery:.4}],airHeavy:[{startup:.3,active:.26,recovery:.52},{startup:.38,active:.3,recovery:.6}],grab:[{startup:.42,active:.28,recovery:.7},{startup:.5,active:.34,recovery:.78}],webShot:[{startup:.14,active:.16,recovery:.24}]}}get timing(){let e=this.timings[this.attackKind];return e[this.comboIndex%e.length]}get attackDamage(){let e=this.comboIndex;switch(this.attackKind){case`light`:return 8+e*2;case`heavy`:return 15+e*3;case`launcher`:return 18+e*4;case`airLight`:return 11+e*3;case`airHeavy`:return 19+e*4;case`grab`:return 25+e*5;case`webShot`:return 0}}get attackReach(){return this.attackKind===`grab`?3.4:this.attackKind===`heavy`||this.attackKind===`airHeavy`?5.2:4.7}beginAttack(e,t=0){let n=e===this.attackKind;this.attackKind=e,this.comboIndex=t%this.timings[e].length,this.attack=Ao(),this.bufferedAttack=null,this.comboGrace=1,this.blocking=!1,this.taunt=0,n||(this.comboIndex=t%this.timings[e].length)}step(e,t,n=!1){let r=typeof t==`boolean`?{lightPressed:t,dodgePressed:n,grounded:!0}:t;if(this.dodge=Math.max(0,this.dodge-e),this.dodgeCooldown=Math.max(0,this.dodgeCooldown-e),this.hurtCooldown=Math.max(0,this.hurtCooldown-e),this.comboGrace=Math.max(0,this.comboGrace-e),this.taunt=Math.max(0,this.taunt-e),this.blocking=!!(r.blockHeld&&this.health>0&&this.dodge<=0&&!this.attack),this.webPulling=!!(r.webHeld&&this.health>0&&this.dodge<=0&&!this.blocking),this.webPullElapsed=this.webPulling?this.webPullElapsed+e:0,r.dodgePressed&&this.dodgeCooldown<=0&&this.health>0)this.dodge=.62,this.dodgeCooldown=.9,this.attack=null,this.bufferedAttack=null,this.blocking=!1,this.webPulling=!1;else if(this.health>0&&this.dodge<=0&&!this.blocking){let e=r.grounded!==!1,t=r.grabPressed?`grab`:r.launcherPressed?`launcher`:r.heavyPressed?e?`heavy`:`airHeavy`:r.lightPressed?e?`light`:`airLight`:r.webPressed?`webShot`:null;if(t){if(this.attack)this.attack.elapsed>=this.timing.startup*.55&&(this.bufferedAttack=t);else{let e=this.comboGrace>0&&t===this.attackKind;this.beginAttack(t,e?this.comboIndex+1:0)}}else r.tauntPressed&&!this.attack&&!this.webPulling&&(this.taunt=1.8)}if(this.attack){if(jo(this.attack,e),Mo(this.attack,this.timing)===`complete`){if(this.bufferedAttack){let e=this.bufferedAttack;this.beginAttack(e,e===this.attackKind?this.comboIndex+1:0)}else this.attack=null,this.comboGrace=.82}}else this.comboGrace===0&&(this.comboIndex=0)}damage(e){if(this.dodge>0||this.hurtCooldown>0||this.health<=0)return!1;this.lastDamageBlocked=this.blocking;let t=Math.max(0,e)*(this.blocking?.18:1);return this.health=Math.max(0,this.health-t),this.hurtCooldown=this.blocking?.22:.9,this.blocking||(this.attack=null),this.bufferedAttack=null,!0}},Io=class{constructor(){this.id=null,this.player=new Fo,this.position=Co(),this.facing=Co(0,0,-1),this.strafeDirection=1,this.attack=null,this.health=0,this.phase=0,this.elapsed=0,this.cooldown=1.5,this.vulnerable=0,this.webProgress=0,this.webCooldown=0,this.webComboWindow=0,this.sequence=0,this.projectileId=0,this.projectiles=[],this.moving=!1,this.cinematic=.72,this.cinematicKind=`intro`,this.hitStop=0,this.hitReact=0,this.status=`active`,this.statusElapsed=0,this.checkpoint={position:Co(),health:0,phase:0}}start(e,t,n){this.id=e,this.player=new Fo;let r=n.groundAt(t);this.position={...t,y:(r??t.y)+(e===`ironman`?8:0)},this.health=hn[e].health,this.phase=0,this.elapsed=0,this.checkpoint={position:{...this.position},health:this.health,phase:0},this.resetTransient()}resetTransient(){this.attack=null,this.projectiles=[],this.vulnerable=this.webProgress=this.webCooldown=this.webComboWindow=0,this.cooldown=2.4,this.sequence=0,this.status=`active`,this.statusElapsed=0,this.moving=!1,this.cinematic=.72,this.cinematicKind=`intro`,this.hitStop=0,this.hitReact=0}stop(){this.id=null,this.projectiles=[],this.attack=null}retry(){this.id&&(this.player=new Fo,this.position={...this.checkpoint.position},this.health=this.checkpoint.health,this.phase=this.checkpoint.phase,this.resetTransient())}get checkpointPosition(){return{...this.checkpoint.position}}step(e,t,n){let r=[],i=Co();if(!this.id||!Number.isFinite(e)||e<=0)return{events:r,playerImpulse:i};if(this.status!==`active`)return this.statusElapsed+=Math.min(e,.1),{events:r,playerImpulse:i};let a=Math.min(e,.1),o=Math.max(1,Math.ceil(a*120)),s=a/o;for(let e=0;e<o&&this.status===`active`;e++)this.tick(s,{...t,attackPressed:e===0&&t.attackPressed,heavyPressed:e===0&&t.heavyPressed,launcherPressed:e===0&&t.launcherPressed,grabPressed:e===0&&t.grabPressed,dodgePressed:e===0&&t.dodgePressed,webPressed:e===0&&t.webPressed,tauntPressed:e===0&&t.tauntPressed},n,r,i);return{events:r,playerImpulse:i}}tick(e,t,n,r,i){let a=hn[this.id];if(this.elapsed+=e,this.moving=!1,this.hitStop=Math.max(0,this.hitStop-e),this.cinematic=Math.max(0,this.cinematic-e),this.cinematic===0&&(this.cinematicKind=null),this.hitReact=Math.max(0,this.hitReact-e),this.webComboWindow=Math.max(0,this.webComboWindow-e),this.vulnerable=Math.max(0,this.vulnerable-e),this.webCooldown=Math.max(0,this.webCooldown-e),this.cinematic>0)return;let o=this.player.dodge;if(this.player.step(e,{lightPressed:t.attackPressed,heavyPressed:t.heavyPressed,launcherPressed:t.launcherPressed,grabPressed:t.grabPressed,dodgePressed:t.dodgePressed,blockHeld:t.blockHeld,webPressed:t.webPressed,webHeld:t.webHeld,tauntPressed:t.tauntPressed,grounded:t.grounded}),this.player.dodge>o){let e=Oo(To(t.position,this.position)),n=Oo(Co(-e.z,.12,e.x));Object.assign(i,wo(i,Eo(n,12))),r.push({type:`dodge`})}let s=wo(t.position,Co(0,1.05)),c=wo(this.position,Co(0,a.height*.5)),l=Do(To(s,c)),u=l<180&&n.lineOfSight(s,c);if(t.attackPressed&&l>3.2&&l<8&&u){let e=Oo(To(this.position,t.position));Object.assign(i,wo(i,Eo(e,Math.min(7,(l-3.2)*2.2))))}let d=Co(t.position.x-this.position.x,0,t.position.z-this.position.z),f=Do(d),p=this.id===`hulk`?2.7:this.id===`venom`?2.35:1.75;if(f>.01&&f<p&&Object.assign(i,wo(i,Eo(Oo(d),(p-f)*20*e))),t.webPressed&&l<52&&u&&r.push({type:`web-shot`,position:{...c}}),t.webHeld&&l<52&&u&&this.webCooldown===0){if(this.webProgress=Math.min(1,this.webProgress+e/(this.id===`hulk`?1.5:.95)),this.webComboWindow=.9,l>3.7){let i=Oo(To(t.position,this.position)),a=this.id===`hulk`?4.2:this.id===`venom`?9.5:12,o=wo(this.position,Eo(i,Math.min(l-3.7,a*e)));if(this.id!==`ironman`){let e=n.groundAt({...o,y:this.position.y+1.5});e!==null&&(o.y=e)}let s=n.move(this.position,o,this.id===`ironman`?.7:1.15);Do(To(s,this.position))>.005&&(this.position={...s},this.moving=!0,t.webPressed&&r.push({type:`web-pull`,position:{...this.position}}))}this.webProgress>=1&&(this.attack=null,this.vulnerable=3.8,this.cooldown=3.8,this.webProgress=0,this.webCooldown=6,r.push({type:`restrained`,position:{...this.position}}))}else this.webProgress=Math.max(0,this.webProgress-e*.7);let m=this.player.attack,h=m&&this.player.attackKind!==`webShot`,g=this.player.attackKind!==`grab`||this.vulnerable>0||this.webComboWindow>0;if(h&&g&&No(this.player.attack,this.player.timing,`boss`)&&l<this.player.attackReach&&u){Po(m,`boss`);let e=t.grounded?0:Math.min(25,Do(t.velocity)*.6),n=this.webComboWindow>0?8:0,i=this.vulnerable>0?this.player.attackDamage*1.7+e+n:this.player.attackDamage+e*.22+n;if(this.health=Math.max(0,this.health-i),this.hitStop=this.player.attackKind===`heavy`||this.player.attackKind===`airHeavy`||this.player.attackKind===`grab`?.075:.045,this.hitReact=this.player.attackKind===`launcher`||this.player.attackKind===`grab`?.62:.34,this.player.attackKind===`launcher`&&(this.vulnerable=Math.max(this.vulnerable,1.2)),this.player.attackKind===`grab`&&(this.vulnerable=Math.max(this.vulnerable,.8)),this.webComboWindow=0,this.attack=null,this.cooldown=Math.max(this.cooldown,.58),r.push({type:`boss-hit`,value:i,position:{...c}}),this.health<=0){this.status=`victory`,this.statusElapsed=0,this.attack=null,this.projectiles=[],r.push({type:`victory`});return}let o=this.health<=a.health*.33?2:+(this.health<=a.health*.66);o>this.phase&&this.beginPhase(o,r)}if(this.attack)this.updateAttack(e,t,n,r,i);else{this.cooldown=Math.max(0,this.cooldown-e);let i=this.id===`ironman`?this.vulnerable>0?4:34:6.5;if(l>i&&this.vulnerable<=0){let r={...t.position,y:t.position.y+(this.id===`ironman`?7:0)};this.moveToward(r,a.speed,e,n,this.id===`ironman`)}else this.id===`ironman`&&this.vulnerable>0?this.moveToward(t.position,5.5,e,n,!0):this.id===`ironman`&&this.cooldown>.25&&this.vulnerable<=0&&l<i+5&&this.strafeAround(t.position,a.speed*.38,e,n,this.id===`ironman`);if(this.cooldown===0&&this.vulnerable===0&&l<150&&u){let e=a.attacks.filter(e=>l<e.reach&&(![`charge`,`leap`].includes(e.kind)||l>9)),i=e[this.sequence++%Math.max(1,e.length)];if(i){let e=n.groundAt(t.position),a={...t.position,y:i.kind===`leap`?e??t.position.y:t.position.y};this.facing=Oo(To(a,this.position)),this.attack={definition:i,clock:Ao(),target:a,start:{...this.position},direction:{...this.facing},volleyFired:0},this.strafeDirection*=-1,r.push({type:`attack`,position:{...a}})}else this.cooldown=.65}}for(let t of this.projectiles){let a={...t.position},o=wo(a,Eo(t.velocity,e));if(t.life-=e,!n.lineOfSight(a,o)){t.life=0;continue}ko(a,o,s,t.radius+.65)&&(this.hitPlayer(t.damage,Oo(t.velocity),r,i),t.life=0),t.position=o}this.projectiles=this.projectiles.filter(e=>e.life>0)}beginPhase(e,t){this.phase=e,this.attack=null,this.projectiles=[],this.vulnerable=0,this.cooldown=1.15,this.hitReact=.5,t.push({type:`phase`,value:e+1})}moveToward(e,t,n,r,i){let a=To(e,this.position);i||(a.y=0);let o=Do(a);if(o<.05)return;a=Oo(a),this.facing=a;let s=wo(this.position,Eo(a,Math.min(o,t*n))),c=r.groundAt({...s,y:this.position.y+1.2});if(i)c!==null&&(s.y=Math.max(c+.3,s.y));else{if(c===null||Math.abs(c-this.position.y)>2.5)return;s.y=c}let l=r.move(this.position,s,this.id===`ironman`?.7:1.15);this.moving=Do(To(l,this.position))>.01,this.position={...l}}strafeAround(e,t,n,r,i){let a=Oo(To(e,this.position)),o=Co(-a.z*this.strafeDirection,0,a.x*this.strafeDirection),s=wo(this.position,Eo(o,t*n)),c=r.groundAt({...s,y:this.position.y+1.2});if(i)s.y=this.position.y;else{if(c===null||Math.abs(c-this.position.y)>1.2){this.strafeDirection*=-1;return}s.y=c}let l=r.move(this.position,s,this.id===`ironman`?.7:1.15);if(Do(To(l,s))>.08){this.strafeDirection*=-1;return}this.position={...l},this.facing=a,this.moving=!0}updateAttack(e,t,n,r,i){let a=this.attack,o=a.definition;jo(a.clock,e);let s=Mo(a.clock,o),c={...this.position};if(s===`active`||No(a.clock,o,`activation`)){if(o.kind===`charge`){let t=wo(this.position,Eo(a.direction,(o.speed??30)*e)),i=n.groundAt({...t,y:this.position.y+1});this.id!==`ironman`&&i!==null&&(t.y=i);let s=n.move(this.position,t,1.15);if(this.position={...s},this.moving=!0,Do(To(s,t))>.08){this.attack=null,this.vulnerable=4,this.cooldown=4,r.push({type:`wall-stagger`,position:{...this.position}});return}}if(o.kind===`leap`){let e=Math.max(0,Math.min(1,(a.clock.elapsed-o.startup)/o.active)),t=wo(a.start,Eo(To(a.target,a.start),e));t.y+=Math.sin(Math.PI*e)*(this.id===`hulk`?14:10),this.position={...n.move(this.position,t,1.15)},this.moving=!0}if(o.kind===`projectile`&&!a.clock.fired){a.clock.fired=!0;let e=hn[this.id],t=wo(this.position,Co(0,e.height*.64)),n=o.projectileCount??1,r=o.spread??0;for(let e=0;e<n;e++){let i=e%2?1:-1,s=wo(wo(t,Eo(Co(-this.facing.z,0,this.facing.x),i*.58)),Eo(this.facing,1.15)),c=Oo(To(wo(a.target,Co(0,1)),s)),l=(e-(n-1)/2)*r,u=Co(c.x*Math.cos(l)-c.z*Math.sin(l),c.y,c.x*Math.sin(l)+c.z*Math.cos(l));this.projectiles.push({id:++this.projectileId,position:{...s},velocity:Eo(u,o.speed??45),radius:o.radius,damage:o.damage,life:5.5,style:o.projectileStyle??`bolt`})}}}if(o.kind!==`projectile`&&No(a.clock,o,`player`)){let e=wo(t.position,Co(0,1)),s=!1;if(o.kind===`charge`&&(s=ko(wo(c,Co(0,1)),wo(this.position,Co(0,1)),e,o.radius+.5)),o.kind===`melee`&&(s=ko(wo(this.position,Co(0,1.2)),wo(this.position,wo(Eo(a.direction,o.reach),Co(0,1.2))),e,o.radius)),o.kind===`slam`||o.kind===`leap`){let e=o.kind===`leap`?a.target:this.position;s=(o.kind!==`leap`||a.clock.elapsed>=o.startup+o.active-.08)&&Math.hypot(t.position.x-e.x,t.position.z-e.z)<o.radius&&t.position.y<e.y+2}s&&n.lineOfSight(wo(this.position,Co(0,1)),e)&&(Po(a.clock,`player`),this.hitPlayer(o.damage,Oo(To(t.position,this.position)),r,i))}s===`recovery`&&(this.vulnerable=Math.max(this.vulnerable,.2)),s===`complete`&&(this.attack=null,this.cooldown=(o.cooldown??1.6)+(this.phase===2?-.2:.25),this.vulnerable=Math.max(this.vulnerable,1.15))}hitPlayer(e,t,n,r){this.player.damage(e)&&(this.hitStop=.055,this.player.lastDamageBlocked?(Object.assign(r,wo(r,wo(Eo(t,2.2),Co(0,.8)))),n.push({type:`blocked`,value:e*.18})):(Object.assign(r,wo(r,wo(Eo(t,13),Co(0,6)))),n.push({type:`player-hit`,value:e})),this.player.health===0&&(this.status=`dead`,this.statusElapsed=0,this.attack=null,this.projectiles=[],n.push({type:`death`})))}snapshot(){if(!this.id)return null;let e=hn[this.id],t=this.attack,n=this.player.timing,r=this.hitStop>0?.25:this.cinematic>0?.32:1;return{id:this.id,name:e.name,status:this.status,phase:this.phase+1,health:this.health,maxHealth:e.health,playerHealth:this.player.health,position:{...this.position},facing:{...this.facing},moving:this.moving,vulnerable:this.vulnerable,hitReact:this.hitReact,webProgress:this.webProgress,webCooldown:this.webCooldown,escaping:!1,pursuing:!1,objective:this.status===`dead`?`Defeated · restart the fight`:this.status===`victory`?`Encounter complete`:this.vulnerable>0?`VULNERABLE · close in and strike`:e.phases[this.phase],playerAttacking:!!this.player.attack,playerDodging:this.player.dodge>0,elapsed:this.elapsed,timeScale:r,cinematic:this.cinematicKind,player:this.status===`victory`?{action:`idle`,actionElapsed:0,actionDuration:0,activeStart:0,activeEnd:0,comboIndex:0,blocking:!1}:this.player.health<=0?{action:`defeated`,actionElapsed:this.statusElapsed,actionDuration:1.8,activeStart:0,activeEnd:0,comboIndex:this.player.comboIndex,blocking:!1}:this.player.dodge>0?{action:`dodge`,actionElapsed:.62-this.player.dodge,actionDuration:.62,activeStart:0,activeEnd:.62,comboIndex:this.player.comboIndex,blocking:!1}:this.player.blocking?{action:`block`,actionElapsed:this.elapsed,actionDuration:1,activeStart:0,activeEnd:1,comboIndex:this.player.comboIndex,blocking:!0}:this.player.webPulling&&this.player.webPullElapsed>.16?{action:`webPull`,actionElapsed:this.player.webPullElapsed,actionDuration:1,activeStart:0,activeEnd:1,comboIndex:this.player.comboIndex,blocking:!1}:this.player.attack?{action:this.player.attackKind,actionElapsed:this.player.attack.elapsed,actionDuration:n.startup+n.active+n.recovery,activeStart:n.startup,activeEnd:n.startup+n.active,comboIndex:this.player.comboIndex,blocking:!1}:this.player.taunt>0?{action:`taunt`,actionElapsed:1.8-this.player.taunt,actionDuration:1.8,activeStart:0,activeEnd:0,comboIndex:this.player.comboIndex,blocking:!1}:this.player.hurtCooldown>.35?{action:`hit`,actionElapsed:.9-this.player.hurtCooldown,actionDuration:.55,activeStart:0,activeEnd:0,comboIndex:this.player.comboIndex,blocking:!1}:{action:`idle`,actionElapsed:0,actionDuration:0,activeStart:0,activeEnd:0,comboIndex:this.player.comboIndex,blocking:!1},attack:t?{id:t.definition.id,label:t.definition.label,kind:t.definition.kind,stage:Mo(t.clock,t.definition),time:t.clock.elapsed,duration:t.definition.startup+t.definition.active+t.definition.recovery,clip:t.definition.clip,target:{...t.target},radius:t.definition.radius,progress:Math.min(1,t.clock.elapsed/t.definition.startup)}:null,projectiles:this.projectiles.map(e=>({...e,position:{...e.position},velocity:{...e.velocity}}))}}};function Lo(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Ro=class extends kt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Go(e)}),this.register(function(e){return new Ko(e)}),this.register(function(e){return new ts(e)}),this.register(function(e){return new ns(e)}),this.register(function(e){return new rs(e)}),this.register(function(e){return new Jo(e)}),this.register(function(e){return new Yo(e)}),this.register(function(e){return new Xo(e)}),this.register(function(e){return new Zo(e)}),this.register(function(e){return new Wo(e)}),this.register(function(e){return new Qo(e)}),this.register(function(e){return new qo(e)}),this.register(function(e){return new es(e)}),this.register(function(e){return new $o(e)}),this.register(function(e){return new Ho(e)}),this.register(function(e){return new is(e,Vo.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new is(e,Vo.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new as(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Et.extractUrlBase(e);a=Et.resolveURL(t,this.path)}else a=Et.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Nn(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===os){try{a[Vo.KHR_BINARY_GLTF]=new ls(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Vo.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Fs(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Vo.KHR_MATERIALS_UNLIT:a[t]=new Uo;break;case Vo.KHR_DRACO_MESH_COMPRESSION:a[t]=new us(i,this.dracoLoader);break;case Vo.KHR_TEXTURE_TRANSFORM:a[t]=new ds;break;case Vo.KHR_MESH_QUANTIZATION:a[t]=new fs;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function zo(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Bo(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Vo={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Ho=class{constructor(e){this.parser=e,this.name=Vo.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new L(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],an);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new b(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new ze(s),o.distance=c;break;case`spot`:o=new Te(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Ds(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Uo=class{constructor(){this.name=Vo.KHR_MATERIALS_UNLIT}getMaterialType(){return Ne}extendParams(e,t,n){let r=[];e.color=new L(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],an),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Fe))}return Promise.all(r)}},Wo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Go=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Gt(e,e)}return Promise.all(r)}},Ko=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},qo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Jo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new L(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],an)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Fe)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Yo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Xo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new L().setRGB(i[0],i[1],i[2],an),Promise.all(r)}},Zo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_IOR}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Qo=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new L().setRGB(i[0],i[1],i[2],an),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Fe)),Promise.all(r)}},$o=class{constructor(e){this.parser=e,this.name=Vo.EXT_MATERIALS_BUMP}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},es=class{constructor(e){this.parser=e,this.name=Vo.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bo(this.parser,e,this.name)===null?null:xe}extendMaterialParams(e,t){let n=Bo(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},ts=class{constructor(e){this.parser=e,this.name=Vo.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},ns=class{constructor(e){this.parser=e,this.name=Vo.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},rs=class{constructor(e){this.parser=e,this.name=Vo.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},is=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},as=class{constructor(e){this.name=Vo.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==gs.TRIANGLES&&e.mode!==gs.TRIANGLE_STRIP&&e.mode!==gs.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new p,n=new V,a=new D,s=new V(1,1,1),c=new Ye(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Ue(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);C.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},os=`glTF`,ss=12,cs={JSON:1313821514,BIN:5130562},ls=class{constructor(e){this.name=Vo.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==os)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-ss,i=new DataView(e,ss),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===cs.JSON){let r=new Uint8Array(e,ss+a,t);this.content=n.decode(r)}else if(r===cs.BIN){let n=ss+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},us=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Vo.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=xs[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=xs[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=_s[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,an,n)})})}},ds=class{constructor(){this.name=Vo.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},fs=class{constructor(){this.name=Vo.KHR_MESH_QUANTIZATION}},ps=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},ms=new D,hs=class extends ps{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return ms.fromArray(i).normalize().toArray(i),i}},gs={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vs={9728:Ft,9729:Sn,9984:ve,9985:St,9986:me,9987:ht},ys={33071:On,33648:s,10497:j},bs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xs={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Ss={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Cs={CUBICSPLINE:void 0,LINEAR:dn,STEP:Xt},ws={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Ts(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Es(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Ds(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Os(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function ks(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function As(e){let t,n=e.extensions&&e.extensions[Vo.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+js(n.attributes):e.indices+`:`+js(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+js(e.targets[n]);return t}function js(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Ms(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Ns(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Ps=new p,Fs=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zo,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new _t(this.options.manager):new Ke(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nn(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Es(i,a,r),Ds(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Vo.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Et.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(t){let n=this,r=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let e=bs[i.type],t=_s[i.componentType],n=i.normalized===!0,r=new t(i.count*e);return Promise.resolve(new Ct(r,e,n))}let a=[];return i.bufferView===void 0?a.push(null):a.push(this.getDependency(`bufferView`,i.bufferView)),i.sparse!==void 0&&(a.push(this.getDependency(`bufferView`,i.sparse.indices.bufferView)),a.push(this.getDependency(`bufferView`,i.sparse.values.bufferView))),Promise.all(a).then(function(t){let a=t[0],o=bs[i.type],s=_s[i.componentType],c=s.BYTES_PER_ELEMENT,l=c*o,u=i.byteOffset||0,d=i.bufferView===void 0?void 0:r.bufferViews[i.bufferView].byteStride,f=i.normalized===!0,p,m;if(d&&d!==l){let t=Math.floor(u/d),r=`InterleavedBuffer:`+i.bufferView+`:`+i.componentType+`:`+t+`:`+i.count,l=n.cache.get(r);l||(p=new s(a,t*d,i.count*d/c),l=new e(p,d/c),n.cache.add(r,l)),m=new vt(l,o,u%d/c,f)}else p=a===null?new s(i.count*o):new s(a,u,i.count*o),m=new Ct(p,o,f);if(i.sparse!==void 0){let e=bs.SCALAR,n=_s[i.sparse.indices.componentType],r=i.sparse.indices.byteOffset||0,c=i.sparse.values.byteOffset||0,l=new n(t[1],r,i.sparse.count*e),u=new s(t[2],c,i.sparse.count*o);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(m.setX(t,u[e*o]),o>=2&&m.setY(t,u[e*o+1]),o>=3&&m.setZ(t,u[e*o+2]),o>=4&&m.setW(t,u[e*o+3]),o>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=vs[n.magFilter]||1006,t.minFilter=vs[n.minFilter]||1008,t.wrapS=ys[n.wrapS]||1e3,t.wrapT=ys[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,n){let r=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let o=i.images[e],s=self.URL||self.webkitURL,c=o.uri||``,l=!1;if(o.bufferView!==void 0)c=r.getDependency(`bufferView`,o.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:o.mimeType});return c=s.createObjectURL(t),c});else if(o.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let u=Promise.resolve(c).then(function(e){return new Promise(function(r,i){let o=r;n.isImageBitmapLoader===!0&&(o=function(e){let n=new t(e);n.needsUpdate=!0,r(n)}),n.load(Et.resolveURL(e,a.path),o,void 0,i)})}).then(function(e){return l===!0&&s.revokeObjectURL(c),Ds(e,o),e.userData.mimeType=o.mimeType||Ns(o.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,c),e});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Vo.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Vo.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Vo.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ie,ct.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new en,ct.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return zt}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Vo.KHR_MATERIALS_UNLIT]){let e=r[Vo.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new L(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],an),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Fe)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||ws.OPAQUE;if(l===ws.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===ws.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Ne&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Gt(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Ne&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Ne){let e=i.emissiveFactor;o.emissive=new L().setRGB(e[0],e[1],e[2],an)}return i.emissiveTexture!==void 0&&a!==Ne&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Fe)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Ds(n,i),t.associations.set(n,{materials:e}),i.extensions&&Es(r,n,i),n})}createUniqueName(e){let t=He.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Vo.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Ls(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=As(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Vo.KHR_DRACO_MESH_COMPRESSION]?i(o):Ls(new Qe,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Ts(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===gs.TRIANGLES||u.mode===gs.TRIANGLE_STRIP||u.mode===gs.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new qe(l,f):new W(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===gs.TRIANGLE_STRIP?d.geometry=Lo(d.geometry,1):u.mode===gs.TRIANGLE_FAN&&(d.geometry=Lo(d.geometry,2));else if(u.mode===gs.LINES)d=new Ht(l,f);else if(u.mode===gs.LINE_STRIP)d=new at(l,f);else if(u.mode===gs.LINE_LOOP)d=new dt(l,f);else if(u.mode===gs.POINTS)d=new A(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&ks(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Ds(d,i),u.extensions&&Es(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Es(r,c[0],i),c[0];let l=new w;i.extensions&&Es(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Ae(G.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new de(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ds(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new p;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ie(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new yn(i,void 0,l);return Ds(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Ps)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new tn:t.length>1?new w:t.length===1?t[0]:new C,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Ds(o,i),i.extensions&&Es(n,o,i),i.matrix!==void 0){let e=new p;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let n=this.extensions,r=this.json.scenes[e],i=this,a=new w;r.name&&(a.name=i.createUniqueName(r.name)),Ds(a,r),r.extensions&&Es(n,a,r);let o=r.nodes||[],s=[];for(let e=0,t=o.length;e<t;e++)s.push(i.getDependency(`node`,o[e]));return Promise.all(s).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?a.add(n):a.add(ro(n))}return i.associations=(e=>{let n=new Map;for(let[e,r]of i.associations)(e instanceof ct||e instanceof t)&&n.set(e,r);return e.traverse(e=>{let t=i.associations.get(e);t!=null&&n.set(e,t)}),n})(a),a})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Ss[i.path]===Ss.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Ss[i.path]){case Ss.weights:l=we;break;case Ss.rotation:l=le;break;case Ss.translation:case Ss.scale:l=et;break;default:switch(n.itemSize){case 1:l=we;break;default:l=et}}let u=r.interpolation===void 0?dn:Cs[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Ss[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Ms(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof le?hs:ps)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Is(e,t,n){let r=t.attributes,i=new Ut;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=Ms(_s[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Ms(_s[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new We;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Ls(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=xs[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return d.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${d.workingColorSpace}" not supported.`),Ds(e,t),Is(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Os(e,t.targets,n)})}function Rs(e){return e.map(e=>{let t=e.clone();for(let e of t.tracks){if(!e.name.endsWith(`.position`)||!/(?:^|\.)root_\d+\.position$|ActorRoot|Bip01_02\.position$/.test(e.name))continue;let t=Array.from(e.values.slice(0,e.getValueSize()));for(let n=0;n<e.values.length;n++)e.values[n]=t[n%t.length]}return t})}function zs(e){let n=new Set,r=new Set,i=new Set;e.traverse(e=>{if(e instanceof W){i.add(e.geometry);for(let i of Array.isArray(e.material)?e.material:[e.material]){r.add(i);for(let e of Object.values(i))e instanceof t&&n.add(e)}}}),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose())}var Bs=class{constructor(e){this.group=new w,this.avatar=new w,this.model=null,this.mixer=null,this.actions=new Map,this.current=null,this.currentKey=``,this.baseModelY=0,this.footBones=[],this.footBaseline=0,this.loading=0,this.loaded=null,this.ring=new W(new ke(.92,1,64),new Ne({color:`#ffcf45`,transparent:!0,opacity:.65,side:2,depthWrite:!1})),this.beam=new W(new ye(.065,.065,1,8),new Ne({color:`#ffcd58`,transparent:!0,opacity:.65,depthWrite:!1})),this.restraint=new w,this.bullets=[],this.webs=[0,1].map(()=>new at(new Qe().setFromPoints([new V,new V]),new en({color:`#dcf8ff`,transparent:!0,opacity:.82}))),this.error=null,this.beacon=new w,this.group.name=`Boss encounter visuals`,this.group.visible=!1,this.group.add(this.avatar,this.ring,this.beam,this.restraint,...this.webs,this.beacon),e.add(this.group);let t=new Ne({color:`#fb6381`,transparent:!0,opacity:.48,depthWrite:!1,depthTest:!1,toneMapped:!1}),n=new W(new ye(.13,.35,24,8),t);n.position.y=12,this.beacon.add(n);let r=new W(new ne(.9),new Ne({color:`#bcefff`,wireframe:!0,depthTest:!1,depthWrite:!1}));r.position.y=25,this.beacon.add(r),this.beacon.renderOrder=25,this.ring.rotation.x=-Math.PI/2;for(let e=0;e<5;e++){let t=new W(new _n(.9,.022,5,32),new Ne({color:`#caf4ff`,transparent:!0,opacity:.8}));t.rotation.x=Math.PI/2+e*.11,t.position.y=.4+e*.38,this.restraint.add(t)}let i=()=>new Ne({color:`#61eaff`,transparent:!0,opacity:.92,toneMapped:!1,depthWrite:!1,blending:2});for(let e=0;e<24;e++){let e=new w,t=new W(new ot(.24,1.8,4,8),i()),n=new W(new re(.72,2),i()),r=new W(new En(.42,1.8,8),i()),a=new W(new ye(.42,.18,4.8,10),i());e.add(t,n,r,a);let o=new W(new Xe(1,10,6),new Ne({color:`#baf8ff`,transparent:!0,opacity:.22,wireframe:!0,toneMapped:!1,depthWrite:!1,blending:2}));e.add(o),e.visible=!1,this.bullets.push({group:e,bolt:t,orb:n,missile:r,beam:a}),this.group.add(e)}}async load(e){let t=++this.loading;this.error=null,this.loaded=null,this.clearModel();try{let n=await new Ro().loadAsync(hn[e].asset);if(t!==this.loading){zs(n.scene);return}let r=n.scene,i=hn[e],a=Rs(n.animations);r.rotation.y=i.modelYaw;let o=new ft(r),s=a.find(e=>e.name===i.clips.idle);if(s){let e=o.clipAction(s);e.play(),o.update(0),e.stop()}r.updateMatrixWorld(!0);let c=new Ut().setFromObject(r,!0),l=c.getSize(new V),u=i.height/Math.max(.001,l.y),d=c.getCenter(new V);r.scale.multiplyScalar(u),r.position.set(-d.x*u,-c.min.y*u,-d.z*u),this.baseModelY=r.position.y,this.footBones=[],r.traverse(e=>{if(!(e instanceof tn))return;let t=e.name.toLowerCase().replace(/[^a-z]/g,``);(t.includes(`leftfoot`)||t.includes(`rightfoot`)||/[lr]foot/.test(t))&&!t.includes(`toe`)&&this.footBones.push(e)}),r.updateMatrixWorld(!0),this.footBaseline=this.footBones.length?Math.min(...this.footBones.map(e=>e.getWorldPosition(new V).y)):0,r.traverse(e=>{e instanceof W&&(e.frustumCulled=!1,e.castShadow=!0)}),this.model=r,this.mixer=o,this.avatar.add(r),this.actions=new Map(a.map(e=>[e.name,o.clipAction(e)])),this.loaded=e}catch(e){throw t===this.loading&&(this.error=e instanceof Error?e.message:String(e)),e}}get ready(){return this.loaded!==null}get loadError(){return this.error}clearModel(){this.model&&(this.mixer?.stopAllAction(),this.mixer?.uncacheRoot(this.model),this.avatar.remove(this.model),zs(this.model)),this.model=null,this.mixer=null,this.actions.clear(),this.current=null,this.currentKey=``,this.footBones=[]}update(e,t,n){if(this.group.visible=!!e&&e.id===this.loaded,!e||e.id!==this.loaded)return;let r=hn[e.id];this.beacon.visible=!1,this.avatar.position.copy(e.position);let i=Math.atan2(-e.facing.x,-e.facing.z);this.avatar.quaternion.slerp(new D().setFromAxisAngle(new V(0,1,0),i),1-Math.exp(-t*12));let a=e.vulnerable>1.8&&!e.attack,o=e.status===`victory`?r.clips.dead:e.cinematic===`intro`?r.clips.intro:e.hitReact>0?r.clips.hit:a?r.clips.stunned:e.attack?.clip??(e.moving?r.clips.move:r.clips.idle);if(e.escaping&&(o=e.id===`hulk`?`101291_Jump_Attack_Float`:e.id===`venom`?`103531_Descent_Loop`:`fly_fast`),e.attack?.kind===`leap`){let t=e.attack.stage;o=e.id===`hulk`?t===`startup`?e.attack.clip:t===`active`?`101291_Jump_Attack_Float`:`101291_Jump_Attack_Land`:t===`startup`?e.attack.clip:t===`active`?`103531_Descent_Loop`:`103531_Descent_End`}let s=this.actions.get(o)??this.actions.get(r.clips.idle),c=`${o}:${e.attack?.id??``}:${e.status}`;if(s&&c!==this.currentKey){let t=this.current;s.reset().setEffectiveWeight(1).setEffectiveTimeScale(1).play();let n=e.status===`victory`||e.cinematic===`intro`||e.hitReact>0||!!(e.attack&&e.attack.kind!==`charge`);s.setLoop(n?tt:Mn,n?1:1/0),s.clampWhenFinished=!0,t&&t!==s&&t.crossFadeTo(s,.16,!1),this.current=s,this.currentKey=c}if(s&&e.attack&&e.attack.kind!==`charge`&&e.attack.kind!==`leap`?(s.timeScale=0,s.time=Math.min(s.getClip().duration-1e-4,e.attack.time/e.attack.duration*s.getClip().duration)):s&&(s.timeScale=e.cinematic===`intro`?s.getClip().duration/.72:1),this.mixer?.update(Math.max(0,t)),this.model&&(this.model.position.y=this.baseModelY,this.avatar.updateMatrixWorld(!0),this.footBones.length)){let t=Math.min(...this.footBones.map(e=>e.getWorldPosition(new V).y)),n=G.clamp(e.position.y+this.footBaseline-t,-.65,1.8);this.model.position.y=this.baseModelY+n}let l=e.attack;if(this.ring.visible=!1,this.beam.visible=!1,l){let t=l.kind===`leap`?l.target:e.position;this.ring.position.set(t.x,t.y+.09,t.z);let n=l.radius*(l.stage===`startup`?.75+l.progress*.25:1);this.ring.scale.setScalar(n),this.ring.material.color.set(l.stage===`startup`?r.accent:l.stage===`active`?`#ff3158`:`#69def8`);let i=new V().copy(e.position).add(new V(0,1.5,0)),a=new V().copy(l.target).add(new V(0,1,0)).clone().sub(i);this.beam.position.copy(i).addScaledVector(a,.5),this.beam.scale.y=a.length(),this.beam.material.color.set(e.id===`ironman`?`#55e9ff`:l.stage===`active`?`#ad376e`:r.accent),this.beam.scale.x=this.beam.scale.z=l.stage===`active`?3:1,this.beam.quaternion.setFromUnitVectors(new V(0,1,0),a.normalize())}this.restraint.visible=e.vulnerable>1.8&&!e.attack,this.restraint.position.copy(e.position),this.restraint.rotation.y+=t*.3;let u=e.webProgress>.02&&!!n?.length,d=new V(-e.facing.z,0,e.facing.x);this.webs.forEach((t,i)=>{t.visible=u;let a=n?.[i]??n?.[0];if(!u||!a)return;let o=t.geometry.getAttribute(`position`);o.setXYZ(0,a.x,a.y,a.z),o.setXYZ(1,e.position.x+d.x*(i?.28:-.28),e.position.y+r.height*.6,e.position.z+d.z*(i?.28:-.28)),o.needsUpdate=!0,t.geometry.computeBoundingSphere()}),this.bullets.forEach((n,r)=>{let i=e.projectiles[r];if(n.group.visible=!!i,i){n.group.position.copy(i.position),n.bolt.visible=i.style===`bolt`,n.orb.visible=i.style===`orb`,n.missile.visible=i.style===`missile`,n.beam.visible=i.style===`beam`,n.group.scale.setScalar(i.radius);let e=new V().copy(i.velocity).normalize();n.group.quaternion.setFromUnitVectors(new V(0,1,0),e),n.group.rotation.y+=t*(i.style===`missile`?8:3)}})}dispose(){++this.loading,this.clearModel(),this.group.removeFromParent(),zs(this.group),this.webs.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}},Vs=Cn();function Hs(e,t,n,r=.3){let i=t.clone().sub(e),a=i.length();if(a<.01)return t;i.divideScalar(a);let o=new V().crossVectors(i,new V(0,1,0)).normalize(),s=new V().crossVectors(o,i).normalize(),c=a;for(let[t,l]of[[0,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let u=n(e.clone().addScaledVector(o,t*r).addScaledVector(s,l*r),i,a+r);u&&(c=Math.min(c,Math.max(.1,u.distance-r)))}return t.copy(e).addScaledVector(i,c)}var Us=class{constructor(){this.target=new jn(1,1,{type:se,depthBuffer:!0,samples:4}),this.scene=new T,this.camera=new de(-1,1,1,-1,0,1),this.material=new ce({uniforms:{source:{value:this.target.texture},strength:{value:0},sunScreen:{value:new Gt(.5,.5)},rayStrength:{value:0}},depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`,fragmentShader:`uniform sampler2D source; uniform float strength; uniform vec2 sunScreen; uniform float rayStrength; varying vec2 vUv;
      void main(){
        vec2 offset=vUv-vec2(.5,.46);
        vec2 radial=offset*strength*smoothstep(.14,.55,length(offset));
        vec4 color=texture2D(source,vUv)*.28;
        color+=texture2D(source,vUv-radial)*.20;
        color+=texture2D(source,vUv-radial*2.)*.17;
        color+=texture2D(source,vUv-radial*3.)*.14;
        color+=texture2D(source,vUv-radial*4.)*.11;
        color+=texture2D(source,vUv-radial*5.)*.10;
        if (rayStrength > .002) {
          vec2 toSun=(sunScreen-vUv)/16.;
          vec2 rayUv=vUv;
          float decay=1.;
          vec3 rays=vec3(0.);
          for (int i=0;i<16;i++){
            rayUv+=toSun;
            vec3 s=texture2D(source,rayUv).rgb;
            float lum=dot(s,vec3(.2126,.7152,.0722));
            // Only brightness that sits near the sun on screen feeds the
            // streaks, so distant lit facades never masquerade as light shafts.
            float tapProximity=smoothstep(.55,.06,distance(rayUv,sunScreen));
            rays+=s*smoothstep(.8,1.8,lum)*decay*tapProximity;
            decay*=.925;
          }
          float proximity=smoothstep(1.25,.15,distance(vUv,sunScreen));
          color.rgb+=rays*(rayStrength*.3*proximity)*vec3(1.,.82,.58);
        }
        gl_FragColor=color;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),this.quad=new W(new u(2,2),this.material),this.pulse=0,this.previousSpeed=0,this.width=1,this.height=1,this.resolutionScale=.85,this.scene.add(this.quad)}get strength(){return this.material.uniforms.strength.value}get rayStrength(){return this.material.uniforms.rayStrength.value}setSunRays(e,t,n){let r=this.material.uniforms;r.sunScreen.value.set(e,t),r.rayStrength.value=Number.isFinite(n)?Math.max(0,Math.min(1,n)):0}update(e,t,n,r=!1,i=!1){let a=(t-this.previousSpeed)/Math.max(e,.001);this.previousSpeed=t,(n||a>65)&&(this.pulse=.24),this.pulse=Math.max(0,this.pulse-e),this.material.uniforms.strength.value=r?0:Math.max(.018*Math.sin(Math.PI*this.pulse/.24),i?G.clamp((t-15)/85,0,1)*.008:0)}resize(e,t){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t)),this.target.setSize(Math.max(1,Math.round(this.width*this.resolutionScale)),Math.max(1,Math.round(this.height*this.resolutionScale)))}setResolutionScale(e){let t=Number.isFinite(e)?G.clamp(e,.5,1):.85;t!==this.resolutionScale&&(this.resolutionScale=t,this.resize(this.width,this.height))}get targetSize(){return{width:this.target.width,height:this.target.height}}render(e,t,n){let r=e.getRenderTarget();if(this.strength<1e-4&&this.rayStrength<.002){e.render(t,n);return}try{e.setRenderTarget(this.target),e.render(t,n),e.setRenderTarget(r),e.render(this.scene,this.camera)}finally{e.setRenderTarget(r)}}dispose(){this.target.dispose(),this.quad.geometry.dispose(),this.material.dispose()}},Ws=class{constructor(e){this.frames=[],this.bones=[],this.next=0,this.rig=e,e.model.traverse(e=>{e instanceof tn&&this.bones.push(e)})}capture(e){if(e<this.next||this.frames.length>=12e3)return;this.next=e+50;let t=this.rig,n=[e,...t.root.position.toArray(),...t.root.quaternion.toArray(),...t.surfaceFrame.position.toArray(),...t.surfaceFrame.quaternion.toArray(),...t.model.position.toArray()];for(let e of this.bones)n.push(...e.quaternion.toArray());this.frames.push(new Float32Array(n))}record(e,t,n={}){return{course:e,time:t,bones:this.bones.map(e=>e.name),frames:this.frames,version:1,score:n.score??0,splits:n.splits?.map(e=>({...e}))??[]}}},Gs=new WeakMap,Ks=new V,qs=new D;function Js(e,t,n){let r=t.frames;if(!r.length)return;let i=0,a=r.length-1;for(;i<a;){let e=Math.ceil((i+a)/2);r[e][0]<=n?i=e:a=e-1}let o=r[i],s=r[Math.min(i+1,r.length-1)],c=G.clamp((n-o[0])/Math.max(1,s[0]-o[0]),0,1),l=(e,t)=>e.fromArray(o,t).lerp(Ks.fromArray(s,t),c),u=(e,t)=>e.fromArray(o,t).slerp(qs.fromArray(s,t),c);l(e.root.position,1),u(e.root.quaternion,4),l(e.surfaceFrame.position,8),u(e.surfaceFrame.quaternion,11),l(e.model.position,15);let d=Gs.get(e.model);d||(d=new Map,e.model.traverse(e=>{e instanceof tn&&d.set(e.name,e)}),Gs.set(e.model,d)),t.bones.forEach((e,t)=>{let n=d.get(e);n&&u(n.quaternion,18+t*4)}),e.root.updateMatrixWorld(!0)}function Ys(){return new Promise((e,t)=>{let n=indexedDB.open(`spiderman-2099-ghosts`,1);n.onupgradeneeded=()=>n.result.createObjectStore(`runs`),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Xs(e){let t=await Ys();try{await new Promise((n,r)=>{let i=t.transaction(`runs`,`readwrite`);i.objectStore(`runs`).put(e,e.course.id),i.oncomplete=()=>n(),i.onerror=()=>r(i.error)})}finally{t.close()}}async function Zs(e){let t=await Ys();try{return await new Promise((n,r)=>{let i=t.transaction(`runs`).objectStore(`runs`).get(e);i.onsuccess=()=>n(i.result??null),i.onerror=()=>r(i.error)})}finally{t.close()}}function Qs(e){try{let t=Number(localStorage.getItem(`2099-pb:${e}`));return t>0&&Number.isFinite(t)?t:null}catch{return null}}function $s(e){try{let t=JSON.parse(localStorage.getItem(`2099-pb-run:${e}`)??`null`);if(t&&Number.isFinite(t.time)&&t.time>0&&Number.isFinite(t.score)&&t.score>=0&&Array.isArray(t.splits)&&t.splits.length<=32&&t.splits.every(e=>typeof e.gateId==`string`&&Number.isFinite(e.time)&&e.time>=0&&Number.isFinite(e.score)))return t}catch{}let t=Qs(e);return t===null?null:{time:t,score:0,splits:[]}}function ec(e,t,n,r){if(!r)return!0;let i=te(e.mode??`speed`,t,n),a=te(e.mode??`speed`,r.time,r.score);return i<a||i===a&&t<r.time}function tc(e,t,n={}){if(!Number.isFinite(t)||t<=0)return!1;try{return localStorage.setItem(`2099-pb:${e.id}`,String(t)),localStorage.setItem(`2099-pb-run:${e.id}`,JSON.stringify({time:t,score:n.score??0,splits:n.splits??[]})),localStorage.setItem(`2099-last-course`,JSON.stringify(e)),!0}catch{return!1}}function nc(e){let t=new V(0,-1,0),n=Math.max(600,e.query.bounds.max.y+80),r=Math.min(-100,e.query.bounds.min.y-20),i=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1)];return(a,o,s)=>{let c=[];for(let[l,u]of[[0,0],[-24,0],[24,0],[0,-24],[0,24],[-48,0],[48,0],[0,-48],[0,48]]){let d=a[0]+l,f=a[2]+u,p=e.raycast(new V(d,n,f),t,n-r,.65);if(!p)continue;let m=p.point.y;if(o===`wall-run`){let t=new V(d,Math.max(e.query.bounds.min.y+10,Math.min(a[1],m+14)),f);for(let n of i){let r=e.raycast(t,n,35);if(!r||Math.abs(r.normal.y)>.35)continue;let i=r.point.clone().addScaledVector(r.normal,1.15);e.isCapsuleClear(i,.5,2.1)&&c.push({position:i.toArray(),type:o,radius:8,cost:Math.hypot(l,u)+r.distance})}continue}if(o===`rooftop-vault`){for(let s of i){let i=new V(d+s.x*8,n,f+s.z*8),p=e.raycast(i,t,n-r,.65);if(!p||m-p.point.y<4)continue;let h=new V(d,m+.6,f);e.isCapsuleClear(h,.5,2.1)&&c.push({position:h.toArray(),type:o,radius:9,cost:Math.hypot(l,u)+Math.abs(m-a[1])*.3})}continue}let h=o===`low-swing`?10:o===`point-launch`?4:o===`dive`?18:o===`wind`?20:Math.max(s+3,8),g=o===`low-swing`||o===`point-launch`?m+h:Math.max(m+h,a[1]),_=new V(d,g,f),v=o===`point-launch`?9:s;if(!e.isCapsuleClear(_,.6,2.1)||o!==`point-launch`&&i.some(t=>!e.isCapsuleClear(_.clone().addScaledVector(t,v*.7),.5,2.1)))continue;let y=Math.hypot(l,u)+(o===`low-swing`?m*2:Math.abs(g-a[1])*.6);c.push({position:_.toArray(),type:o,radius:v,cost:y})}c.sort((e,t)=>e.cost-t.cost);let l=c[0];return l?{position:l.position,type:l.type,radius:l.radius}:null}}function rc(e,t){if(!e.gates?.length)return[];let n=new V().fromArray(e.start),r=new V().fromArray(e.finish),i=r.clone().sub(n).setY(0).normalize(),a=e.gates?.filter(e=>e.type===`wind`).map(e=>new V().fromArray(e.position))??[];if(!a.length)for(let e of[.28,.64])a.push(n.clone().lerp(r,e));let o=[];for(let e of a){let n=e.clone().addScaledVector(i,-55),r=e.clone().addScaledVector(i,55),a=Math.max(20,e.y),s=Math.max(600,t.query.bounds.max.y+80);for(let e=0;e<=8;e++){let i=n.clone().lerp(r,e/8),o=t.raycast(new V(i.x,s,i.z),new V(0,-1,0),s+100);o&&(a=Math.max(a,o.point.y+12))}n.y=a,r.y=a+3,o.push({start:n,end:r,radius:12})}return o}function ic(e,t,n){if(e.grounded||e.wallCrawlActive||e.wallRunActive||e.zip||e.mantle)return{active:!1,acceleration:null};let r=new V().copy(e.position),i=new V,a=!1;for(let n of t){let t=n.end.clone().sub(n.start),o=t.length();if(o<.001||n.radius<=0)continue;let s=t.divideScalar(o),c=r.clone().sub(n.start).dot(s);if(c<0||c>o)continue;let l=n.start.clone().addScaledVector(s,c),u=r.distanceTo(l);if(u>n.radius)continue;let d=G.smoothstep(1-u/n.radius,0,.7);i.x+=(s.x*38-e.velocity.x)*.32*d,i.z+=(s.z*38-e.velocity.z)*.32*d,i.y+=(8+G.clamp((l.y-r.y)*.65,-4,5)-e.velocity.y*.3)*d,a=!0}if(!a)return{active:!1,acceleration:null};if(e.swing){let t=r.clone().sub(e.swing.anchor).normalize();i.addScaledVector(t,-i.dot(t))}return i.length()>12&&i.setLength(12),{active:!0,acceleration:{x:i.x,y:i.y,z:i.z}}}function ac(e,t=[]){if(!e.gates?.length)return[e.finish];let n=[],r=t[0]??e.gates[0].id;for(let t=0;t<e.gates.length;t++){let t=e.gates.find(e=>e.id===r);if(!t||(n.push(t.position),!t.next.length))break;r=t.next[0]}return n}function oc(e){e.removeFromParent(),e.traverse(e=>{(e instanceof W||e instanceof at)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})}var sc=class{constructor(e){this.root=new w,this.goal=new w,this.windMeshes=[],this.gateMeshes=new Map,this.course=null,this.activeIds=[],this.particleDensity=1,this.lanes=[],this.goal.name=`race-destination`,this.root.add(this.goal);let t=new W(new _n(8,.18,8,48),new Ne({color:`#74fff1`,depthTest:!1,transparent:!0,opacity:.9}));t.rotation.x=Math.PI/2,this.goal.add(t);let n=new W(new ye(.9,2,75,8,1,!0),new Ne({color:`#54e6ff`,transparent:!0,opacity:.13,side:2,depthWrite:!1,blending:2}));n.position.y=35,this.goal.add(n);let r=new W(new _n(9,.25,6,48),new Ne({color:`#a4ffff`,transparent:!0,opacity:.2,depthWrite:!1,blending:2}));r.position.y=10,this.goal.add(r);let i=new Qe;i.setAttribute(`position`,new Ct(new Float32Array(99),3)),i.setDrawRange(0,2),this.route=new at(i,new mn({color:`#8fefff`,transparent:!0,opacity:.35,dashSize:3,gapSize:3})),this.root.add(this.route),e.add(this.root),this.root.visible=!1}setCourse(e,t){this.course=e,this.root.visible=!0,this.goal.visible=!0,this.route.visible=!0,this.goal.position.fromArray(e.finish);let n=e.finishRadius??9;this.goal.children[0].scale.setScalar(n/8),this.goal.children[0].quaternion.setFromUnitVectors(new V(0,0,1),new V().fromArray(e.start).sub(this.goal.position).normalize()),this.goal.children[2].scale.setScalar(n/9),this.lanes=rc(e,t);for(let e of this.windMeshes)oc(e);this.windMeshes=[];for(let e of this.gateMeshes.values())oc(e);this.gateMeshes.clear();for(let[t,n]of(e.gates??[]).entries()){let r=new W(new _n(n.radius,.16,6,40),new Ne({color:n.type===`precision`?`#ffe87c`:`#73eaff`,transparent:!0,opacity:.4,depthWrite:!1}));r.position.fromArray(n.position);let i=t?e.gates[t-1].position:e.start;r.quaternion.setFromUnitVectors(new V(0,0,1),r.position.clone().sub(new V().fromArray(i)).normalize()),this.root.add(r),this.gateMeshes.set(n.id,r)}for(let e of this.lanes){let t=new w;t.position.copy(e.start),t.quaternion.setFromUnitVectors(new V(0,0,1),e.end.clone().sub(e.start).normalize());let n=e.start.distanceTo(e.end);for(let r=0;r<=8;r++){let i=new W(new _n(e.radius,.035,4,36),new Ne({color:`#81efff`,transparent:!0,opacity:.2,depthWrite:!1,blending:2}));i.position.z=r*n/8,t.add(i)}this.root.add(t),this.windMeshes.push(t)}this.setProgress(e.gates?.length?[e.gates[0].id]:[],new Set),this.setParticleDensity(this.particleDensity)}setParticleDensity(e){this.particleDensity=G.clamp(e,.15,1);for(let e of this.windMeshes)e.children.forEach((e,t)=>{e.visible=t%Math.ceil(1/this.particleDensity)===0})}setProgress(e,t){this.activeIds=[...e];let n=this.course?.gates??[],r=n.filter(t=>e.includes(t.id)),i=e.length===0&&t.size>0;this.route.visible=!i;for(let r of n){let n=this.gateMeshes.get(r.id);if(!n)continue;let a=e.includes(r.id);n.visible=!i&&!t.has(r.id),n.material.opacity=a?.95:.14}r[0]?this.goal.position.fromArray(r[0].position):this.course&&this.goal.position.fromArray(this.course.finish)}update(e,t){if(!this.course)return;this.goal.children[2].rotation.y=t*.35,this.goal.children[2].position.y=10+Math.sin(t*2)*1.5;let n=ac(this.course,this.activeIds),r=this.route.geometry.getAttribute(`position`);r.setXYZ(0,e[0],e[1]+1,e[2]),n.slice(0,32).forEach((e,t)=>r.setXYZ(t+1,...e)),r.needsUpdate=!0,this.route.geometry.setDrawRange(0,Math.min(32,n.length)+1),this.route.computeLineDistances(),this.route.geometry.computeBoundingSphere();for(let e of this.windMeshes)e.children.forEach((e,n)=>{let r=e.material;r.opacity=.1+.18*(.5+.5*Math.sin(t*3-n*.6))})}clear(){this.root.visible=!1,this.lanes=[]}dispose(){oc(this.root)}},cc=class{constructor(e,t,n,r,i){this.root=new w,this.instancedMeshes=[],this.frustum=new Pe,this.matrix=new p,this.box=new Ut,this.cellOffset=new V,this.lastCameraQuaternion=new D,this.lastCameraPosition=new V,this.hasLastCameraPose=!1,this.lastCellX=NaN,this.lastCellZ=NaN,this.lastTileCount=-1,this.lastRange=-1,this.width=r,this.depth=i;let a=new Map;n.traverse(e=>{if(e instanceof W)for(let t of Array.isArray(e.material)?e.material:[e.material])a.set(t.name,t)});let o=(2*Math.ceil(3e3/r)+5)*(2*Math.ceil(3e3/i)+5);e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof W))return;let n=e.geometry.clone().applyMatrix4(new p().multiplyMatrices(t,e.matrixWorld)),r=Array.isArray(e.material)?e.material[0]:e.material,i=a.get(r.name)??r,s=new Ye(n,i,o);s.instanceMatrix.setUsage(ee),s.frustumCulled=!1,s.count=0,this.instancedMeshes.push(s),this.root.add(s)});let s=n.children.find(e=>e.userData.walkableStreetSurface);if(s instanceof W){let e=new Ut().setFromBufferAttribute(s.geometry.getAttribute(`position`)).getSize(new V),t=new Dt(Math.min(e.x,r-.04),e.y,Math.min(e.z,i-.04));t.applyMatrix4(s.matrixWorld),t.translate(0,-.02,0);let n=new Ye(t,s.material,o);n.instanceMatrix.setUsage(ee),n.frustumCulled=!1,n.receiveShadow=!0,n.count=0,this.instancedMeshes.push(n),this.root.add(n)}this.bounds=new Ut().makeEmpty();for(let e of this.instancedMeshes)e.geometry.computeBoundingBox(),this.bounds.union(e.geometry.boundingBox);this.root.updateMatrixWorld(!0),this.root.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldNeedsUpdate=!1})}invalidate(){this.lastCellX=NaN,this.lastCellZ=NaN,this.lastTileCount=-1,this.lastRange=-1,this.hasLastCameraPose=!1}update(e,t,n,r=e.far){let i=Math.round(t.x/this.width),a=Math.round(t.z/this.depth),o=!this.hasLastCameraPose||this.lastCameraQuaternion.angleTo(e.quaternion)>.04||this.lastCameraPosition.distanceToSquared(e.position)>1600,s=n.size;if(!o&&i===this.lastCellX&&a===this.lastCellZ&&s===this.lastTileCount&&r===this.lastRange)return;this.lastCellX=i,this.lastCellZ=a,this.lastTileCount=s,this.lastRange=r,this.hasLastCameraPose=!0,this.lastCameraQuaternion.copy(e.quaternion),this.lastCameraPosition.copy(e.position),e.updateMatrixWorld(),this.frustum.setFromProjectionMatrix(this.matrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));let c=Math.max(this.width,Math.min(e.far,r)),l=Math.ceil(c/this.width)+1,u=Math.ceil(c/this.depth)+1,d=0;for(let e=i-l;e<=i+l;e++)for(let r=a-u;r<=a+u;r++)if(!n.has(`${e}:${r}`)&&(this.cellOffset.set(e*this.width,0,r*this.depth),this.box.copy(this.bounds).translate(this.cellOffset),!(this.box.distanceToPoint(t)>c||!this.frustum.intersectsBox(this.box)))){this.matrix.makeTranslation(this.cellOffset.x,this.cellOffset.y,this.cellOffset.z);for(let e of this.instancedMeshes)e.setMatrixAt(d,this.matrix);d++}for(let e of this.instancedMeshes)e.count=d,e.instanceMatrix.needsUpdate=!0;this.root.userData.tileCount=d,this.root.userData.texturedTileCount=d}dispose(){this.root.removeFromParent();for(let e of this.instancedMeshes)e.geometry.dispose(),e.dispose()}},lc=new V(-.52,.42,-.74).normalize(),uc=`#ffe3c2`,dc=new V(.44,.52,.6).normalize(),fc=Object.freeze({day:170,dusk:14,night:70,dawn:14});function pc(e){let{day:t,dusk:n,night:r,dawn:i}=fc,a=t+n+r+i,o=(e%a+a)%a;return o<t?0:o<t+n?(o-t)/n:o<t+n+r?1:1-(o-t-n-r)/i}var mc=new Map(Object.keys(fn).map(e=>[e,{top:new L(fn[e].top),horizon:new L(fn[e].horizon),fog:new L(fn[e].fog)}])),hc=new L(`#18283e`),gc=new L,_c=320,vc=900;function yc(e){let t=620,n={time:{value:0},night:{value:0},clouds:{value:.45},top:{value:new L(`#6b89a3`)},horizon:{value:new L(`#ecc493`)}},r=new ce({side:1,depthWrite:!1,depthTest:!1,uniforms:n,vertexShader:`varying vec3 direction;void main(){direction=position;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}`,fragmentShader:`varying vec3 direction;uniform float time,night,clouds;uniform vec3 top,horizon;
 float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
 float fbm(vec3 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=noise(p)*a;p=p*2.03+vec3(13.1,7.3,3.7);a*=.5;}return n;}
 void main(){vec3 d=normalize(direction);float h=smoothstep(-.05,.45,d.y);vec3 sky=mix(mix(horizon,vec3(.025,.04,.085),night),mix(top,vec3(.002,.006,.025),night),h);
 float sun=max(0.,dot(d,normalize(vec3(-.5214,.4212,-.7421))));sky+=vec3(1.,.66,.36)*pow(sun,600.)*3.2*(1.-night)*(1.-clouds*.75);
 sky+=vec3(1.,.72,.42)*pow(sun,20.)*1.05*(1.-night)*(1.-clouds*.6);
 float cloud=smoothstep(.64-clouds*.3,.78-clouds*.26,fbm(d*7.+vec3(time*.003,0.,time*.001)));cloud*=smoothstep(-.03,.18,d.y);vec3 cloudTint=mix(mix(horizon,vec3(1.),.3),vec3(.027,.042,.075),night);sky=mix(sky,cloudTint,cloud*.68);
 float stars=pow(hash(floor(d*1100.)),1600.)*smoothstep(.08,.5,d.y)*night*(1.-cloud);sky+=vec3(.6,.75,1.)*stars;
 float moon=max(0.,dot(d,normalize(vec3(.44,.52,.6))));
 sky+=vec3(.88,.93,1.)*smoothstep(.99935,.99972,moon)*1.55*night;
 sky+=vec3(.5,.6,.85)*pow(moon,800.)*.5*night;
 sky+=vec3(.18,.24,.4)*pow(moon,20.)*.12*night;
 gl_FragColor=vec4(sky,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),i=new W(new Xe(1,64,32),r);return i.scale.setScalar(100),i.renderOrder=-100,i.frustumCulled=!1,e.add(i),{update(r,a,o,s,c=`golden`){let l=mc.get(c)??mc.get(`golden`),u=fn[c],d=1-Math.exp(-s*2);n.time.value=r;let f=typeof o==`number`?G.clamp(o,0,1):+!!o;if(n.night.value=G.damp(n.night.value,f,2,s),n.top.value.lerp(l.top,d),n.horizon.value.lerp(l.horizon,d),n.clouds.value=G.lerp(n.clouds.value,u.clouds,d),i.position.copy(a),e.fog&&(e.fog.color.lerp(gc.copy(l.fog).lerp(hc,n.night.value),d),e.fog instanceof O)){let n=c===`blizzard`||c===`snow`;e.fog.near=Math.max(26,t*(n?.16:.42)),e.fog.far=Math.max(60,t*(n?.62:1))}},setViewRange(e){t=G.clamp(Number.isFinite(e)?e:t,_c,vc)},get viewRange(){return t},get night(){return n.night.value}}}function bc(e,t){let n=new Float32Array(32768),r=fn[e],i=new L(r.top),a=new L(r.horizon),o=new L(r.fog).multiplyScalar(.42),s=+!!t,c=t?.16:1,l=new V;for(let e=0;e<64;e+=1){let t=(e+.5)/64*Math.PI;for(let r=0;r<128;r+=1){let u=(r+.5)/128*Math.PI*2-Math.PI;l.set(Math.sin(t)*Math.cos(u),Math.cos(t),Math.sin(t)*Math.sin(u));let d=l.y,f,p,m;if(d>=0){let e=G.smoothstep(d,0,.55);f=G.lerp(a.r,i.r,e),p=G.lerp(a.g,i.g,e),m=G.lerp(a.b,i.b,e)}else{let e=G.clamp(-d/.25,0,1);f=G.lerp(a.r,o.r,e),p=G.lerp(a.g,o.g,e),m=G.lerp(a.b,o.b,e)}let h=Math.max(0,l.dot(lc)),g=h**60*10+h**8*.32,_=(e*128+r)*4;n[_]=f*c+g*(1-s),n[_+1]=p*c+g*(1-s)*.86,n[_+2]=m*c+g*(1-s)*.68,n[_+3]=1}}let u=new H(n,128,64,De,Le);return u.mapping=303,u.needsUpdate=!0,u}var xc=class e{constructor(){this.night={value:0},this.time={value:0}}static{this.VERTEX_INJECTION=`#include <begin_vertex>
        vec3 nlNormalLocal = normal;
        vec4 nlPositionLocal = vec4(position, 1.);
        #ifdef USE_INSTANCING
          nlNormalLocal = mat3(instanceMatrix) * nlNormalLocal;
          nlPositionLocal = instanceMatrix * nlPositionLocal;
        #endif
        nlWorldNormal = normalize(mat3(modelMatrix) * nlNormalLocal);
        nlWorldPosition = (modelMatrix * nlPositionLocal).xyz;`}static{this.FRAGMENT_INJECTION=`#include <emissivemap_fragment>
        {
          // Only vertical facades carry windows; roofs and street slabs stay
          // dark so the moonlight reads against them.
          vec3 nlNormal = normalize(nlWorldNormal);
          if (cityNight > .003 && abs(nlNormal.y) < .55) {
            vec2 nlFacade = abs(nlNormal.x) > abs(nlNormal.z)
              ? nlWorldPosition.zy
              : nlWorldPosition.xy;
            vec2 nlGrid = vec2(nlFacade.x * (1. / 3.05), nlFacade.y * (1. / 3.4));
            vec2 nlCell = floor(nlGrid);
            vec2 nlUv = fract(nlGrid);
            float nlPane = step(.16, nlUv.x) * (1. - step(.84, nlUv.x))
              * step(.22, nlUv.y) * (1. - step(.80, nlUv.y));
            if (nlPane > 0.) {
              // Rooms share a lit state per bay of columns per floor, then a
              // per-window variation decides which rooms in a lit bay are on.
              vec2 nlBay = vec2(floor(nlGrid.x * .25), nlCell.y);
              float nlBaySeed = fract(sin(dot(nlBay, vec2(127.1, 311.7))) * 43758.5453);
              float nlRoomSeed = fract(sin(dot(nlCell, vec2(269.5, 183.3))) * 43758.5453);
              float nlOn = step(.54, nlBaySeed) * step(.28, nlRoomSeed);
              // A few rooms breathe slowly, like people moving around inside.
              float nlBreathe = .82 + .18 * sin(cityNightTime * (.25 + nlRoomSeed * .5) + nlBaySeed * 39.);
              vec3 nlWarm = vec3(1., .72, .42);
              vec3 nlCool = vec3(.66, .80, 1.);
              vec3 nlTint = mix(nlWarm, nlCool, step(.78, nlRoomSeed));
              totalEmissiveRadiance += nlTint * (nlPane * nlOn * nlBreathe * 1.45 * cityNight);
            }
          }
        }`}apply(t){t.traverse(t=>{if(!(t instanceof W))return;let n=Array.isArray(t.material)?t.material:[t.material];for(let t of n){if(!(t instanceof zt)||t.userData.cityNightLights)continue;t.userData.cityNightLights=!0;let n=t.onBeforeCompile;t.onBeforeCompile=(r,i)=>{n?.call(t,r,i),r.uniforms.cityNight=this.night,r.uniforms.cityNightTime=this.time,r.vertexShader=`varying vec3 nlWorldPosition;varying vec3 nlWorldNormal;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace(`#include <begin_vertex>`,e.VERTEX_INJECTION),r.fragmentShader=`uniform float cityNight;uniform float cityNightTime;varying vec3 nlWorldPosition;varying vec3 nlWorldNormal;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace(`#include <emissivemap_fragment>`,e.FRAGMENT_INJECTION)},t.customProgramCacheKey=()=>t.userData.cityWeather?`city-night-weather-v1`:`city-night-v1`,t.needsUpdate=!0}})}update(e,t){this.night.value=G.clamp(Number.isFinite(e)?e:0,0,1),this.time.value=Number.isFinite(t)?t:0}},Sc=new V(0,0,-1),Cc=.3,wc=.29,Tc=(e,t)=>Math.hypot(e.r-t.r,e.g-t.g,e.b-t.b),Ec=new V,Dc=new V,Oc=new V,kc=new V,Ac=new V,jc=new V,Mc=new V,Nc=new D,Pc=new V,Fc=new V,Ic=class{constructor(){this.root=new w,this.arms=[],this.materials=[],this.runPhase=0,this.flashStrength=0,this.root.name=`first-person-arms`,this.root.visible=!1,this.root.matrixAutoUpdate=!0}setSuit(e){for(let e of this.arms)this.root.remove(e.shoulder);for(let e of this.materials)e.dispose();this.materials=[],this.arms=[];let t=new Map;e?.traverse(e=>{let n=e instanceof W||e instanceof qe?e:null;if(!n)return;let r=n.geometry.getAttribute(`position`)?.count??0;for(let e of Array.isArray(n.material)?n.material:[n.material])t.set(e,(t.get(e)??0)+r)});let n=new L(`#b3232b`),r=-1,i=null;for(let[e,n]of t){let t=e;!t.color||n<=r||(r=n,i=t.color)}i&&(n=i.clone());let a=null,o=-1;for(let[e,r]of t){let t=e;t.color&&(Tc(t.color,n)<=.22||r<=o||(o=r,a=t.color.clone()))}a||=n.clone().offsetHSL(0,0,.16);let s=new zt({color:n,roughness:.46,metalness:.04}),c=new zt({color:a,roughness:.38,metalness:.06});this.materials=[s,c],this.arms=[this.buildArm(-1,s,c),this.buildArm(1,s,c)]}buildArm(e,t,n){let r=new w;r.position.set(e*.235,-.19,-.06);let i=new ot(.054,.27,6,12);i.rotateX(Math.PI/2),i.translate(0,0,-.3/2),r.add(new W(i,t));let a=new w;a.position.set(0,0,-.3),r.add(a);let o=new ot(.047,.26,6,12);o.rotateX(Math.PI/2),o.translate(0,0,-.29/2),a.add(new W(o,t));let s=new w;s.position.set(0,0,-.29);let c=new Dt(.078,.034,.105,1,1,1);c.translate(0,0,-.045),s.add(new W(c,n));for(let e=0;e<4;e+=1){let t=new ot(.0115,.062,4,8);t.rotateX(Math.PI/2);let r=new W(t,n);r.position.set(-.027+e*.018,0,-.118),r.rotation.x=-.22-e*.025,s.add(r)}let l=new ot(.013,.05,4,8);l.rotateX(Math.PI/2);let u=new W(l,n);u.position.set(-e*.045,-.004,-.08),u.rotation.set(-.35,e*.75,0),s.add(u);let d=new W(new Xe(.02,10,8),new Ne({color:`#ffffff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,toneMapped:!1}));return d.position.set(0,0,-.02),d.visible=!1,s.add(d),a.add(s),r.traverse(e=>{let t=e;t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1)}),this.root.add(r),{side:e,shoulder:r,elbow:a,palm:s,flash:d,target:new V(e*.17,-.24,-.38),pole:new V(e*.35,-1,0).normalize()}}thwip(){this.flashStrength=1}palmWorld(e,t){let n=this.arms.find(t=>t.side===e)??this.arms[1]??null;return n?n.palm.getWorldPosition(t):t.set(0,0,0)}get palmWorldScratch(){return Fc}update(e,t){if(!this.arms.length)return;let n=Math.max(1e-4,Math.min(t.delta,.1));this.runPhase+=n*(6+Math.min(t.speed,16)*.55);let r=this.arms[0],i=this.arms[1],a=Math.sin(t.time*1.7)*.01,o=t.grounded&&t.speed>4.5,s=this.runPhase;if(t.wallCrawl)Pc.set(-.19,.03,-.43+Math.sin(s*.7)*.03),r.target.lerp(Pc,1-Math.exp(-14*n)),Pc.set(.19,.01,-.43-Math.sin(s*.7)*.03),i.target.lerp(Pc,1-Math.exp(-14*n));else if(t.swingTargetWorld){let a=Mc.copy(t.swingTargetWorld).applyMatrix4(e.matrixWorldInverse),o=.59*.965;a.length()>o&&a.setLength(o),i.target.lerp(a,1-Math.exp(-20*n)),Pc.set(-.2,-.27,-.3),r.target.lerp(Pc,1-Math.exp(-14*n))}else if(t.zipTargetWorld){let a=Mc.copy(t.zipTargetWorld).applyMatrix4(e.matrixWorldInverse),o=.59*.965;a.length()>o&&a.setLength(o),i.target.lerp(a,1-Math.exp(-22*n)),Pc.set(-.17,-.23,-.34),r.target.lerp(Pc,1-Math.exp(-14*n))}else t.gliding?(Pc.set(-.3,-.11,-.16),r.target.lerp(Pc,1-Math.exp(-10*n)),Pc.set(.3,-.11,-.16),i.target.lerp(Pc,1-Math.exp(-10*n))):o?(Pc.set(-.16,-.16+Math.sin(s+Math.PI)*.055,-.33+Math.sin(s+Math.PI)*.085),r.target.lerp(Pc,1-Math.exp(-16*n)),Pc.set(.16,-.16+Math.sin(s)*.055,-.33+Math.sin(s)*.085),i.target.lerp(Pc,1-Math.exp(-16*n))):(Pc.set(-.17,-.235+a,-.34),r.target.lerp(Pc,1-Math.exp(-12*n)),Pc.set(.17,-.22+a,-.36),i.target.lerp(Pc,1-Math.exp(-12*n)));for(let e of this.arms)this.solveArm(e);let c=Math.min(t.speed/40,1);this.root.position.set(Math.sin(s*.5)*.006*c,Math.sin(this.runPhase*2)*.008*c,0),this.root.rotation.z=Math.sin(s*.5)*.02*c,this.flashStrength=Math.max(0,this.flashStrength-n*5.5);for(let e of this.arms)e.flash.visible=this.flashStrength>.03,e.flash.scale.setScalar(.6+this.flashStrength*1.6),e.flash.material.opacity=this.flashStrength}solveArm(e){let t=e.shoulder.position;Ec.copy(e.target).sub(t);let n=Ec.length();if(n<1e-4)return;let r=.58705;n>r&&(Ec.multiplyScalar(r/n),n=r);let i=Ec.divideScalar(n),a=G.clamp((Cc*Cc+n*n-wc*wc)/(2*Cc*n),-1,1),o=Math.acos(a);Dc.crossVectors(i,e.pole),Dc.lengthSq()<1e-8?Dc.set(1,0,0):Dc.normalize(),Oc.copy(i).applyAxisAngle(Dc,o),kc.copy(i).applyAxisAngle(Dc,-o),kc.dot(e.pole)>Oc.dot(e.pole)&&Oc.copy(kc),e.shoulder.quaternion.setFromUnitVectors(Sc,Oc),Ac.copy(t).addScaledVector(Oc,Cc),jc.copy(e.target).sub(Ac).normalize(),Nc.copy(e.shoulder.quaternion).invert(),jc.applyQuaternion(Nc),e.elbow.quaternion.setFromUnitVectors(Sc,jc)}dispose(){for(let e of this.arms)this.root.remove(e.shoulder);for(let e of this.materials)e.dispose();for(let e of this.arms)e.flash.material.dispose();this.arms=[],this.materials=[],this.root.removeFromParent()}},Lc=`assets/effects/spiderman-web.glb`,Rc=.02,zc=8,Bc=.012,Vc=new V(0,1,0),Hc=class{constructor(e){this.group=new w,this.meshes=[],this.sourceBounds=new Ut,this.segmentCount=0,this.length=0,this.materials=new Set,this.worldToLocal=new p,this.matrix=new p,this.start=new V,this.end=new V,this.direction=new V,this.scale=new V,this.rotation=new D,this.disposed=!1,this.group.name=`downloaded-spiderman-web`,this.group.visible=!1,e.updateWorldMatrix(!0,!0);let t=[];if(e.traverseVisible(e=>{e instanceof W&&!(e instanceof qe)&&e.geometry.getAttribute(`position`)&&t.push(e)}),!t.length)throw Error(`Spider-Man web asset contains no renderable tube meshes`);for(let e of t)this.sourceBounds.union(new Ut().setFromObject(e));let n=this.sourceBounds.getSize(new V),r=[n.x,n.y,n.z],i=r.indexOf(Math.max(...r)),a=r.filter((e,t)=>t!==i);if(r[i]<Math.max(...a)*10)throw Error(`Web model is not a longitudinal strand`);let o=new V().setComponent(i,1),s=new p().makeRotationFromQuaternion(new D().setFromUnitVectors(o,Vc)),c=t.map(e=>{let t=e.geometry.clone();return t.applyMatrix4(new p().multiplyMatrices(s,e.matrixWorld)),t.computeBoundingBox(),{mesh:e,geometry:t}}),l=new Ut;for(let{geometry:e}of c)l.union(e.boundingBox);let u=l.max.y-l.min.y,d=c.reduce((e,t)=>t.geometry.boundingBox.max.y-t.geometry.boundingBox.min.y>e.geometry.boundingBox.max.y-e.geometry.boundingBox.min.y?t:e).geometry.getAttribute(`position`),f=new V,m=new V,h=0,g=0,_=new V;for(let e=0;e<d.count;e++)_.fromBufferAttribute(d,e),_.y<=l.min.y+u*.02&&(f.add(_),h++),_.y>=l.max.y-u*.02&&(m.add(_),g++);f.divideScalar(Math.max(1,h)),m.divideScalar(Math.max(1,g));let v=Math.max(1e-6,m.y-f.y),y=(m.x-f.x)/v,b=(m.z-f.z)/v,x=new p().set(1,-y,0,-(f.x-y*f.y),0,1,0,-l.min.y,0,-b,1,-(f.z-b*f.y),0,0,0,1),S=new Ut;for(let{geometry:e}of c)e.applyMatrix4(x),e.computeBoundingBox(),S.union(e.boundingBox);let C=Rc/Math.max(S.max.x-S.min.x,S.max.z-S.min.z,1e-6),T=new p().makeScale(C,1/u,C),E=new Map,O=e=>{let t=E.get(e);return t||(t=e.clone(),E.set(e,t),this.materials.add(t)),t},k=0;for(let{mesh:e,geometry:t}of c){t.applyMatrix4(T),t.computeBoundingBox(),t.computeBoundingSphere(),k+=(t.index?.count??t.getAttribute(`position`).count)/3;let n=Array.isArray(e.material)?e.material.map(O):O(e.material),r=new Ye(t,n,12);r.name=`source-web:${e.name}`,r.count=0,r.instanceMatrix.setUsage(ee),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,this.meshes.push(r),this.group.add(r)}this.sourceTriangleCount=k,this.maximumTriangles=k*12}update(e,t,n,r=1){if(this.disposed)return;let i=Number.isFinite(e.x+e.y+e.z+t.x+t.y+t.z);if(this.length=i?e.distanceTo(t):0,!n||!i||this.length<.001){this.group.visible=!1,this.segmentCount=0;for(let e of this.meshes)e.count=0;return}this.group.visible=!0,this.group.updateWorldMatrix(!0,!1),this.worldToLocal.copy(this.group.matrixWorld).invert(),this.segmentCount=Math.min(12,Math.max(1,Math.ceil(this.length/zc)));let a=G.clamp(Number.isFinite(r)?r:1,0,1),o=Math.min(1.2,this.length*.012)*(1-a);for(let n=0;n<this.segmentCount;n++){let r=n/this.segmentCount,i=(n+1)/this.segmentCount;this.start.lerpVectors(e,t,r),this.end.lerpVectors(e,t,i),this.start.y-=o*4*r*(1-r),this.end.y-=o*4*i*(1-i),this.direction.subVectors(this.end,this.start);let a=this.direction.length();this.direction.multiplyScalar(1/Math.max(a,1e-6)),n>0&&(this.start.addScaledVector(this.direction,-.006),a+=Bc*.5),n<this.segmentCount-1&&(a+=Bc*.5),this.rotation.setFromUnitVectors(Vc,this.direction),this.scale.set(1,a,1),this.matrix.compose(this.start,this.rotation,this.scale).premultiply(this.worldToLocal);for(let e of this.meshes)e.setMatrixAt(n,this.matrix)}for(let e of this.meshes)e.count=this.segmentCount,e.instanceMatrix.needsUpdate=!0}dispose(){if(!this.disposed){this.disposed=!0,this.group.visible=!1,this.group.removeFromParent();for(let e of this.meshes)e.dispose(),e.geometry.dispose();for(let e of this.materials)e.dispose();this.group.clear()}}};function Uc(e){return e.register(e=>({name:`KHR_materials_pbrSpecularGlossiness`,beforeRoot(){for(let t of e.json.materials??[]){let e=t.extensions?.KHR_materials_pbrSpecularGlossiness;!e||t.pbrMetallicRoughness||(t.pbrMetallicRoughness={baseColorFactor:e.diffuseFactor??[1,1,1,1],baseColorTexture:e.diffuseTexture,metallicFactor:0,roughnessFactor:Math.max(.3,1-(e.glossinessFactor??.5))})}return null}})),e}function Wc(e){e.traverse(e=>{if(e instanceof W)for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof zt&&(t.emissiveIntensity=Math.min(t.emissiveIntensity,.65),t.roughness=.52)})}var Gc=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Kc=new Set(cn.map(e=>e.id)),qc=new Set(qt.map(e=>e.id)),Jc=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`&&Number.isFinite(e));function Yc(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.playerId==`string`&&t.playerId.length>=8&&t.playerId.length<=80&&Kc.has(t.suitId)&&qc.has(t.districtId)&&Jc(t.position)&&Jc(t.velocity)&&t.position.every(e=>Math.abs(e)<1e6)&&t.velocity.every(e=>Math.abs(e)<500)&&typeof t.yaw==`number`&&Number.isFinite(t.yaw)&&typeof t.mode==`string`&&t.mode.length<=32&&typeof t.sequence==`number`&&typeof t.sentAt==`number`}function Xc(){let e=`spiderman-multiplayer-id`,t=window.sessionStorage.getItem(e);if(t)return t;let n=crypto.randomUUID();return window.sessionStorage.setItem(e,n),n}var Zc=class e{constructor(e,t,n,r){this.channel=null,this.channelVersion=0,this.subscribed=!1,this.client=e,this.suitId=t,this.districtId=n,this.handlers=r,this.id=Xc()}static create(t,n,r){let i=In();return i?new e(i,t,n,r):(r.onStatus(`disabled`),null)}async join(e=this.districtId,t=this.suitId){this.districtId=e,this.suitId=t,this.subscribed=!1,this.handlers.onStatus(`connecting`);let n=++this.channelVersion;if(this.channel&&await this.client.removeChannel(this.channel),n!==this.channelVersion)return;let r=this.client.channel(`spiderman:${e}`,{config:{private:!0,broadcast:{ack:!1,self:!1},presence:{key:this.id}}});this.channel=r;let i=()=>{if(r!==this.channel)return;let e=new Set,t=r.presenceState();for(let n of Object.values(t))for(let t of n)t.playerId&&t.playerId!==this.id&&e.add(t.playerId);this.handlers.onPeers(e)};r.on(`broadcast`,{event:`player_state`},({payload:e})=>{!Yc(e)||e.playerId===this.id||e.districtId!==this.districtId||this.handlers.onPlayerState(e)}).on(`broadcast`,{event:`race`},({payload:e})=>{I(e)&&e.sender!==this.id&&this.handlers.onRacePacket?.(e)}).on(`presence`,{event:`sync`},i).on(`presence`,{event:`join`},i).on(`presence`,{event:`leave`},i).subscribe(async e=>{r===this.channel&&(e===`SUBSCRIBED`?(this.subscribed=!0,await r.track({playerId:this.id,suitId:this.suitId,districtId:this.districtId,joinedAt:Date.now()}),this.handlers.onStatus(`online`),i()):e===`CHANNEL_ERROR`||e===`TIMED_OUT`?(this.subscribed=!1,this.handlers.onStatus(`error`)):e===`CLOSED`&&(this.subscribed=!1))})}publish(e){!this.channel||!this.subscribed||this.channel.send({type:`broadcast`,event:`player_state`,payload:{...e,playerId:this.id,districtId:this.districtId}})}publishRace(e){!this.channel||!this.subscribed||e.sender!==this.id||this.channel.send({type:`broadcast`,event:`race`,payload:e})}async dispose(){this.channelVersion+=1,this.subscribed=!1,this.handlers.onPeers(new Set),this.channel&&await this.client.removeChannel(this.channel),this.channel=null}},Qc=Object.freeze({cruiseSpeed:38,pumpAcceleration:26,steeringAcceleration:68,catchSeconds:.24,wallCruiseSpeed:27,wallMaximumSpeed:48}),$c=(e,t,n)=>Math.max(t,Math.min(n,e)),el=e=>Math.hypot(e.x,e.y,e.z),tl=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z,nl=(e,t)=>({x:e.x*t,y:e.y*t,z:e.z*t}),rl=(e,t={x:0,y:0,z:-1})=>el(e)>1e-7?nl(e,1/el(e)):{...t};function il(e,t){let n=tl(e,t);return{x:e.x-t.x*n,y:e.y-t.y*n,z:e.z-t.z*n}}function al(e,t,n){let r=rl({x:n.x,y:0,z:n.z}),i=Math.max(12,(t.x-e.x)*r.x+(t.z-e.z)*r.z);return{x:e.x+r.x*i,y:t.y,z:e.z+r.z*i}}function ol(e,t,n){let r=il(e,t),i=el(e);if(el(r)<.1)return{...e};let a=nl(rl(r),i),o=1-Math.exp(-n/Qc.catchSeconds);return nl(rl({x:e.x+(a.x-e.x)*o,y:e.y+(a.y-e.y)*o,z:e.z+(a.z-e.z)*o},rl(e)),i)}function sl(e,t,n,r,i,a=1,o=1){let s=Ot(e,r),c=$c((t-.06)/.18,0,1);if(!c)return s;let l=rl({x:s.x,y:0,z:s.z},rl({x:n.x,y:0,z:n.z})),u=Math.hypot(s.x,s.z),d=$c(s.y/30,0,1),f=(i?6*(1-d*.6):2.5)*c*a*$c((55-u)/25,0,1);return Ot({x:s.x+l.x*f,y:s.y+(i?(8+$c(el(s)*.08,0,4))*(.8+d*.4)*c*o:0),z:s.z+l.z*f},r)}function cl(e,t,n,r,i,a,o=!1){let s=rl({x:t.x,y:0,z:t.z},{x:1,y:0,z:0}),c={x:s.z,y:0,z:-s.x},l={x:-n.z,y:0,z:n.x},u=Math.abs(tl(l,c))>.12?Math.sign(tl(l,c)):1,d=il(e,s),f={x:c.x*i*u,y:r,z:c.z*i*u};el(f)<.1&&(f=o&&el(d)<4?{x:0,y:1,z:0}:rl(d,{x:0,y:1,z:0}));let p=el(o?e:d),m=$c(o?Math.max(18,p*.9):p+(Qc.wallCruiseSpeed-p)*(1-Math.exp(-1.2*a)),12,Qc.wallMaximumSpeed),h=nl(rl(f),m),g=o?1:1-Math.exp(-9*a),_=nl(rl({x:d.x+(h.x-d.x)*g,y:d.y+(h.y-d.y)*g,z:d.z+(h.z-d.z)*g},rl(f)),m);return{x:_.x-s.x*.8,y:_.y,z:_.z-s.z*.8}}function ll(e,t,n,r,i,a){let o=$c(-n.y,0,1),s=$c(r/.16,0,1);return wt(e,t,i,Math.max(Qc.steeringAcceleration,a)*(.45+.55*o)*s)}var ul=[`collision`,`ground`,`steering`,`comfort`];function dl(e,t,n=84){let r=Math.max(0,Math.min(.05,Number.isFinite(t)?t:0))*n,i=r,a={x:0,y:0,z:0},o={ground:0,collision:0,steering:0,comfort:0};for(let t of ul)for(let n of e){if(n.priority!==t)continue;let e=n.deltaVelocity,r=Math.hypot(e.x,e.y,e.z);if(!Number.isFinite(r)||r<1e-9)continue;let s=Math.min(i,r),c=s/r;a.x+=e.x*c,a.y+=e.y*c,a.z+=e.z*c,i-=s,o[t]+=s}return{deltaVelocity:a,applied:o,spent:r-i,allowance:r}}var fl=Object.freeze({gravity:29,groundAcceleration:54,airAcceleration:13,groundFriction:11,runSpeed:13,maximumSpeed:68,jumpSpeed:13.5,coyoteTime:.12,jumpBufferTime:.13,playerRadius:.46,playerHeight:2.05,collisionStep:.24,swingMinimumLength:5,swingMaximumLength:78,swingSpring:64,swingDamping:10,swingPumpAcceleration:24,swingSteerAcceleration:15,swingReelSpeed:9,swingReleaseBoost:13,swingReleaseLift:8.5,swingReleaseForwardScale:1,swingReleaseLiftScale:1,zipAcceleration:140,zipDamping:4,zipMaximumSpeed:60,pointLaunchWindow:5.5,pointLaunchSpeed:34,pointLaunchLift:15,diveGravityMultiplier:1.72,diveAcceleration:11,wallStickAcceleration:25,wallRunMinimumSpeed:7,wallRunSpeed:15,wallRunLift:5.5,wallCrawlSpeed:4.2,wallMantleSpeed:5.2,wallJumpOutSpeed:12,wallJumpUpSpeed:12.8,wallContactGrace:.14,anchorMinimumDistance:4,anchorMaximumDistance:92,anchorMinimumHeight:1.2,baseFov:66,maximumFov:91}),pl=1e-7,ml=Object.freeze({x:0,y:1,z:0}),hl=(e,t=0)=>Number.isFinite(e)?e:t,gl=(e,t,n)=>Math.max(t,Math.min(n,e)),_l=e=>gl(e,0,1),vl=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),J=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),yl=e=>J(e.x,e.y,e.z),Y=(e,t)=>J(e.x+t.x,e.y+t.y,e.z+t.z),bl=(e,t)=>J(e.x-t.x,e.y-t.y,e.z-t.z),X=(e,t)=>J(e.x*t,e.y*t,e.z*t),xl=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z,Sl=(e,t)=>J(e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x),Cl=e=>xl(e,e),Z=e=>Math.sqrt(Cl(e)),wl=(e,t)=>Z(bl(e,t)),Q=(e,t=J())=>{let n=Z(e);return n>pl?X(e,1/n):yl(t)},Tl=(e,t)=>bl(e,X(t,xl(e,t))),$=e=>J(e.x,0,e.z),El=(e,t,n)=>J(e.x+(t.x-e.x)*n,e.y+(t.y-e.y)*n,e.z+(t.z-e.z)*n),Dl=(e,t,n,r)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-n*r));function Ol(e,t,n,r){let i=-1/0,a=1/0,o=J();for(let s of[`x`,`y`,`z`]){let c=t[s];if(Math.abs(c)<pl){if(e[s]<=n[s]+pl||e[s]>=r[s]-pl)return null;continue}let l=(n[s]-e[s])/c,u=(r[s]-e[s])/c,d=Math.min(l,u),f=Math.max(l,u);if(d>i&&(i=d,o=J(),o[s]=c>0?-1:1),a=Math.min(a,f),i>a)return null}return a<0||i>1||i<-1e-7&&a<pl?null:{time:Math.max(0,i),normal:o}}function kl(e,t,n,r=.08){let i=bl(t,e),a=Z(i);if(a<pl)return!1;let o=1-Math.min(.02,Math.max(0,r)/a);return!n.some(t=>{let n=Ol(e,i,t.min,t.max);return n!==null&&n.time<o})}function Al(e){return{...fl,...e}}function jl(e=J(),t=J()){return{position:yl(e),velocity:yl(t),grounded:!1,advanced:ln(),mode:`fall`,swing:null,zip:null,wall:null,elapsed:0,airSeconds:0,coyoteSeconds:0,jumpBufferSeconds:0,landingSeconds:0,pointLaunchSeconds:0,wallJumpSeconds:0,perchSeconds:0,heading:0,wallCrawlActive:!1,mantle:null}}function Ml(e,t,n){e.position.x=t.x,e.position.y=t.y,e.position.z=t.z,e.velocity.x=n.x,e.velocity.y=n.y,e.velocity.z=n.z}function Nl(e,t,n,r=fl){let i=Q(t,J(0,.35,-1)),a=null,o=-1/0;for(let t of n){if(t.lineOfSight===!1)continue;let n=bl(t.point,e),s=Z(n);if(s<r.anchorMinimumDistance||s>r.anchorMaximumDistance||n.y<r.anchorMinimumHeight)continue;let c=xl(i,X(n,1/Math.max(s,pl))),l=_l(n.y/28),u=1-Math.abs(s-34)/r.anchorMaximumDistance,d=t.kind===`facade`||t.kind===`ledge`?.14:t.kind===`roof`||t.kind===`perch`?.12:0,f=(c*2.8+l*.58+u*.35+d)*Math.max(.05,t.weight??1);f>o&&(a=t,o=f)}return a}function Pl(e,t,n,r,i,a=29){let o=bl(e,r.point),s=Math.max(1,Z(o)),c=Q(o),l=Z(t),u=yl(e),d=Tl(t,c),f=0,p=yl(u),m=i.anchorColliders??i.colliders??[];for(let e=0;e<6;e++){let e=yl(u);d.y-=a*.12;let t=Y(u,X(d,.12)),n=bl(t,r.point);if(Z(n)>s){let e=Q(n);u=Y(r.point,X(e,s)),d=Tl(d,e)}else u=t;i.swingPathClear&&!i.swingPathClear(e,u)&&f++,u.y<p.y&&(p=yl(u)),m.some(e=>u.x>e.min.x-.5&&u.x<e.max.x+.5&&u.z>e.min.z-.5&&u.z<e.max.z+.5&&u.y<e.max.y&&u.y+2>e.min.y)&&f++}let h=i.sampleGround?.(p,.2,80)??i.groundY,g=h===void 0?8:p.y-h,_=_l((g-.7)/5),v=h===void 0?.5:Math.exp(-(((g-3.2)/4.2)**2)),y=l>3?Z(Tl(t,c))/l:1,b=xl(bl(u,e),Q($(n)))/Math.max(10,l*.72),x=l>3?xl(Q(d),Q(t)):1;return y*1.4+_*.7+v*.75+b*1.2+x*.6-f*1.5}function Fl(e,t,n,r){let i=t.cameraForward??t.move??J(0,0,-1),a=Q(t.aimDirection??Y(i,J(0,.5,0))),o=n.anchorColliders??n.colliders??[],s=n.sampleGround?.(e.position,.2,180)??(n.groundY!==void 0&&n.groundY>-1e3?n.groundY:void 0),c=s===void 0?0:Math.max(0,e.position.y-s),l=c>12||e.velocity.y<-8?Math.max(-20,r.anchorMinimumHeight-Math.max(0,c-8)*.32):r.anchorMinimumHeight,u=null,d=-1/0,f=r.profiledSwing?[...n.anchorCandidates??[]].sort((t,n)=>xl(a,Q(bl(n.point,e.position)))-xl(a,Q(bl(t.point,e.position)))).slice(0,12):n.anchorCandidates??[];for(let t of f){if(r.profiledSwing&&t.id&&t.id===e.previousSwingAnchorId&&e.elapsed<(e.previousSwingAnchorUntil??0)||!r.allowSkyFallback&&t.id===`sky-fallback`||t.lineOfSight===!1)continue;let s=bl(t.point,e.position),c=Z(s);if(r.flowTraversal&&xl($(s),Q($(i)))<-4||r.flowTraversal&&!e.grounded&&e.velocity.y>3&&(s.y<3.5||c<8)||c<r.anchorMinimumDistance||c>Math.min(r.anchorMaximumDistance,r.swingMaximumLength)||s.y<l||!kl(e.position,t.point,o))continue;let f=xl(a,Q(s))*1.8+Pl(e.position,e.velocity,i,t,n,r.gravity)+Math.min(.6,Math.max(-.5,(t.weight??1)-1))+(t.id&&t.id===e.preferredAnchorId?.4:0);f>d&&(d=f,u=t)}return u&&(e.preferredAnchorId=u.id),u}function Il(e,t,n,r){let i=n.anchorColliders??n.colliders??[],a=(n.zipTargets??n.anchorCandidates??[]).filter(t=>t.id!==`sky-fallback`&&t.lineOfSight!==!1&&kl(e.position,t.point,i)&&(!n.hasLineOfSight||n.hasLineOfSight(Y(e.position,J(0,1.3,0)),t.point))),o=r.profiledSwing&&t.zipStyle===`air`&&Z(t.move??J())>.15?t.move:t.aimDirection??t.cameraForward??t.move??J(0,.1,-1);return Nl(e.position,o,a,{...r,anchorMinimumHeight:-r.anchorMaximumDistance})}function Ll(e,t,n={}){return{type:e,position:yl(t.position),...n}}function Rl(e,t,n,r,i){r.advancedTraversal&&!e.grounded&&e.elapsed<(e.wallCarryUntil??0)&&(e.velocity=X(Q(e.velocity,n.cameraForward),Math.max(Z(e.velocity),e.wallCarrySpeed??0)),e.wallCarrySpeed=0,e.wallCarryUntil=0);let a=Q($(e.velocity),Q($(n.move??n.cameraForward??J(0,0,-1)))),o=r.flowTraversal?al(e.position,t.point,a):t.point,s=bl(e.position,o),c=!r.flowTraversal&&r.arcadeTraversal&&!e.grounded?Math.min(r.swingCatchSlack??2.5,Math.max(0,xl(e.velocity,Q(s)))*.12):0,l=gl(Z(s)+c,r.swingMinimumLength,r.swingMaximumLength);if(r.advancedTraversal&&!r.arcadeTraversal&&!e.grounded&&(e.velocity=gn(e.velocity,bl(e.position,t.point),n.cameraForward??n.move??J(0,0,-1),r.maximumSpeed)),e.advanced&&(e.advanced.gliding=!1,e.advanced.corner=null,e.advanced.loop=null),e.swing={anchor:yl(t.point),visualAnchor:yl(t.point),simulationPivot:r.arcadeTraversal?yl(o):void 0,pivot:r.arcadeTraversal?yl(o):Y(e.position,J(0,l,0)),captureStart:r.arcadeTraversal?void 0:Y(e.position,J(0,l,0)),anchorId:t.id,ropeLength:l,maximumLength:l,attachedSeconds:0,tension:0,pressure:0,cruiseSpeed:r.flowTraversal?Math.max(r.swingCruiseSpeed??Qc.cruiseSpeed,Math.min(78,Math.hypot(e.velocity.x,e.velocity.z,Math.min(0,e.velocity.y)*.75))):void 0},e.zip=null,e.groundJump=!1,e.wallCrawlActive=!1,e.wallRunActive=!1,e.mantle=null,e.perchSeconds=0,e.grounded&&e.elapsed>=(e.swingGroundLaunchAfter??0)){r.arcadeTraversal||(e.swing.launchRopeLength=gl(t.point.y-e.position.y-3,Math.max(r.swingMinimumLength,l*.56),l));let a=Q($(n.move??J()),Q($(n.cameraForward??e.velocity),J(0,0,-1))),o=r.runSpeed*.85;if(Z($(e.velocity))<o){let t=Math.min(o,Math.max(0,o-xl(e.velocity,a)));e.velocity=Y(e.velocity,X(a,t))}e.velocity.y=Math.max(e.velocity.y,r.swingLaunchUp??Math.min(8,r.jumpSpeed*.56)),e.grounded=!1,e.coyoteSeconds=0,e.jumpBufferSeconds=0,e.landingSeconds=0,e.swingGroundLaunchAfter=e.elapsed+1.1,i.push(Ll(`jump`,e,{strength:e.velocity.y}))}e.wallApproach=`swing`,e.wallApproachUntil=e.elapsed+6,i.push(Ll(`web-attached`,e,{anchorId:t.id}))}function zl(e,t,n,r){let i=e.swing;if(!i)return;if(n.profiledSwing&&!n.flowTraversal){let a=_l((i.attachedSeconds-.06)/(n.swingReleaseChargeSeconds??1.1)),o=_l(e.velocity.y/18),s=n.swingReleaseLift*a*(.2+o*.8)+(t.jumpPressed?(n.swingJumpKick??5)*(.2+o*.8):0),c=Q($(e.velocity),Q($(t.cameraForward??J(0,0,-1)))),l=n.swingReleaseBoost*a*(.4+o*.6)+(t.jumpPressed?(n.swingJumpForwardKick??7)*a*(1-o):0);e.velocity=Y(e.velocity,Y(X(c,l),J(0,s,0)));let u=Z(e.velocity);u>n.maximumSpeed&&(e.velocity=X(e.velocity,n.maximumSpeed/u)),e.swingReleaseSeconds=.55,e.actionSequence=(e.actionSequence??0)+1,e.advanced&&(e.advanced.loop=null,e.advanced.lastReleaseAt=e.elapsed),e.swing=null,r.push(Ll(`web-released`,e,{anchorId:i.anchorId,strength:i.tension}));return}if(n.advancedTraversal){let a=e.advanced??=ln();i.attachedSeconds>.22&&(a.flow=e.elapsed-a.lastReleaseAt<M.chainWindow?Math.min(M.chainMaximum,a.flow+1):0,a.lastReleaseAt=e.elapsed),e.velocity=n.flowTraversal?sl(e.velocity,i.attachedSeconds,t.cameraForward??t.move??J(0,0,-1),n.maximumSpeed,!!t.jumpPressed,n.swingReleaseForwardScale,n.swingReleaseLiftScale):gt(e.velocity,i.attachedSeconds,bl(e.position,i.anchor),t.cameraForward??t.move??J(0,0,-1),n.maximumSpeed,a.flow,!!t.jumpPressed,n.swingReleaseForwardScale,n.swingReleaseLiftScale),a.pulse=i.attachedSeconds>.06?1:a.pulse,a.loop=null,e.swingReleaseSeconds=n.flowTraversal&&!t.jumpPressed?.18:.55,e.actionSequence=(e.actionSequence??0)+1,e.swing=null,r.push(Ll(`web-released`,e,{anchorId:i.anchorId,strength:i.tension}));return}if(n.arcadeTraversal){e.velocity=nn(e.velocity,i.attachedSeconds,t.cameraForward??t.move??J(0,0,-1),n.maximumSpeed),e.swingReleaseSeconds=.55,e.actionSequence=(e.actionSequence??0)+1,e.swing=null,r.push(Ll(`web-released`,e,{anchorId:i.anchorId,strength:i.tension}));return}let a=Q(bl(e.position,i.pivot??i.anchor),J(0,-1,0)),o=Tl(e.velocity,a),s=Q(o,Q($(t.cameraForward??t.move??o),J(0,0,-1))),c=_l(i.attachedSeconds/1.35),l=Z(e.velocity),u=_l(i.tension+l/50),d=_l(i.attachedSeconds/.12)*(.2+c*.8)*(.5+i.pressure*.5)*(.4+u*.6);e.velocity=Y(e.velocity,X(s,n.swingReleaseBoost*d*.7));let f=.7+.3*_l(o.y/12),p=n.swingReleaseLift*(.38+c)*d*f;e.velocity.y+=p,e.swingReleaseSeconds=.55,e.actionSequence=(e.actionSequence??0)+1;let m=i.tension,h=i.anchorId;e.swing=null,r.push(Ll(`web-released`,e,{anchorId:h,strength:m}))}function Bl(e,t,n,r,i,a=!1){if(n.arcadeTraversal&&i.zipStyle===`air`){if(n.advancedTraversal){let t=e.advanced??=ln();if(e.elapsed<t.zipAfter)return;t.zipAfter=e.elapsed+M.zipCooldown,t.gliding=!1,t.corner=null,t.loop=null,t.pulse=.7}let o=Q($(bl(t.point,e.position)),Q($(i.cameraForward??e.velocity),J(0,0,-1))),s=n.profiledSwing&&Z(i.move??J())>.15?Q($(i.move)):null,c=s?Q(Y(X(o,.68),X(s,.32))):o;n.profiledSwing&&(e.velocity=Y(X(c,Math.min(n.zipMaximumSpeed,Z($(e.velocity))*(n.traversalFlowRetention??.9))),J(0,e.velocity.y,0))),e.zip={airDash:!0,contextual:a,target:yl(t.point),surfacePoint:yl(t.point),direction:c,targetId:t.id,elapsed:0,startingDistance:wl(e.position,t.point),targetKind:t.kind},e.swing=null,e.swingNeedsRelease=!0,e.wallCrawlActive=!1,e.wallRunActive=!1,e.mantle=null,e.perchSeconds=0,e.wallApproach=`swing`,e.wallApproachUntil=e.elapsed+1,r.push(Ll(`zip-started`,e,{anchorId:t.id}));return}e.wallApproach=`zip`,e.wallApproachUntil=e.elapsed+4;let o=t.normal?Q(t.normal):J(),s=Y(t.point,X(o,Math.abs(o.y)<.45?n.playerRadius+.04:.015));e.zip={target:s,surfacePoint:yl(t.point),direction:Q(bl(s,e.position)),bestRemaining:wl(e.position,s),stalledSeconds:0,targetId:t.id,elapsed:0,startingDistance:wl(e.position,t.point),targetKind:t.kind},e.swing=null,e.swingNeedsRelease=!0,e.wallCrawlActive=!1,e.wallRunActive=!1,e.mantle=null,e.perchSeconds=0,t.point.y>e.position.y+1&&(e.velocity.y=Math.max(e.velocity.y,6.5),e.grounded=!1),r.push(Ll(`zip-started`,e,{anchorId:t.id}))}function Vl(e,t,n,r){let i=e.zip;if(!i)return;let a=Q($(e.velocity),Q($(t.cameraForward??t.move??J(0,0,-1)))),o=Q(El(a,Q($(bl(i.target,e.position)),a),.3),a),s=Math.min(Z($(e.velocity))*.55,18);e.velocity=n.advancedTraversal?Qt(e.velocity,o,wl(e.position,i.target)<Math.max(1.4,Z(e.velocity)*.045),n.maximumSpeed):Y(X(o,n.pointLaunchSpeed+s),J(0,n.pointLaunchLift,0)),e.jumpBufferSeconds=0,n.advancedTraversal&&e.advanced&&(e.advanced.pulse=1),e.zip=null,e.pointLaunchSeconds=.32,e.grounded=!1,r.push(Ll(`point-launch`,e,{anchorId:i.targetId,strength:Z(e.velocity)}))}function Hl(e,t,n,r){let i=Z($(e.velocity));if(n>8&&(i>7||e.groundJump)&&r){let n=Q($(t.move??J()),Q($(t.cameraForward??J(0,0,-1)))),a=i>=6?yl(e.velocity):Y(X(n,6),J(0,e.velocity.y,0));r(e.position,a)&&(e.velocity=a,e.rollSeconds=.8)}e.groundJump=!1}function Ul(e,t,n,r){let i=X(Q($(t)),n.runSpeed);if((e.rollSeconds??0)>0){e.velocity.x*=Math.exp(-.7*r),e.velocity.z*=Math.exp(-.7*r);return}let a=Cl($(t))>pl?n.groundAcceleration:n.groundFriction;e.velocity.x=vl(e.velocity.x,i.x,Cl($(t))>pl?a/Math.max(n.runSpeed,1):12,r),e.velocity.z=vl(e.velocity.z,i.z,Cl($(t))>pl?a/Math.max(n.runSpeed,1):12,r),Cl($(t))<pl&&Z($(e.velocity))<.08&&(e.velocity.x=0,e.velocity.z=0),e.wallCarrySpeed=0,e.wallCarryUntil=0}function Wl(e,t,n,r){let i=Q($(t));if(n.flowTraversal){if(Cl(i)<.01)return;e.velocity=wt(e.velocity,i,r,34);let t=Math.min(6,Math.max(0,26-Z($(e.velocity)))*2);e.velocity.x+=i.x*t*r,e.velocity.z+=i.z*t*r;return}e.velocity.x+=i.x*n.airAcceleration*r,e.velocity.z+=i.z*n.airAcceleration*r;let a=$(e.velocity),o=Z(a);if(o>n.maximumSpeed){let t=X(a,n.maximumSpeed/o);e.velocity.x=t.x,e.velocity.z=t.z}}function Gl(e,t,n,r,i,a){let o=e.swing;o.attachedSeconds+=i,o.pressure=vl(o.pressure,_l(t.pointerPressure??.8),10,i);let s=o.simulationPivot??o.pivot??o.anchor,c=bl(e.position,s),l=Math.max(.01,Z(c)),u=X(c,1/l),d=!!e.advanced?.loop;o.stallSeconds=Z(e.velocity)<2?(o.stallSeconds??0)+i:0;let f=gl(hl(t.reel),-1,1);o.ropeLength=gl(Math.min(o.ropeLength,l)+f*r.swingReelSpeed*i,r.swingMinimumLength,r.swingMaximumLength),o.maximumLength=Math.max(o.maximumLength,o.ropeLength),e.velocity=ol(e.velocity,u,i);let p=l>=o.ropeLength-.2,m=J(0,-r.gravity*i,0);e.velocity=Y(e.velocity,p?il(m,u):m);let h=Q($(t.move??J()),Q($(t.cameraForward??e.velocity),J(0,0,-1)));if(!d&&(o.attachedSeconds>.45&&e.velocity.y>3&&u.y>-.68||o.attachedSeconds>.24&&(o.stallSeconds??0)>.12)){e.swing=null,e.swingNeedsRelease=!1,e.swingRetryAfter=e.elapsed+.06,e.previousSwingAnchorId=o.anchorId,e.previousSwingAnchorUntil=e.elapsed+.5,e.swingReleaseSeconds=.12,e.preferredAnchorId=void 0,a.push(Ll(`web-released`,e,{anchorId:o.anchorId,reason:`arc-handoff`}));return}let g=yl(e.velocity),_=[],v=o.groundAssistImpulse??0;ql(e,t,n,r,i),_.push({priority:`ground`,deltaVelocity:bl(e.velocity,g)}),e.velocity=g;let y=n.predictiveAssistAcceleration,b=Cl(y??J())>.01;if(y&&_.push({priority:`collision`,deltaVelocity:X(y,i)}),!d){let e=b?Q($(Y(g,X(y,i))),h):h,t=ll(g,e,u,o.attachedSeconds,i,r.swingSteerAcceleration);_.push({priority:`steering`,deltaVelocity:bl(t,g)});let n=o.cruiseSpeed??Qc.cruiseSpeed,a=Z(g),s=Q(il(e,u),Q(g,h));(xl(Q(g,s),s)>-.1||a<6)&&a<n&&_.push({priority:`comfort`,deltaVelocity:X(a<6?s:Q(il(g,u),s),Math.min(Qc.pumpAcceleration,r.swingPumpAcceleration??Qc.pumpAcceleration,(n-a)*2.4)*i)}),a>n+12&&_.push({priority:`comfort`,deltaVelocity:X(Q(g),-Math.min(18,(a-n-12)*1.4)*i)})}n.windAcceleration&&_.push({priority:`comfort`,deltaVelocity:X(il(n.windAcceleration,u),i)}),t.aimDirection&&r.swingPitchAcceleration&&!b&&!d&&_.push({priority:`steering`,deltaVelocity:X(il(ml,u),gl(t.aimDirection.y,-1,1)*r.swingPitchAcceleration*i)});let x=dl(_,i,r.swingAssistBudget??84);e.assistImpulse=x.spent,o.groundAssistImpulse=v+x.applied.ground,e.velocity=Y(g,x.deltaVelocity),e.velocity.x*=Math.exp(-(r.swingHorizontalDrag??0)*i),e.velocity.z*=Math.exp(-(r.swingHorizontalDrag??0)*i),e.velocity.y*=Math.exp(-(r.swingVerticalDrag??0)*i),o.tension=_l(Cl(il(e.velocity,u))/Math.max(1,o.ropeLength)/65)}function Kl(e,t,n,r,i,a){let o=e.swing;if(!o)return;if(r.flowTraversal){Gl(e,t,n,r,i,a);return}if(o.attachedSeconds+=i,o.captureStart){let e=_l(o.attachedSeconds/1.45),t=e*e*(3-2*e);o.pivot=El(o.captureStart,o.anchor,t)}let s=t.pointerPressure,c=_l(o.attachedSeconds/1.2),l=.45+c*.55;o.pressure=vl(o.pressure,_l(s??l),10,i);let u=gl(hl(t.reel),-1,1),d=Y(e.position,X(e.velocity,.3)),f=t.diveHeld?null:n.sampleGround?.(d,.2,8),p=f!=null&&d.y<f+1.2,m=r.arcadeTraversal&&!e.advanced?.loop&&!t.diveHeld&&u===0,h=Math.max(r.swingMinimumLength,o.maximumLength*.56),g=o.ropeLength,_=o.maximumLength*.94,v=u===0?p&&o.ropeLength>_?-1.5:0:u*r.swingReelSpeed;if(o.launchRopeLength!==void 0&&u<=0&&o.ropeLength>o.launchRopeLength&&(v=-Math.min(r.swingReelSpeed*2,(o.ropeLength-o.launchRopeLength)/.18)),o.ropeLength=gl(o.ropeLength+v*i,u===0&&o.launchRopeLength===void 0?Math.max(h,Math.min(g,_)):h,o.maximumLength),m){let t=o.simulationPivot??o.pivot??o.anchor,n=e.position.x-t.x,a=e.position.z-t.z,s=n+e.velocity.x*i,c=a+e.velocity.z*i,l=Math.max(0,s*s+c*c-n*n-a*a);o.ropeLength=Math.min(r.swingMaximumLength,Math.sqrt(o.ropeLength**2+l*(r.swingPayout??.85))),o.maximumLength=Math.max(o.maximumLength,o.ropeLength)}let y=(o.ropeLength-g)/i;o.simulationPivot&&(o.simulationPivot=El(o.simulationPivot,o.visualAnchor??o.anchor,1-Math.exp(-5*i)),o.pivot=yl(o.simulationPivot));let b=bl(e.position,o.simulationPivot??o.pivot??o.anchor),x=Math.max(Z(b),pl),S=X(b,1/x),C=xl(e.velocity,S),w=Math.max(0,x-o.ropeLength),T=x>=o.ropeLength-.12,E=w*r.swingSpring+(T?Math.max(0,C-y)*r.swingDamping:0),D=X(S,-E*i);m&&(D.x*=r.swingHorizontalTension??.15,D.z*=r.swingHorizontalTension??.15,D.y*=r.swingVerticalTension??1),e.velocity=Y(e.velocity,D);let O=$(t.move??J()),k=Q(O,Q($(t.cameraForward??e.velocity),J(0,0,-1))),A=Q(Tl(k,S)),ee=Q(Tl(e.velocity,S),A),j=Cl(O)>pl?_l(Z(O)):.72,te=Math.max(0,xl(A,ee)),ne=_l(-S.y),re=_l(1-Z(e.velocity)/(r.swingCruiseSpeed??r.maximumSpeed)),ie=r.swingPumpAcceleration*(.18+j*te*.82)*(.45+ne*.55)*(.62+o.pressure*.38)*(.65+c*.35)*re,ae=yl(e.velocity),oe=[],se=o.groundAssistImpulse??0;if(ql(e,t,n,r,i),oe.push({priority:`ground`,deltaVelocity:bl(e.velocity,ae)}),e.velocity=yl(ae),n.predictiveAssistAcceleration&&oe.push({priority:`collision`,deltaVelocity:X(n.predictiveAssistAcceleration,i)}),!e.advanced?.loop){let e=Cl(n.predictiveAssistAcceleration??J())>pl,a=r.arcadeTraversal?wt(ae,k,i,e?0:r.swingSteerAcceleration*(Cl(O)>pl?j:r.swingCameraSteering??1)):Y(ae,X(A,r.swingSteerAcceleration*_l(o.attachedSeconds/.85)*(.3+ne*.7)*j*re*i));oe.push({priority:`steering`,deltaVelocity:bl(a,ae)});let s=e?Q($(Y(ae,X(n.predictiveAssistAcceleration,i))),k):k,c=X(r.profiledSwing?e?Q(Tl(s,S),ee):ee:m?s:r.arcadeTraversal?e?Q(Tl(Y(ae,X(n.predictiveAssistAcceleration,i)),S),ee):A:ee,ie*i);if(c.x*=r.swingPumpHorizontalScale??1,c.z*=r.swingPumpHorizontalScale??1,c.y*=r.swingPumpVerticalScale??1,oe.push({priority:`comfort`,deltaVelocity:c}),r.profiledSwing&&!e&&t.aimDirection){let e=gl(t.aimDirection.y*1.8,-1,1);oe.push({priority:`steering`,deltaVelocity:X(Tl(ml,S),e*(r.swingPitchAcceleration??0)*i)})}}n.windAcceleration&&oe.push({priority:`comfort`,deltaVelocity:X(Tl(n.windAcceleration,S),i)});let ce=dl(oe,i,r.swingAssistBudget??84);e.assistImpulse=ce.spent,o.groundAssistImpulse=se+ce.applied.ground,e.velocity=Y(ae,ce.deltaVelocity),e.velocity.x*=Math.exp(-(r.swingHorizontalDrag??0)*i),e.velocity.z*=Math.exp(-(r.swingHorizontalDrag??0)*i),e.velocity.y*=Math.exp(-(r.swingVerticalDrag??0)*i),e.velocity.y-=r.gravity*i,e.velocity.y>4&&(o.riseSeen=!0);let M=xl($(t.move??J()),Q($(e.velocity)))<-.3;r.profiledSwing&&(r.swingAutoReattach??0)>.5&&o.riseSeen&&o.attachedSeconds>1.2&&e.velocity.y<2.5&&Z($(e.velocity))<12&&!M&&!t.reel&&!e.advanced?.loop&&(e.previousSwingAnchorId=o.anchorId,e.previousSwingAnchorUntil=e.elapsed+.8,e.preferredAnchorId=void 0,e.swing=null,e.swingNeedsRelease=!1,e.swingRetryAfter=e.elapsed+.04,a.push(Ll(`web-released`,e,{anchorId:o.anchorId,strength:0,reason:`apex-handoff`}))),o.tension=_l((E+Cl(Tl(e.velocity,S))/Math.max(o.ropeLength,1))/70)}function ql(e,t,n,r,i){let a=e.swing;if(!a||!n.sampleGround||t.diveHeld||e.velocity.y>=-.25||a.attachedSeconds<.08||r.gravity<=0||r.swingGroundAssist===0)return;let o=a.groundAssistImpulse??0,s=Math.max(0,(r.advancedTraversal?M.skimImpulseBudget:4)-o);if(s<=pl)return;let c=.3,l=J(e.position.x+e.velocity.x*c,e.position.y,e.position.z+e.velocity.z*c),u=n.sampleGround(l,.2,8);if(u===null||!Number.isFinite(u)||u<l.y-8||u>l.y+.2||e.position.y<=u+.05)return;let d=e.position.y+e.velocity.y*c-.5*r.gravity*c*c,f=_l((u+(r.swingGroundClearance??Math.max(.65,r.playerRadius*1.65))-d)/2.5),p=r.advancedTraversal?M.skimUpAcceleration:Math.min(24,r.gravity*.8),m=Math.min(p*f*(r.swingGroundAssist??1)*i,s,r.advancedTraversal?2-e.velocity.y:-e.velocity.y);e.velocity.y+=m,a.groundAssistImpulse=o+m}function Jl(e,t,n={},r={},i=[]){let a=Al(r),o=e.swing;if(!o)return`none`;let s=gl(t.dt??1/120,0,.05);if(e.grounded){let t=Z($(e.velocity)),r=(o.groundSkimSeconds??0)+s;return n.swingHeld&&!n.diveHeld&&t>=7.5&&r<=.48?(o.groundSkimSeconds=r,e.grounded=!1,e.velocity.y=Math.max(e.velocity.y,Math.min(4.6,2.25+t*.035)),e.landingSeconds=0,`skim`):(e.swing=null,e.swingNeedsRelease=!1,e.swingRetryAfter=e.elapsed+.1,i.push(Ll(`web-released`,e,{anchorId:o.anchorId,strength:0,reason:`ground-contact`})),`landed`)}if(t.contact?.feetTouching&&Ql(e,t.contact,e.velocity,n,a))return e.swingRetryAfter=e.elapsed+.12,`wall`;let c=o.visualAnchor??o.anchor;if(!t.obstruction&&!t.constraintBlocked)return o.groundSkimSeconds=Math.max(0,(o.groundSkimSeconds??0)-s*2.5),o.obstructionSeconds=0,o.continuation=`clear`,`clear`;o.obstructionSeconds=(o.obstructionSeconds??0)+s;let l=t.obstruction;if(l&&l.point.y>e.position.y+.75&&wl(e.position,l.point)>=a.swingMinimumLength&&(!t.hasLineOfSight||t.hasLineOfSight(e.position,l.point))){let t=yl(l.point),n=Q(l.normal??bl(e.position,t));return o.anchor=t,o.visualAnchor=yl(t),o.simulationPivot=Y(t,X(n,Math.min(.8,a.playerRadius*1.5))),o.pivot=yl(o.simulationPivot),o.captureStart=void 0,o.anchorId=l.id??o.anchorId,o.ropeLength=gl(wl(e.position,o.simulationPivot),a.swingMinimumLength,a.swingMaximumLength),o.maximumLength=o.ropeLength,o.obstructionSeconds=0,o.continuation=`corner`,i.push(Ll(`corner-tether`,e,{anchorId:o.anchorId,reason:`surface-corner`})),`corner`}let u=Fl(e,n,{anchorCandidates:(t.candidates??[]).filter(n=>n.id!==o.anchorId&&n.id!==`sky-fallback`&&n.lineOfSight!==!1&&(!t.hasLineOfSight||t.hasLineOfSight(e.position,n.point)))},a);if(u)return o.anchor=yl(u.point),o.visualAnchor=yl(u.point),o.simulationPivot=yl(u.point),o.pivot=yl(u.point),o.captureStart=void 0,o.anchorId=u.id,o.ropeLength=gl(wl(e.position,u.point),a.swingMinimumLength,a.swingMaximumLength),o.maximumLength=o.ropeLength,o.obstructionSeconds=0,o.continuation=`reattach`,i.push(Ll(`web-attached`,e,{anchorId:u.id,reason:`continuation`})),`reattach`;if(t.constraintBlocked&&!l){let t=wl(e.position,o.simulationPivot??o.pivot??c),n=Math.max(0,t-o.ropeLength);if(n<=1.2)return o.ropeLength=Math.min(a.swingMaximumLength,o.ropeLength+n),o.maximumLength=Math.max(o.maximumLength,o.ropeLength),o.obstructionSeconds=0,`slack`}return o.obstructionSeconds<.28?`grace`:(e.swing=null,e.swingRetryAfter=e.elapsed+.08,i.push(Ll(`web-released`,e,{anchorId:o.anchorId,strength:0,reason:`no-valid-continuation`})),`detach`)}function Yl(e,t,n,r,i,a){let o=e.swing;if(!o)return null;let s=o.simulationPivot??o.pivot??o.anchor,c=o.visualAnchor??o.anchor,l=bl(e.position,s),u=Z(l),d=t.anchorColliders??t.colliders??[],f=bl(c,e.position),p=null,m=1/0;for(let t of d){let n=Ol(e.position,f,t.min,t.max);n&&n.time<1-.08/Math.max(1,Z(f))&&n.time<m&&(m=n.time,p={point:Y(e.position,X(f,n.time)),normal:n.normal,id:t.id})}if(p)return Jl(e,{obstruction:p,contact:t.wallContact,candidates:t.anchorCandidates,dt:a,hasLineOfSight:(e,t)=>kl(e,t,d)},i,n,r),null;let h=o.ropeLength*(1+(n.flowTraversal?0:n.swingElasticity??0));if(u<=h||u<pl)return t.externalCollision||(o.obstructionSeconds=0),null;let g=X(l,1/u),_=Y(s,X(g,h)),v=!n.flowTraversal&&n.arcadeTraversal&&!n.profiledSwing&&!e.advanced?.loop&&!i.diveHeld&&!hl(i.reel);if(v){_.x=e.position.x,_.z=e.position.z;let t=wl(_,s);if(t>n.swingMaximumLength)return e.swing=null,e.swingNeedsRelease=!1,e.swingRetryAfter=e.elapsed+.04,r.push(Ll(`web-released`,e,{anchorId:o.anchorId,strength:0,reason:`steering-reach`})),null;o.ropeLength=t,o.maximumLength=Math.max(o.maximumLength,t)}let y=tu(e,t,n,0,bl(_,e.position));if(wl(e.position,_)>.025)return Jl(e,{constraintBlocked:!0,contact:y.wall,candidates:t.anchorCandidates,dt:a,hasLineOfSight:(e,t)=>kl(e,t,d)},i,n,r),y;t.externalCollision||(o.obstructionSeconds=0);let b=v?Math.max(0,e.velocity.x*g.x+e.velocity.z*g.z)*.85:0,x=xl(e.velocity,g)-b;if(x>0){let t=X(g,x);v&&(t.x=0,t.z=0);let r=Z(e.velocity);e.velocity=bl(e.velocity,t),n.flowTraversal&&!y.blocked&&Z(e.velocity)>.1&&(e.velocity=X(Q(e.velocity),Math.min(n.maximumSpeed,r)))}return y}function Xl(e,t,n,r,i){let a=e.zip;if(!a)return;if(a.elapsed+=r,n.arcadeTraversal&&a.airDash){e.velocity=pt(e.velocity,a.direction??t.cameraForward??J(0,0,-1),r,Math.min(n.maximumSpeed,n.zipMaximumSpeed*1.4),n.maximumSpeed,n.gravity),a.elapsed>=bn.duration&&(e.zip=null,i.push(Ll(`zip-cancelled`,e,{anchorId:a.targetId})));return}let o=bl(a.target,e.position),s=Z(o);if((t.jumpPressed||n.advancedTraversal&&e.jumpBufferSeconds>0)&&s<=n.pointLaunchWindow){Vl(e,t,n,i);return}let c=Q(o);a.stalledSeconds=s<(a.bestRemaining??1/0)-.015?0:(a.stalledSeconds??0)+r,a.bestRemaining=Math.min(a.bestRemaining??s,s);let l=a.direction&&xl(o,a.direction)<=0;if(s<.12||l||a.elapsed>.4&&a.stalledSeconds>.34||a.elapsed>Math.min(3.6,a.startingDistance/n.zipMaximumSpeed+1.7)){e.zip=null,s<1&&(e.velocity=X(e.velocity,Math.min(1,14/Math.max(1,Z(e.velocity))))),i.push(Ll(`zip-cancelled`,e,{anchorId:a.targetId}));return}let u=xl(e.velocity,c),d=gl((Math.min(n.zipMaximumSpeed,Math.sqrt(2*n.zipAcceleration*1.8*Math.max(s-.02,0)))-u)*n.zipDamping,-n.zipAcceleration,n.zipAcceleration);e.velocity=Y(X(Tl(e.velocity,c),Math.exp(-n.zipDamping*r)),X(c,u+d*r));let f=xl(e.velocity,c),p=Math.max(0,(s-.02)/Math.max(r,.001));f>p&&(e.velocity=bl(e.velocity,X(c,f-p)));let m=Z(e.velocity);m>n.zipMaximumSpeed&&(e.velocity=X(e.velocity,n.zipMaximumSpeed/m)),e.velocity.y-=n.gravity*.22*r,a.elapsed>4&&(e.zip=null,i.push(Ll(`zip-cancelled`,e,{anchorId:a.targetId})))}function Zl(e,t,n,r,i){if(t&&Math.abs(t.normal.y)<.45){let a=Q($(t.normal)),o=t.feetTouching===!0,s=!!e.wall;e.wall?(e.wall.normal=Q(El(e.wall.normal,a,_l(r*16)),a),e.wall.point=yl(t.point),e.wall.colliderId=t.colliderId,e.wall.feetTouching=o,e.wall.contactSeconds+=r,e.wall.graceSeconds=n.wallContactGrace):e.wall={point:yl(t.point),normal:a,colliderId:t.colliderId,feetTouching:o,contactSeconds:0,graceSeconds:n.wallContactGrace},s||i.push(Ll(`wall-contact`,e,{colliderId:t.colliderId}))}else e.wall&&(e.wall.feetTouching=!1,e.wall.graceSeconds-=r,e.wall.graceSeconds<=0&&(e.wall=null))}function Ql(e,t,n,r,i){let a=Al(i);if(!t.feetTouching||Math.abs(t.normal.y)>.35||e.mantle||e.elapsed<(e.wallDetachUntil??0)||r.jumpPressed||r.wallCrawlPressed)return!1;if(e.wallCrawlActive||e.wallRunActive)return!0;let o=Q($(t.normal)),s=-xl(n,o),c=xl(r.move??J(),o);if(s<1&&!(c<-.25&&!e.grounded))return!1;let l=Tl(n,o),u=Z(l),d=!!e.swing||e.wallApproach===`swing`&&e.elapsed<(e.wallApproachUntil??0),f=!!(e.zip&&!e.zip.airDash)||e.wallApproach===`zip`&&e.elapsed<(e.wallApproachUntil??0);if(e.swing=null,e.zip=null,e.swingNeedsRelease=!0,e.swingResumeAfterWall=d&&!!r.swingHeld,e.wall={...t,normal:o,feetTouching:!0,contactSeconds:0,graceSeconds:a.wallContactGrace},e.wallRunActive=!f&&!e.grounded&&(d||u>=a.wallRunMinimumSpeed||s>10),e.wallCrawlActive=!e.wallRunActive,e.grounded=!1,e.wallRunActive&&a.flowTraversal)return e.velocity=cl(n,o,r.cameraForward??n,hl(r.wallClimb),hl(r.wallStrafe),0,!0),e.wall.runEntrySpeed=Z(e.velocity),e.wallCarrySpeed=0,e.wallCarryUntil=0,e.actionSequence=(e.actionSequence??0)+1,d&&(e.swingReleaseSeconds=0),!0;if(e.wallRunActive&&a.arcadeTraversal)return e.wall.runEntrySpeed=Math.min(a.profiledSwing?a.maximumSpeed:a.advancedTraversal?26:a.maximumSpeed,Z(n)*(a.profiledSwing?a.traversalFlowRetention??.9:1)),a.advancedTraversal&&(e.wallCarrySpeed=Math.min(a.maximumSpeed,Z(n)*(a.profiledSwing?a.traversalFlowRetention??.9:1)),e.wallCarryUntil=e.elapsed+3),e.velocity=bt(n,o,r.cameraForward??n,e.wall.runEntrySpeed,a.profiledSwing?a.maximumSpeed:a.advancedTraversal?26:a.maximumSpeed,a.wallRunSpeed,a.wallRunLift,r.wallClimb),e.actionSequence=(e.actionSequence??0)+1,d&&(e.swingReleaseSeconds=0),!0;if(e.wallRunActive){if(Z($(l))<3&&d){let e=Q(Sl(ml,o)),t=xl(e,r.cameraForward??n)<0?-1:1;l.x+=e.x*t*Math.min(16,Math.max(7,s*.65)),l.z+=e.z*t*Math.min(16,Math.max(7,s*.65))}l.y=Math.max(l.y,d?1.2:Math.min(7,s*.25)),e.velocity=l}else e.velocity=f?J():X(l,Math.min(1,a.wallCrawlSpeed/Math.max(u,.01)));return e.actionSequence=(e.actionSequence??0)+1,d&&(e.swingReleaseSeconds=0),!0}function $l(e,t,n,r){let i=e.wall;if(n.arcadeTraversal&&i&&e.wallRunActive&&!e.swing&&!e.zip&&!e.mantle){if(i.feetTouching){let a=Q($(i.normal));if(n.flowTraversal){let n=e.elapsed<(e.advanced?.wallRecoveryUntil??0);e.velocity=cl(e.velocity,a,t.cameraForward??e.velocity,n?0:hl(t.wallClimb),n?e.advanced?.wallRecoverySide??1:hl(t.wallStrafe),r),i.runEntrySpeed=Z(Tl(e.velocity,a)),e.grounded=!1;return}if(n.advancedTraversal){let o=Q(Sl(ml,a)),s=gl(hl(t.wallStrafe),-1,1),c=gl(hl(t.wallClimb),-1,1),l=e.elapsed<(e.advanced?.wallRecoveryUntil??0),u=l?X(o,e.advanced?.wallRecoverySide??1):Y(X(o,s),J(0,c,0)),d=Tl(e.velocity,a);e.velocity=Y(El(d,Z(u)>.1?X(Q(u),l?12:n.profiledSwing?Math.max(n.wallRunSpeed,Math.min(n.maximumSpeed,Z(d)*Math.exp(-.18*r))):c&&!s?16:22):X(Q(d,o),Math.min(n.profiledSwing?n.maximumSpeed:22,Z(d))),1-Math.exp(-6*r)),X(a,-.8)),i.runEntrySpeed=Math.min(n.profiledSwing?n.maximumSpeed:26,Z(e.velocity)),e.wallCarrySpeed=Math.max(Z(e.velocity),(e.wallCarrySpeed??0)*Math.exp(-.18*r)),e.grounded=!1;return}let o=Math.max(i.runEntrySpeed??0,Z(Tl(e.velocity,a))),s=Y(e.velocity,X(Tl(t.move??J(),a),4*r));e.velocity=bt(s,a,t.cameraForward??s,o,n.maximumSpeed,n.wallRunSpeed,n.wallRunLift,t.wallClimb),i.runEntrySpeed=Z(Tl(e.velocity,a)),e.grounded=!1}else e.velocity.y-=n.gravity*r;return}if(!i||!i.feetTouching||!e.wallCrawlActive&&!e.wallRunActive||e.swing||e.zip||e.mantle)return;e.grounded&&(e.grounded=!1,e.velocity.y=Math.max(e.velocity.y,1.2));let a=Q($(i.normal)),o=xl(e.velocity,a);if(o<0&&(e.velocity=bl(e.velocity,X(a,o))),e.velocity=Y(e.velocity,X(a,-n.wallStickAcceleration*r)),e.wallRunActive){let o=Tl(e.velocity,a);o.x*=Math.exp(-.38*r),o.z*=Math.exp(-.38*r),o.y-=n.gravity*.28*r,e.velocity=Y(o,X(Tl(t.move??J(),a),4*r)),e.velocity=Y(e.velocity,X(a,-.8)),(Z(o)<5||o.y<-4||i.contactSeconds>2.2)&&(e.wallRunActive=!1,e.wallCrawlActive=!0);return}let s=Q(Sl(ml,a),J(1,0,0)),c=gl(hl(t.wallStrafe),-1,1),l=gl(hl(t.wallClimb),-1,1),u=Y(X(s,c),J(0,l,0)),d=X(Q(u),n.wallCrawlSpeed*Math.min(1,Z(u)));e.velocity=El(e.velocity,d,1-Math.exp(-12*r))}function eu(e,t,n){let r=e.mantle;if(!r)return;if(r.elapsed+=n,r.elapsed>1.5){e.mantle=null;return}let i=bl(r.target,e.position),a=i.y>.035?J(0,i.y,0):i;e.velocity=X(Q(a),Math.min(r.lowObstacle?8:t.wallMantleSpeed,Z(a)/Math.max(.001,n))),e.grounded=!1}function tu(e,t,n,r,i){let a=t.colliders??[],o=i??X(e.velocity,r),s=.001,c=e=>J(e.min.x-n.playerRadius,e.min.y-n.playerHeight,e.min.z-n.playerRadius),l=e=>J(e.max.x+n.playerRadius,e.max.y,e.max.z+n.playerRadius),u=(e,t)=>{let n=c(t),r=l(t);return e.x>n.x+pl&&e.x<r.x-pl&&e.y>n.y+pl&&e.y<r.y-pl&&e.z>n.z+pl&&e.z<r.z-pl},d=!1,f=!1,p=!1,m=null,h=(t,r)=>{p=!0;let i=xl(e.velocity,t);if(t.y>.5)d=!0,f||=!e.grounded&&e.velocity.y<-2;else if(Math.abs(t.y)<.45&&r){let i=e.position.y+Math.min(n.playerHeight*.28,.55);m={point:yl(e.position),normal:t,colliderId:r.id,feetTouching:i>r.min.y-.04&&e.position.y<r.max.y+.04}}i<0&&(e.velocity=bl(e.velocity,X(t,i)))};for(let t=0;t<10;t+=1){let t=a.find(t=>u(e.position,t));if(!t)break;let n=c(t),r=l(t),i=1/0,o=J();for(let t of[`x`,`y`,`z`]){let a=e.position[t]-n[t],s=r[t]-e.position[t];a<i&&(i=a,o=J(),o[t]=-1),s<i&&(i=s,o=J(),o[t]=1)}e.position=Y(e.position,X(o,i+s)),h(o,t)}if(a.some(t=>u(e.position,t))){let n=J(1/0,1/0,1/0),r=J(-1/0,-1/0,-1/0);for(let e of a){let t=c(e),i=l(e);for(let e of[`x`,`y`,`z`])n[e]=Math.min(n[e],t[e]),r[e]=Math.max(r[e],i[e])}let i=null;for(let a of[`x`,`y`,`z`])for(let o of[-1,1]){let c=yl(e.position);if(c[a]=o<0?n[a]-s:r[a]+s,a===`y`&&o<0&&c.y<(t.groundY??0))continue;let l=wl(e.position,c);if(!i||l<i.distance){let e=J();e[a]=o,i={point:c,normal:e,distance:l}}}i&&(e.position=i.point,h(i.normal))}let g=t.sampleGround?gl(Math.ceil(Z(o)/Math.max(n.collisionStep,.1)),1,128):1,_=yl(o);for(let n=0;n<g;n+=1){let r=yl(e.position),i=X(_,1/(g-n));_=bl(_,i);for(let t=0;t<5&&Cl(i)>pl*pl;t+=1){let t=null;for(let n of a){let r=Ol(e.position,i,c(n),l(n));r&&(!t||r.time<t.time)&&(t={...r,box:n})}if(!t){e.position=Y(e.position,i);break}e.position=Y(e.position,X(i,t.time)),e.position=Y(e.position,X(t.normal,s)),h(t.normal,t.box),i=X(i,1-t.time),xl(i,t.normal)<0&&(i=Tl(i,t.normal)),xl(_,t.normal)<0&&(_=Tl(_,t.normal))}let o=e.grounded&&!e.swing&&!e.zip?.4:.025,u=J(e.position.x,Math.max(r.y,e.position.y),e.position.z),d=t.sampleGround?t.sampleGround(u,o):t.groundY??0;if(d!==null&&Number.isFinite(d)){let t=e.grounded&&!e.swing&&!e.zip&&e.velocity.y<=0&&d>=r.y-.4&&d<=r.y+o;(e.position.y<=d||t)&&(e.position.y=d,h(ml),_.y<0&&(_.y=0))}}if(e.velocity.y<=0)for(let t of a)Math.abs(e.position.y-t.max.y)<=s*2&&e.position.x>t.min.x-n.playerRadius&&e.position.x<t.max.x+n.playerRadius&&e.position.z>t.min.z-n.playerRadius&&e.position.z<t.max.z+n.playerRadius&&(e.position.y=t.max.y,d=!0,e.velocity.y=0);return{wall:m,grounded:d,landed:f,blocked:p}}function nu(e,t){let n=Z(e.velocity);if(n>t&&(e.velocity=X(e.velocity,t/n)),!Number.isFinite(e.position.x+e.position.y+e.position.z+e.velocity.x+e.velocity.y+e.velocity.z))throw Error(`Traversal physics produced a non-finite transform`)}function ru(e,t,n,r){let i=Z(e.velocity),a=Z($(e.velocity)),o=Q($(e.velocity),Q($(t.cameraForward??J(0,0,-1)))),s=(e.wallCrawlActive||e.wallRunActive)&&e.wall?Math.atan2(e.wall.normal.x,e.wall.normal.z):Math.atan2(-o.x,-o.z);e.heading=Dl(e.heading,s,e.grounded?14:7,r);let c=xl(Sl(Q($(t.cameraForward??o),o),o),ml),l=e.swing?.tension??0,u=e.wall&&(e.mode===`wallRun`||e.mode===`wallCrawl`)?1:0,d=_l(Math.max(e.pointLaunchSeconds,e.swingReleaseSeconds??0)/.32),f=n.advancedTraversal?gl(n.cameraMotionScale??1,0,1.35):1,p=n.advancedTraversal?e.advanced?.pulse??0:0,m=_l(a/n.maximumSpeed),h=+(e.mode===`dive`),g=e.mode===`swing`?_l(.4+l*.6):0,_=e.mode===`glide`?gl(-Math.atan2(e.velocity.y,a),-.65,.7):e.mode===`dive`?-.72:e.mode===`swing`?gl(-e.velocity.y/42,-.55,.55):gl(-e.velocity.y/58,-.32,.38),v=gl(-c*(.18+m*.42)+(e.wall?.normal.x??0)*u*.3,-.78,.78),y=gl(n.baseFov+(m*14+h*5+d*6+l*2+p*5)*f,n.baseFov,n.maximumFov);return{animation:{state:e.mode,normalizedSpeed:m,verticalSpeed:e.velocity.y,bodyYaw:e.heading,bodyPitch:u?0:_,bodyRoll:u?0:v,stride:_l(a/n.runSpeed),airborneBlend:e.grounded?0:_l(e.airSeconds*5),wallBlend:u,swingBlend:g,ropeTension:l},camera:{fov:y,followDistance:6.7+(m*3.1+h*1.4+p*.55)*f,heightOffset:2.35+(-h*.85+d*.45+(n.advancedTraversal?gl(e.velocity.y*.025,-.7,1):0))*f,roll:gl(-c*m*.16+v*.16,-.25,.25)*f,shake:_l((m-.38)/.62)*.16+d*.1,lookAhead:Y(X(o,1.9+m*4.4),X(ml,gl(e.velocity.y*.07,-2.4,2.8))),speedLines:_l((i-24)/35)},speed:i,horizontalSpeed:a,grounded:e.grounded,wallNormal:e.wall?yl(e.wall.normal):null,webAnchor:e.swing?yl(e.swing.anchor):null,webTension:l,canPointLaunch:!!(e.zip&&!e.zip.airDash&&wl(e.position,e.zip.target)<=n.pointLaunchWindow)}}function iu(e,t){let n=Z($(e.velocity));e.mode=e.advanced?.sling?`slingshot`:e.grounded&&(e.advanced?.chargeJump??0)>0?`chargeJump`:e.advanced?.gliding&&!e.grounded&&!e.swing&&!e.zip?`glide`:e.advanced?.corner&&!e.grounded?`cornerTether`:e.pointLaunchSeconds>0?`pointLaunch`:e.wallJumpSeconds>0?`wallJump`:e.perchSeconds>0?`perch`:e.swing?`swing`:e.zip?`webZip`:e.mantle?`mantle`:e.wallRunActive&&Wt(e.wall)?`wallRun`:e.wall&&e.wall.feetTouching&&e.wallCrawlActive?`wallCrawl`:!e.grounded&&(e.doubleJumpSeconds??0)>0?`doubleJump`:e.grounded&&(e.rollSeconds??0)>0?`roll`:e.grounded&&e.landingSeconds>0?`land`:e.grounded?n>.55?`run`:`idle`:t.diveHeld&&e.velocity.y<1?`dive`:e.velocity.y>=-.2?`jump`:`fall`}function au(e,t,n){return iu(e,t),ru(e,t,Al(n),0)}function ou(e,t,n,r,i){let a=gl(hl(r),0,.05),o=Al(i);if(a===0)return{state:e,context:ru(e,t,o,0),events:[]};let s=Math.max(1,Math.ceil(a/(1/120))),c=[],l=null;for(let r=0;r<s;r+=1)l=su(e,r===0?t:{...t,jumpPressed:!1,rollPressed:!1,trickPressed:!1,swingPressed:!1,swingReleased:!1,zipPressed:!1,zipReleased:!1,wallCrawlPressed:!1,glidePressed:!1,chargeJumpReleased:!1,slingshotReleased:!1},n,a/s,o),c.push(...l.events);return{...l,events:c}}function su(e,t,n,r,i){let a=[],o=t.move??J(),s=e.grounded;if(e.elapsed+=r,e.coyoteSeconds=e.grounded?i.coyoteTime:Math.max(0,e.coyoteSeconds-r),e.jumpBufferSeconds=t.jumpPressed?i.jumpBufferTime:Math.max(0,e.jumpBufferSeconds-r),e.landingSeconds=Math.max(0,e.landingSeconds-r),e.pointLaunchSeconds=Math.max(0,e.pointLaunchSeconds-r),e.wallJumpSeconds=Math.max(0,e.wallJumpSeconds-r),e.perchSeconds=Math.max(0,e.perchSeconds-r),e.swingReleaseSeconds=Math.max(0,(e.swingReleaseSeconds??0)-r),e.doubleJumpSeconds=Math.max(0,(e.doubleJumpSeconds??0)-r),e.rollSeconds=Math.max(0,(e.rollSeconds??0)-r),e.grounded&&(e.airJumps=0),(t.jumpPressed||t.swingReleased||!t.swingHeld)&&(e.swingResumeAfterWall=!1),e.swingResumeAfterWall&&!e.wall?.feetTouching&&!e.wallRunActive&&(e.swingNeedsRelease=!1,e.swingResumeAfterWall=!1),t.rollPressed&&e.grounded&&Z($(e.velocity))>3&&n.canRoll?.(e.position,e.velocity)&&(e.rollSeconds=.75,e.actionSequence=(e.actionSequence??0)+1,a.push(Ll(`roll`,e))),i.advancedTraversal&&(t=cu(e,t,n,i,r,a)),n.wallContact!==void 0&&Zl(e,n.wallContact,i,0,a),!t.swingHeld&&!t.swingPressed&&(e.swingNeedsRelease=!1),t.wallCrawlPressed&&(e.wallCrawlActive=!e.wallCrawlActive&&!!e.wall?.feetTouching&&!e.swing&&!e.zip,e.wallRunActive=!1,e.wallCrawlActive?e.velocity=J():e.wallDetachUntil=e.elapsed+.45),(t.jumpPressed||t.swingPressed&&!e.swingNeedsRelease||t.zipPressed)&&(t.jumpPressed&&e.mantle&&(e.coyoteSeconds=i.coyoteTime),e.wallCrawlActive=!1,e.wallRunActive=!1,e.mantle=null),e.wall?.feetTouching||(e.wallCrawlActive=!1,(!i.arcadeTraversal||!Wt(e.wall))&&(i.arcadeTraversal&&e.wallRunActive&&t.swingHeld&&(e.swingNeedsRelease=!1),e.wallRunActive=!1)),(t.swingPressed||t.swingHeld)&&!e.advanced?.gliding&&!e.advanced?.sling&&!e.advanced?.corner&&!t.swingReleased&&!e.swing&&!e.zip&&(!e.wallRunActive||t.swingPressed)&&!e.swingNeedsRelease&&e.elapsed>=(e.swingRetryAfter??0)){let r=Fl(e,t,n,i);r&&Rl(e,r,t,i,a)}t.swingReleased&&e.wallRunActive&&e.wall&&(e.velocity=Y(e.velocity,X(e.wall.normal,2)),e.velocity.y+=3,e.wall=null,e.wallRunActive=!1,e.wallCrawlActive=!1,e.wallDetachUntil=e.elapsed+.3,e.swingNeedsRelease=!1,e.swingReleaseSeconds=.4),i.advancedTraversal&&t.jumpPressed&&e.swing&&(zl(e,t,i,a),e.swingNeedsRelease=!i.profiledSwing,i.profiledSwing&&(e.swingRetryAfter=e.elapsed+.28),e.jumpBufferSeconds=0,t={...t,jumpPressed:!1}),(t.swingReleased||t.swingHeld===!1)&&e.swing&&zl(e,t,i,a);let c=!!(i.profiledSwing&&(i.traversalAirZip??1)&&t.zipPressed&&!t.swingHeld&&!e.grounded&&e.coyoteSeconds<=0&&!e.swing&&!e.zip&&!e.wall&&!e.mantle&&e.perchSeconds<=0&&e.airSeconds>.08);if(c&&(t={...t,zipHeld:!0,zipStyle:`air`}),t.zipPressed&&!e.zip){let r=Il(e,t,n,i)??(i.advancedTraversal&&!i.profiledSwing&&t.zipStyle===`air`?{id:`air-zip-no-anchor`,point:Y(e.position,X(Q($(t.cameraForward??J(0,0,-1))),40)),kind:`generic`}:null);r&&Bl(e,r,i,a,t,c)}if((t.zipReleased||t.zipHeld===!1&&!e.zip?.contextual)&&e.zip&&!t.jumpPressed){let t=e.zip.targetId;e.zip=null,a.push(Ll(`zip-cancelled`,e,{anchorId:t}))}if(e.zip&&!e.zip.airDash&&!kl(e.position,e.zip.target,n.anchorColliders??n.colliders??[])&&(a.push(Ll(`zip-cancelled`,e,{anchorId:e.zip.targetId})),e.zip=null),e.wall&&e.jumpBufferSeconds>0&&!e.swing&&!e.zip){let n=Q($(e.wall.normal)),r=Tl(e.velocity,n),s=Q(Tl($(o),n));e.velocity=t.roofExitDirection&&i.profiledSwing?Y(X(Q($(t.roofExitDirection)),Math.max(i.pointLaunchSpeed,Z(e.velocity)*(i.traversalFlowRetention??.9))),J(0,Math.max(i.wallJumpUpSpeed,r.y))):Y(r,X(n,i.wallJumpOutSpeed)),e.velocity=Y(e.velocity,X(s,2.5)),e.velocity.y=Math.max(r.y,i.wallJumpUpSpeed),e.wallDetachUntil=e.elapsed+.4,e.airJumps=0,e.wall=null,e.grounded=!1,e.jumpBufferSeconds=0,e.wallJumpSeconds=.28,a.push(Ll(`wall-jump`,e,{strength:Z(e.velocity)}))}else e.jumpBufferSeconds>0&&(e.grounded||e.coyoteSeconds>0)&&!e.zip?(e.velocity.y=i.jumpSpeed,e.groundJump=!0,e.grounded=!1,e.coyoteSeconds=0,e.jumpBufferSeconds=0,e.airJumps=0,e.actionSequence=(e.actionSequence??0)+1,a.push(Ll(`jump`,e,{strength:i.jumpSpeed}))):t.jumpPressed&&!e.grounded&&!e.swing&&!e.zip&&!e.wall&&(e.airJumps??0)<1&&e.airSeconds>.08&&(e.airJumps=1,e.doubleJumpSeconds=.7,e.jumpBufferSeconds=0,e.velocity.y=Math.max(e.velocity.y,i.advancedTraversal?18:i.jumpSpeed*.98),e.actionSequence=(e.actionSequence??0)+1,a.push(Ll(`double-jump`,e,{strength:e.velocity.y})));e.perchSeconds>0&&t.jumpPressed&&(e.velocity=Y(X(Q($(t.cameraForward??o),J(0,0,-1)),i.pointLaunchSpeed*.65),J(0,i.pointLaunchLift*.82,0)),e.perchSeconds=0,e.pointLaunchSeconds=.28,e.grounded=!1,a.push(Ll(`point-launch`,e,{strength:Z(e.velocity)})));let l=!!(i.advancedTraversal&&(e.advanced?.gliding||e.advanced?.sling||e.advanced?.corner||e.advanced?.chargeJump));if(!l&&e.grounded&&!e.swing&&!e.zip&&!e.wallCrawlActive&&!e.wallRunActive&&!e.mantle?Ul(e,o,i,r):!l&&!e.swing&&!e.zip&&!e.wallCrawlActive&&!e.wallRunActive&&!e.mantle&&Wl(e,o,i,r),$l(e,t,i,r),i.advancedTraversal&&e.advanced?.gliding){let n=Q($(t.cameraForward??e.velocity),J(0,0,-1)),a=Sl(n,ml),s=Q(Y(n,X(a,gl(xl($(o),a),-1,1)*.85)),n);e.velocity=jt(e.velocity,s,hl(t.glidePitch),r,i.gravity,i.maximumSpeed)}else if(i.advancedTraversal&&e.advanced?.corner){let t=e.advanced.corner;e.velocity=Vt(e.velocity,t.direction,r,M.cornerTurnRate),e.velocity.y-=i.gravity*r,t.seconds+=r,t.seconds>=M.cornerSeconds&&(e.advanced.corner=null)}else if(e.mantle)eu(e,i,r);else if(e.swing)Kl(e,t,n,i,r,a);else if(e.zip)Xl(e,t,i,r,a);else if(!e.grounded&&!e.wallCrawlActive&&!e.wallRunActive){let n=t.diveHeld&&e.velocity.y<1?i.diveGravityMultiplier:1;if(e.velocity.y-=i.gravity*n*r,t.diveHeld){let n=Q($(t.cameraForward??o),J(0,0,-1));e.velocity=Y(e.velocity,X(n,i.diveAcceleration*r))}}if(n.windAcceleration&&!e.swing&&!e.grounded&&!e.wallRunActive&&!e.wallCrawlActive&&!e.zip&&!e.mantle){let t=dl([{priority:`comfort`,deltaVelocity:X(n.windAcceleration,r)}],r,12);e.velocity=Y(e.velocity,t.deltaVelocity),e.assistImpulse=t.spent}nu(e,i.maximumSpeed);let u=yl(e.velocity),d=e.velocity.y,f=tu(e,n,i,r),p=Yl(e,n,i,a,t,r),m=tu(e,n,i,0);if(Zl(e,m.wall??p?.wall??f.wall??n.wallContact??null,i,r,a),e.wall?.feetTouching||(e.wallCrawlActive=!1,(!i.arcadeTraversal||!Wt(e.wall))&&(i.arcadeTraversal&&e.wallRunActive&&t.swingHeld&&(e.swingNeedsRelease=!1),e.wallRunActive=!1)),e.grounded=m.grounded,e.wall?.feetTouching&&Ql(e,e.wall,u,t,i),e.swing&&e.grounded&&!n.externalCollision&&Jl(e,{dt:r},t,i,a),e.mantle&&wl(e.position,e.mantle.target)<.09){let t=e.mantle.exitVelocity;e.mantle=null,e.wallCrawlActive=!1,e.velocity=i.profiledSwing&&t?yl(t):J(),e.perchSeconds=t?0:.2,t&&(e.grounded=!1,e.wallDetachUntil=e.elapsed+.3,e.swingNeedsRelease=!1,e.swingRetryAfter=e.elapsed+.2)}if(e.zip&&!e.zip.airDash){let t=e.zip,n=wl(e.position,t.target),r=f.blocked&&xl(e.velocity,Q(bl(t.target,e.position)))<.2;(n<.12||r)&&(e.zip=null,e.grounded&&(t.targetKind===`roof`||t.targetKind===`perch`||t.targetKind===`ledge`)?(e.velocity=J(),e.perchSeconds=.24,a.push(Ll(`perched`,e,{anchorId:t.targetId}))):a.push(Ll(`zip-cancelled`,e,{anchorId:t.targetId})))}return(f.landed||!s&&e.grounded)&&(e.landingImpact=Math.abs(d),Hl(e,t,e.landingImpact,n.canRoll),e.landingSeconds=gl(Math.abs(d)/25+.12,.12,.34),a.push(Ll(`land`,e,{strength:_l(Math.abs(d)/30)}))),e.grounded?e.airSeconds=0:e.airSeconds+=r,i.advancedTraversal&&!n.externalCollision&&lu(e,t,i,r,a),iu(e,t),{state:e,context:ru(e,t,i,r),events:a}}function cu(e,t,n,r,i,a){let o=e.advanced??=ln();o.enabled=!0,o.pulse*=Math.exp(-7*i);let s=Y(e.position,J(0,1.3,0)),c=e=>n.hasLineOfSight?n.hasLineOfSight(s,e):kl(s,e,n.anchorColliders??n.colliders??[]);if(t.cancelAbilities)return o.gliding=!1,o.sling=null,o.chargeJump=0,o.corner=null,o.loop=null,e.swing&&a.push(Ll(`web-released`,e,{anchorId:e.swing.anchorId,strength:0})),e.swing=null,e.zip=null,e.swingNeedsRelease=!1,{...t,swingHeld:!1,swingPressed:!1,swingReleased:!1,zipPressed:!1,zipHeld:!1,chargeJumpHeld:!1,chargeJumpReleased:!1,slingshotHeld:!1,slingshotReleased:!1,glidePressed:!1,cornerHeld:!1,loopHeld:!1};if(e.grounded&&(o.gliding=!1,o.flow=0,o.diveSpeed=0,o.corner=null,o.loop=null),t.diveHeld&&e.velocity.y<0&&!e.grounded?(o.diveSpeed=Math.max(o.diveSpeed,-e.velocity.y),o.diveUntil=e.elapsed+.8):e.elapsed>o.diveUntil&&(o.diveSpeed=0),(t.swingPressed||t.zipPressed||t.jumpPressed||t.wallCrawlPressed||t.diveHeld)&&(o.gliding=!1,o.corner=null),(t.jumpPressed||t.swingPressed||t.zipPressed||t.wallCrawlPressed)&&(o.sling=null,o.chargeJump=0),t.glidePressed&&!e.grounded&&!e.wallRunActive&&!e.wallCrawlActive&&!e.mantle&&!o.sling&&(o.gliding=!o.gliding&&Z(e.velocity)>=8,o.gliding&&(e.swing&&a.push(Ll(`web-released`,e,{anchorId:e.swing.anchorId,strength:0})),e.swing=null,e.zip=null,e.swingNeedsRelease=!0,e.perchSeconds=0,e.wall=null,o.corner=null,o.loop=null,a.push(Ll(`glide-started`,e)))),!e.grounded&&e.coyoteSeconds<=0&&(o.chargeJump=0,o.sling=null),t.chargeJumpHeld&&e.grounded&&!e.swing&&!e.zip&&!o.sling&&(o.chargeJump=Math.min(M.chargeJumpSeconds,o.chargeJump+i),e.velocity.x*=Math.exp(-8*i),e.velocity.z*=Math.exp(-8*i),e.jumpBufferSeconds=0),t.chargeJumpReleased&&o.chargeJump>0&&(e.grounded||e.coyoteSeconds>0)?(e.velocity=Jt(e.velocity,o.chargeJump,r.jumpSpeed,r.maximumSpeed),o.chargeJump=0,o.pulse=1,e.grounded=!1,e.coyoteSeconds=0,e.jumpBufferSeconds=0,e.groundJump=!0,e.airJumps=0,e.perchSeconds=0,e.actionSequence=(e.actionSequence??0)+1,a.push(Ll(`jump`,e,{strength:e.velocity.y})),t={...t,jumpPressed:!1}):!t.chargeJumpHeld&&!t.chargeJumpReleased&&(o.chargeJump=0),t.slingshotHeld&&e.grounded&&!e.swing&&!e.zip&&!t.jumpPressed){if(!o.sling&&n.slingshotAnchors){let r=n.slingshotAnchors,i=Q($(t.cameraForward??J(0,0,-1))),a=Sl(i,ml),l=r.map(e=>bl(e.point,s));r.every((e,t)=>e.id!==`sky-fallback`&&e.kind===`facade`&&e.lineOfSight!==!1&&e.normal&&Math.abs(e.normal.y)<.45&&Z(l[t])>=4&&Z(l[t])<=70&&xl(l[t],i)>2&&c(e.point))&&xl(l[0],a)*xl(l[1],a)<-4&&wl(r[0].point,r[1].point)>8&&(o.sling={anchors:[yl(r[0].point),yl(r[1].point)],direction:i,seconds:0},o.chargeJump=0,e.jumpBufferSeconds=0)}o.sling&&(o.sling.seconds=Math.min(M.slingChargeSeconds,o.sling.seconds+i),o.sling.direction=Q(t.aimDirection??t.cameraForward??o.sling.direction),e.velocity.x*=Math.exp(-16*i),e.velocity.z*=Math.exp(-16*i))}if(o.sling&&!o.sling.anchors.every(c)&&(o.sling=null),t.slingshotReleased&&o.sling&&e.grounded){let n=o.sling;o.sling=null,n.seconds>=M.slingMinimumCharge&&(e.velocity=pn(e.velocity,n.direction,n.seconds,r.maximumSpeed),e.grounded=!1,e.coyoteSeconds=0,e.jumpBufferSeconds=0,e.perchSeconds=0,e.groundJump=!0,e.airJumps=0,e.pointLaunchSeconds=.3,o.pulse=1,e.actionSequence=(e.actionSequence??0)+1,a.push(Ll(`slingshot-launch`,e,{strength:Z(e.velocity)})),t={...t,jumpPressed:!1})}else!t.slingshotHeld&&!t.slingshotReleased&&(o.sling=null);if(o.corner&&(!t.cornerHeld||!c(o.corner.anchor)||e.swing||e.zip||e.mantle)&&(o.corner=null),t.cornerHeld&&!o.corner&&!o.gliding&&!e.grounded&&!e.zip&&(!e.wallRunActive||r.profiledSwing)&&!e.wallCrawlActive&&!e.mantle&&e.elapsed>=o.cornerAfter&&Z($(e.velocity))>=16){let t=n.cornerTarget;t&&t.anchor.id!==`sky-fallback`&&t.anchor.lineOfSight!==!1&&wl(s,t.anchor.point)<=18&&c(t.anchor.point)&&(o.corner={anchor:yl(t.anchor.point),direction:Q($(t.direction)),seconds:0},e.swing=null,e.wallRunActive=!1,e.wall=null,e.wallDetachUntil=e.elapsed+.4,e.swingNeedsRelease=!0,o.loop=null,o.cornerAfter=e.elapsed+.9,o.pulse=.55,a.push(Ll(`corner-tether`,e,{anchorId:t.anchor.id})))}o.loop&&(!t.loopHeld&&!o.loop.automatic||!e.swing)&&(o.loop=null);let l=e.swing?Q(bl(e.position,e.swing.simulationPivot??e.swing.anchor)):ml,u=e.swing?.ropeLength??0,d=!!(e.swing&&Cl(Tl(e.velocity,l))>r.gravity*u*(3-2*l.y)*1.08),f=t.loopHeld&&o.diveSpeed>=M.loopMinimumDiveSpeed&&e.elapsed<o.diveUntil;if((!r.flowTraversal&&d||f)&&e.swing&&!o.loop&&e.elapsed>=o.loopAfter&&e.swing.ropeLength>8){let t=Q(bl(e.position,e.swing.anchor)),n=Sl(t,e.velocity);Z(n)>1&&(o.loop={axis:Q(n),previousRadial:t,radians:0,seconds:0,automatic:d},o.diveSpeed=0,o.loopAfter=e.elapsed+1)}return t}function lu(e,t,n={},r=0,i=[]){let a=Al(n);if(!a.advancedTraversal||!e.advanced)return;let o=e.advanced;if(e.wallRunActive&&e.wall?.feetTouching&&r>0){let n=o.wallSamplePosition?wl(e.position,o.wallSamplePosition):1/0;if(o.wallStallSeconds=Math.abs(t.wallClimb??0)+Math.abs(t.wallStrafe??0)+Z(t.move??J())>.1&&n<r*.8?(o.wallStallSeconds??0)+r:0,o.wallSamplePosition=yl(e.position),o.wallStallSeconds>.12){let n=xl(Q(Sl(ml,e.wall.normal)),t.move??t.cameraForward??e.velocity);o.wallRecoverySide=e.elapsed<(o.wallRecoveryUntil??0)?-(o.wallRecoverySide??1):Math.abs(n)>.1?Math.sign(n):1,o.wallRecoveryUntil=e.elapsed+.6,o.wallStallSeconds=0}}else o.wallSamplePosition=void 0,o.wallStallSeconds=0;if((e.grounded||e.wall?.feetTouching||e.wallRunActive||e.wallCrawlActive||e.mantle)&&(o.gliding=!1,o.corner=null,o.loop=null),e.grounded&&(o.flow=0,o.diveSpeed=0),!e.swing){o.loop=null,o.phase=`air`;return}let s=Q(bl(e.position,e.swing.anchor));if(o.phase=lt(e.swing.attachedSeconds,e.velocity.y,s),o.loop){let t=o.loop;t.seconds+=r;let n=rt(t.previousRadial,s,t.axis);if(Math.abs(n)>.6||n<-.1||t.seconds>8){o.loop=null;return}t.radians=Math.max(0,t.radians+n),t.previousRadial=s,t.radians>=Math.PI*2&&(nu(e,a.maximumSpeed),o.loop=null,o.loopAfter=e.elapsed+.8,o.pulse=1,i.push(Ll(`loop-completed`,e,{strength:Z(e.velocity)})))}}var uu=new V(1,0,0),du=new V(0,0,1),fu=e=>e.toLowerCase().replace(/^.*:/,``).replace(/^(?:mixamorig|peter)/,``).replace(/_\d+.*$/,``).replace(/[^a-z0-9]/g,``);function pu(e){let t=e.toLowerCase(),n=fu(e);if(t===`spine_68`)return`hips`;if(t.startsWith(`spine001_`))return`spine`;if(t.startsWith(`spine002_`))return`spine2`;if(t.startsWith(`spine003_`))return`chest`;if(t.startsWith(`spine004_`))return`neck`;if(t.startsWith(`spine005_`))return`head`;if(t.startsWith(`spine006_`))return``;let r=/left|(?:^|[._\s])l(?:[._\s]|$)|l_\d/.test(t),i=/right|(?:^|[._\s])r(?:[._\s]|$)|r_\d/.test(t);return/hips|pelvis|rootx|bip001$/.test(n)?`hips`:/spine2|spine03|chest/.test(n)?`chest`:/spine1|spine02/.test(n)?`spine2`:/spine|spine01/.test(n)?`spine`:/head/.test(n)&&!/top|end/.test(n)?`head`:/neck|subneck/.test(n)?`neck`:(/shoulder/.test(t)||/clavicle/.test(t))&&r?`leftShoulder`:(/shoulder/.test(t)||/clavicle/.test(t))&&i?`rightShoulder`:(/leftarm/.test(n)||/upper.?arm/.test(t)&&r||/arm.*stretch/.test(t)&&r||/arm_left/.test(t))&&!/fore|hand|finger|twist/.test(t)?`leftArm`:(/rightarm/.test(n)||/upper.?arm/.test(t)&&i||/arm.*stretch/.test(t)&&i||/arm_right/.test(t))&&!/fore|hand|finger|twist/.test(t)?`rightArm`:(/leftforearm/.test(n)||/forearm/.test(t)&&r)&&!/twist/.test(t)?`leftForeArm`:(/rightforearm/.test(n)||/forearm/.test(t)&&i)&&!/twist/.test(t)?`rightForeArm`:/lefthand/.test(n)||/hand/.test(t)&&r&&!/finger|thumb|index|middle|ring|pinky/.test(t)?`leftHand`:/righthand/.test(n)||/hand/.test(t)&&i&&!/finger|thumb|index|middle|ring|pinky/.test(t)?`rightHand`:(/leftupleg|leftthigh/.test(n)||/thigh/.test(t)&&r||/leg_left_thigh/.test(t))&&!/twist/.test(t)?`leftUpLeg`:(/rightupleg|rightthigh/.test(n)||/thigh/.test(t)&&i||/leg_right_thigh/.test(t))&&!/twist/.test(t)?`rightUpLeg`:(/leftleg/.test(n)||/leg.*stretch/.test(t)&&r||/(?:shin|calf)/.test(t)&&r||/leg_left_knee/.test(t))&&!/up|thigh|twist/.test(t)?`leftLeg`:(/rightleg/.test(n)||/leg.*stretch/.test(t)&&i||/(?:shin|calf)/.test(t)&&i||/leg_right_knee/.test(t))&&!/up|thigh|twist/.test(t)?`rightLeg`:/foot|toe/.test(t)&&r?`leftFoot`:/foot|toe/.test(t)&&i?`rightFoot`:``}function mu(e,t=!1){let n=[];if(e.traverse(e=>{e instanceof qe&&n.push(e)}),!n.length||!t)return;let r=[];e.traverse(e=>{e instanceof W&&!(e instanceof qe)&&r.push(e)}),r.forEach(e=>e.parent?.remove(e))}function hu(e,t,n){e.traverse(e=>{if(!(e instanceof W))return;if(n===`character`&&(e.frustumCulled=!1),e.castShadow=n===`character`,e.receiveShadow=n!==`character`,n===`city`){let t=new Ut().setFromObject(e).getSize(new V);e.castShadow=t.y>3.5&&t.x>1&&t.z>1}let r=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let r=e;if(r.map&&(r.map.colorSpace=Fe,r.map.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())),r.emissiveMap&&(r.emissiveMap.colorSpace=Fe,r.emissiveMap.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())),r.normalMap&&(r.normalMap.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy())),n!==`baked`)return`metalness`in r&&!Number.isFinite(r.metalness)&&(r.metalness=0),`envMapIntensity`in r&&(r.envMapIntensity=n===`character`?.72:n===`city`?.55:.45),n===`city`?(!r.map&&r.emissiveMap&&(r.map=r.emissiveMap,r.emissiveIntensity=Math.min(r.emissiveIntensity,.28)),r.flatShading=!1,r.roughness=Number.isFinite(r.roughness)?G.clamp(r.roughness,.38,.92):.8,r.metalness=Number.isFinite(r.metalness)?G.clamp(r.metalness,0,.55):.04,r.needsUpdate=!0,r):(n===`environment`&&(r.flatShading=!1,r.roughness=Number.isFinite(r.roughness)?Math.max(.42,r.roughness):.78,r.metalness=Number.isFinite(r.metalness)?Math.min(.55,r.metalness):.05),r.needsUpdate=!0,r);let i=r.map??r.emissiveMap??null,a=r.emissiveMap&&!r.map?new L(`#f2efe9`):(r.color??new L(`white`)).clone().multiplyScalar(.97),o=new Ne({map:i,color:a,transparent:r.transparent,opacity:r.opacity,alphaTest:r.alphaTest,side:r.side});return o.name=r.name,o.toneMapped=!0,o});e.material=Array.isArray(e.material)?r:r[0]})}function gu(e,t,n=2.05){mu(e,t.discardRigidMeshes);for(let n of t.hiddenMeshes??[]){let t=e.getObjectByName(n);t&&(t.visible=!1)}t.modelRotation?e.rotation.set(...t.modelRotation):e.rotation.y=t.modelYaw,e.updateMatrixWorld(!0);let r=t.normalizationMesh&&e.getObjectByName(t.normalizationMesh)||e,i=t.normalizationExcludeBones?new RegExp(t.normalizationExcludeBones,`i`):null,a=()=>{if(!(r instanceof qe)||!i)return new Ut().setFromObject(r,!0);let e=new Ut,t=r.geometry.getAttribute(`skinIndex`),n=r.geometry.getAttribute(`skinWeight`),a=new V;if(!t||!n)return e.setFromObject(r);let o=r.skeleton.bones.map(e=>i.test(e.name));for(let i=0;i<t.count;i++){let s=0;for(let e=0;e<4;e++)o[t.getComponent(i,e)]&&(s+=n.getComponent(i,e));s>.5||(r.getVertexPosition(i,a).applyMatrix4(r.matrixWorld),e.expandByPoint(a))}return e.isEmpty()?e.setFromObject(r):e},o=a(),s=o.getSize(new V);e.scale.multiplyScalar(n*(t.visualScale??1)/Math.max(s.y,.001)),e.updateMatrixWorld(!0),o=a();let c=o.getCenter(new V);return e.position.x-=c.x,e.position.x+=t.visualOffsetX??0,e.position.y-=o.min.y,e.position.y+=t.visualOffsetY??0,e.position.z-=c.z,e.updateMatrixWorld(!0),a()}function _u(e){let t=[],n=new Set;e.updateWorldMatrix(!0,!0);let r=e.getWorldQuaternion(new D).invert(),i=new D,a=new D;return e.traverse(e=>{if(!(e instanceof tn))return;let o=pu(e.name);!o||n.has(o)||(n.add(o),i.identity(),e.parent?.getWorldQuaternion(i),a.copy(r).multiply(i).invert(),t.push({bone:e,base:e.quaternion.clone(),axisX:uu.clone().applyQuaternion(a).normalize(),axisZ:du.clone().applyQuaternion(a).normalize(),role:o}))}),t}var vu=[`hips`,`spine`,`spine1`,`spine2`,`neck`,`head`,`leftarm`,`leftforearm`,`lefthand`,`rightarm`,`rightforearm`,`righthand`,`leftupleg`,`leftleg`,`leftfoot`,`rightupleg`,`rightleg`,`rightfoot`];function yu(e){let t=!1,n=new Set;return e.traverse(e=>{e instanceof tn&&(e.name.toLowerCase().includes(`mixamorig`)&&(t=!0),n.add(fu(e.name)))}),t||vu.every(e=>n.has(e))}function bu(e,t,n){if(e.length&&e.every(e=>/^(?:mixamo:|lobby:dance:)/.test(e.name)))return e.filter(e=>e.tracks.every(e=>{let t=e.name.slice(0,e.name.lastIndexOf(`.`));return n.getObjectByName(t)instanceof tn})).map(e=>e.clone());if(!yu(t)||!yu(n))return[];let r=new Map,i=new Map;t.traverse(e=>{e instanceof tn&&r.set(fu(e.name),e)}),n.traverse(e=>{e instanceof tn&&i.set(fu(e.name),e)});let a=new D,o=new D,s=new D,c=new D;return e.map(e=>{let t=e.tracks.flatMap(e=>{let t=e.name.lastIndexOf(`.`);if(t<0)return[];let n=e.name.slice(0,t),l=e.name.slice(t+1);if(l!==`quaternion`)return[];let u=r.get(fu(n)),d=i.get(fu(n));if(!u||!d)return[];let f=e.clone();f.name=`${d.name}.${l}`,a.copy(u.quaternion).invert();for(let e=0;e<f.values.length;e+=4)o.fromArray(f.values,e),s.copy(a).multiply(o),c.copy(d.quaternion).multiply(s).normalize().toArray(f.values,e);return[f]});return new yn(e.name,Math.max(.35,e.duration),t)}).filter(e=>e.tracks.length>4)}function xu(e){return e.map(e=>new yn(e.name,e.duration,e.tracks.filter(e=>{if(e.name.endsWith(`.quaternion`)||e.name.endsWith(`.scale`))return!0;if(!e.name.endsWith(`.position`))return!1;let t=e.name.slice(0,e.name.lastIndexOf(`.`));return pu(t)!==`hips`&&!/(?:^|[|:_])(?:root|armature)(?:$|[|:_])/i.test(t)}).map(e=>e.clone()))).filter(e=>e.tracks.length>4).map(e=>e.duration<=.15?Su(e,0,e.name):e)}function Su(e,t,n){let r=e.tracks.map(e=>{let n=e.clone(),r=e.InterpolantFactoryMethodLinear().evaluate(t);return n.times=new Float32Array([0,1]),n.values=new Float32Array([...r,...r]),n});return new yn(n,1,r)}function Cu(e,t){let n=xu(e);if(t.id===`ironman`||t.id===`mua-spider`)for(let e of n)e.tracks=e.tracks.filter(e=>!/^(?:ActorRoot_\d+|Motion_\d+|Bip01_02)\.position$/.test(e.name));if(t.id!==`playstation`&&t.id!==`venom`)return n;let r=n.find(e=>/jump/i.test(e.name));if(!r)return n;let i=r.tracks.map(e=>{let t=e.clone(),n=Array.from(e.values.slice(0,e.getValueSize()));return t.times=new Float32Array([0,1]),t.values=new Float32Array([...n,...n]),t});return n.unshift(new yn(`stand`,1,i)),n}function wu(e,t,n){if(![`playstation`,`venom`,`pavitr`,`ironman`].includes(t.id))return;let r=t.id===`ironman`?n.find(e=>e.name===`menu_idle`):t.id===`pavitr`?n.find(e=>/shell.?idle$/i.test(e.name)):n.find(e=>e.name===`stand`);if(!r)return;let i=new ft(e);i.clipAction(r).play(),i.update(0),e.updateWorldMatrix(!0,!0)}var Tu=new D,Eu=new D;function Du(e,t,n,r,i){let a=Math.sin(n*9.5),o=Math.sin(n*2.4);for(let s of e){let e=0,c=0;if(i===`t-pose`&&(s.role===`leftArm`&&(c=-1.05),s.role===`rightArm`&&(c=1.05),(s.role===`leftForeArm`||s.role===`rightForeArm`)&&(e=-.12)),t===`run`)s.role===`leftUpLeg`&&(e=a*.68),s.role===`rightUpLeg`&&(e=-a*.68),s.role===`leftLeg`&&(e=Math.max(0,-a)*.72),s.role===`rightLeg`&&(e=Math.max(0,a)*.72),s.role===`leftArm`&&(e=-a*.58),s.role===`rightArm`&&(e=a*.58),s.role===`chest`&&(c=a*.055);else if(t===`swing`||t===`zip`)s.role===`leftArm`&&(c=-1.18),s.role===`rightArm`&&(c=1.18),(s.role===`leftForeArm`||s.role===`rightForeArm`)&&(e=-.48),s.role===`leftUpLeg`&&(e=.28+o*.12),s.role===`rightUpLeg`&&(e=-.34-o*.12),(s.role===`leftLeg`||s.role===`rightLeg`)&&(e=.5),(s.role===`chest`||s.role===`spine2`)&&(e=-.16);else if(t===`perch`)s.role===`leftUpLeg`&&(e=-1.05,c=-.28),s.role===`rightUpLeg`&&(e=-1.05,c=.28),(s.role===`leftLeg`||s.role===`rightLeg`)&&(e=1.7),s.role===`leftArm`&&(e=-.6,c=-.32),s.role===`rightArm`&&(e=-.6,c=.32),(s.role===`chest`||s.role===`spine2`)&&(e=.32);else if(t===`emote`)s.role===`rightArm`&&(e=-.3,c=.95+Math.sin(n*3)*.12),s.role===`rightForeArm`&&(e=-.9+Math.sin(n*4)*.15),s.role===`head`&&(c=Math.sin(n*2)*.08);else if(t===`fall`)s.role===`leftArm`&&(e=-.25,c=-.68),s.role===`rightArm`&&(e=-.2,c=.72),s.role===`leftUpLeg`&&(e=.28),s.role===`rightUpLeg`&&(e=-.18),(s.role===`leftLeg`||s.role===`rightLeg`)&&(e=.3);else if(t===`jump`)s.role===`leftArm`&&(c=-.62),s.role===`rightArm`&&(c=.62),(s.role===`leftUpLeg`||s.role===`rightUpLeg`)&&(e=.28),(s.role===`leftLeg`||s.role===`rightLeg`)&&(e=.42);else if(t===`wall`||t===`crawl`){let n=t===`crawl`?a:.3;s.role===`leftArm`&&(c=-.82+n*.28),s.role===`rightArm`&&(c=.82-n*.28),(s.role===`leftForeArm`||s.role===`rightForeArm`)&&(e=-.58),s.role===`leftUpLeg`&&(e=.48-n*.32),s.role===`rightUpLeg`&&(e=.48+n*.32),(s.role===`leftLeg`||s.role===`rightLeg`)&&(e=-.62)}else if(t===`dive`)s.role===`leftArm`&&(c=-.25),s.role===`rightArm`&&(c=.25),(s.role===`chest`||s.role===`spine2`)&&(e=.28),(s.role===`leftUpLeg`||s.role===`rightUpLeg`)&&(e=-.18);else if(t===`hover`||t===`fly`){let n=t===`fly`?.16:o*.03;s.role===`leftArm`&&(c=-.18-n),s.role===`rightArm`&&(c=.18+n),(s.role===`leftForeArm`||s.role===`rightForeArm`)&&(e=.2),(s.role===`leftUpLeg`||s.role===`rightUpLeg`)&&(e=t===`fly`?-.12:.04),(s.role===`chest`||s.role===`spine2`)&&(e=t===`fly`?.22:o*.012)}else(s.role===`chest`||s.role===`spine2`)&&(e=o*.018);Tu.setFromAxisAngle(s.axisX,e),Eu.copy(s.base).premultiply(Tu),c&&(Tu.setFromAxisAngle(s.axisZ,c),Eu.premultiply(Tu)),s.bone.quaternion.slerp(Eu,1-Math.exp(-12*r))}}var Ou={source:`playstation.glb / Crawl`,duration:2.3333332538604736,times:[0,.0333333,.0666667,.1,.1333333,.1666667,.2,.2333333,.2666667,.3,.3333333,.3666667,.4,.4333333,.4666667,.5,.5333333,.5666666,.6,.6333333,.6666666,.7,.7333333,.7666666,.8,.8333333,.8666666,.9,.9333333,.9666666,1,1.0333333,1.0666666,1.1,1.1333333,1.1666666,1.2,1.2333333,1.2666666,1.3,1.3333333,1.3666666,1.4,1.4333333,1.4666666,1.4999999,1.5333333,1.5666666,1.5999999,1.6333333,1.6666666,1.6999999,1.7333333,1.7666666,1.7999999,1.8333333,1.8666666,1.8999999,1.9333333,1.9666666,1.9999999,2.0333333,2.0666666,2.0999999,2.1333333,2.1666666,2.1999999,2.2333333,2.2666666,2.2999999,2.3333333],rotations:JSON.parse(`{"hips":[-0.6501306,-0.0679261,-0.0703853,0.7534999,-0.6506367,-0.0696011,-0.0717711,0.7527792,-0.652789,-0.0761358,-0.0772507,0.7497348,-0.6555217,-0.084213,-0.0839256,0.7457586,-0.6583236,-0.0920649,-0.0904197,0.7415918,-0.6611848,-0.0994688,-0.0968749,0.7372624,-0.6639628,-0.1054585,-0.1038105,0.732977,-0.6667585,-0.1113874,-0.1106139,0.7285537,-0.6695881,-0.1171774,-0.1173136,0.7239881,-0.6723836,-0.1219074,-0.1242842,0.7194389,0.6749982,0.1238147,0.1322468,-0.7152329,0.6774723,0.1227557,0.1410967,-0.7113748,0.6793126,0.1179556,0.1507763,-0.7084401,0.6798591,0.1068979,0.161871,-0.7072215,0.6786043,0.0891309,0.1742071,-0.7079574,0.675275,0.0662875,0.1868661,-0.7104158,-0.6691062,-0.0384979,-0.1993134,0.7149048,-0.6622746,-0.0099715,-0.2117451,0.7186494,-0.6550066,0.0197078,-0.225328,0.7209752,-0.6477746,0.0502976,-0.2414445,0.720807,-0.6413324,0.0809106,-0.2617009,0.7167,-0.6355777,0.1103882,-0.2855275,0.7087521,-0.6299948,0.1390206,-0.3128404,0.697073,-0.6245522,0.1668608,-0.3427344,0.6816342,-0.6188225,0.1939067,-0.3735096,0.6632869,-0.6121235,0.2201443,-0.4027609,0.6439138,-0.6027407,0.2459556,-0.426399,0.6280075,-0.5915708,0.2709906,-0.4474563,0.613507,-0.5789341,0.2946974,-0.4661327,0.6005906,-0.5654495,0.316302,-0.4820308,0.5898019,-0.5520854,0.3348411,-0.4942037,0.5821047,-0.5404211,0.3482519,-0.4994937,0.5806648,-0.528874,0.3610062,-0.5032071,0.5803012,-0.5182574,0.3714752,-0.5035973,0.5829281,-0.5093053,0.3783082,-0.4998117,0.5896434,-0.5026155,0.380386,-0.4918248,0.6006601,-0.4975906,0.3795563,-0.4820078,0.6131958,-0.4931583,0.377851,-0.4718873,0.6255765,-0.4894205,0.3755767,-0.4615168,0.6375044,-0.486471,0.3730037,-0.4510341,0.6486775,-0.4843956,0.370366,-0.4406616,0.6587923,-0.4846671,0.3660777,-0.4306603,0.6675452,-0.4864533,0.3604976,-0.4207702,0.6755421,-0.4895577,0.3539931,-0.4109388,0.6827528,-0.4938818,0.3466993,-0.4011237,0.689188,-0.4994218,0.3385147,-0.3912879,0.6948953,-0.5058292,0.3296268,-0.3816657,0.6998673,-0.5125505,0.3202045,-0.3721991,0.7044352,-0.5194548,0.3101855,-0.3629644,0.7086667,-0.5264672,0.2994669,-0.3539785,0.7126367,-0.5335661,0.2879017,-0.3451953,0.7164217,-0.540769,0.275071,-0.3366057,0.7201399,-0.5478354,0.2618205,-0.328069,0.7236693,-0.5551099,0.2477887,-0.3194393,0.7269197,-0.5628433,0.2326434,-0.3105818,0.7298106,-0.5711924,0.2160829,-0.3013734,0.7322714,-0.5800284,0.1976623,-0.2916937,0.7344463,-0.5892925,0.1774677,-0.2814624,0.736219,-0.59874,0.15609,-0.2706903,0.7374775,-0.6080143,0.1341456,-0.2593066,0.7382978,-0.616641,0.1122693,-0.247162,0.7389591,-0.624399,0.0914224,-0.2337415,0.7396842,-0.6312201,0.0720091,-0.2196136,0.7403686,-0.6374774,0.0540603,-0.204423,0.7408854,-0.6434261,0.0375437,-0.1877798,0.7411694,-0.6491898,0.0223539,-0.1692576,0.7412184,-0.6537646,0.0070087,-0.1502411,0.7415998,-0.6565608,-0.0088018,-0.1322663,0.7425336,-0.6575272,-0.0246946,-0.1155312,0.7441107,-0.6566887,-0.040131,-0.0999274,0.7464342,-0.6501306,-0.0679261,-0.0703853,0.7534999],"spine":[0.6794845,0.0483509,0.1998855,-0.7042789,0.6792467,0.0471425,0.200254,-0.7044855,0.678375,0.0422753,0.2018207,-0.7051869,0.6773121,0.0361715,0.20364,-0.7060246,0.676373,0.0300154,0.2053479,-0.7067184,0.6756636,0.023771,0.2071757,-0.707101,0.6756439,0.0171307,0.2092194,-0.7067101,0.6755966,0.0104671,0.2111937,-0.7062981,0.6756136,0.0037816,0.2131914,-0.7057488,0.675895,-0.0030761,0.2155766,-0.7047576,0.6767351,-0.0104302,0.2189904,-0.7028258,0.677964,-0.0183546,0.2234761,-0.7000616,0.6792198,-0.0273278,0.2288755,-0.6967996,0.6804624,-0.0382061,0.2355708,-0.692833,0.6814704,-0.0512315,0.2432238,-0.6883426,0.6818364,-0.0659805,0.2508782,-0.6839633,0.6812213,-0.0825791,0.2577757,-0.6801984,0.6808253,-0.0997453,0.2638439,-0.6759543,0.6812782,-0.1180075,0.2684613,-0.670718,0.682999,-0.1376063,0.2711835,-0.6641057,0.6861689,-0.1585591,0.2718331,-0.6558491,0.6895144,-0.179899,0.2717544,-0.6468043,0.6926511,-0.2010843,0.2720189,-0.6370284,0.6954296,-0.2217834,0.2728059,-0.626711,0.6974775,-0.2411531,0.274181,-0.6165997,0.6983668,-0.257738,0.2761249,-0.6079555,0.6969857,-0.2700715,0.2790106,-0.6028477,0.6946547,-0.2815953,0.2813911,-0.5991478,0.6916079,-0.292391,0.282862,-0.5968041,0.6878582,-0.3021205,0.2830913,-0.5961826,0.6832631,-0.3100006,0.2818688,-0.5979975,0.6771337,-0.3142683,0.2783322,-0.6043646,0.6705831,-0.3175722,0.274426,-0.6116833,-0.6634744,0.3188072,-0.2694984,0.6209141,-0.656119,0.3171922,-0.2628709,0.6322941,-0.6492895,0.31225,-0.253801,0.6453744,-0.6434174,0.3054357,-0.2429604,0.658554,-0.6377187,0.297867,-0.2321125,0.6713522,-0.6322951,0.2898159,-0.2214185,0.6835082,-0.6273163,0.2816181,-0.2109872,0.6947302,-0.6230318,0.27366,-0.2008718,0.7046929,-0.6213254,0.26513,-0.1914087,0.7120558,-0.6211871,0.256081,-0.1822685,0.7178631,-0.6222971,0.2468498,-0.1735691,0.7222778,-0.6244802,0.2376155,-0.1654415,0.7253912,-0.6277056,0.228392,-0.1580285,0.7272206,-0.6317356,0.2192761,-0.1509991,0.7280298,-0.6361116,0.2101772,-0.1441135,0.7282986,-0.6407815,0.2010964,-0.1374557,0.7280558,-0.6456783,0.1919181,-0.1312355,0.7273543,-0.6507087,0.182407,-0.1257824,0.7262814,-0.6555224,0.1717394,-0.1224223,0.7251267,-0.6600334,0.1606559,-0.119801,0.724012,-0.6644042,0.1488972,-0.1187149,0.7227056,-0.6688004,0.1363286,-0.1195527,0.7209908,-0.673409,0.1229432,-0.1223065,0.7186421,-0.6783045,0.1085084,-0.1267182,0.7155916,-0.6832644,0.093464,-0.132202,0.711995,-0.6879974,0.0784611,-0.1381761,0.7081037,-0.6922949,0.063906,-0.1444537,0.7041143,-0.6959576,0.0499381,-0.1512493,0.7001949,0.6985113,-0.0367258,0.1582213,-0.6969213,0.7000503,-0.0242908,0.1647666,-0.6944001,0.7006368,-0.0126369,0.1709238,-0.6926279,0.700324,-0.0019017,0.1765743,-0.6916388,0.6991734,0.0076411,0.1814531,-0.6915005,0.6972218,0.016222,0.1856246,-0.6922153,0.6947144,0.0242098,0.1894027,-0.6934785,0.6916708,0.0316029,0.1928018,-0.6952843,0.6881162,0.0382176,0.1957316,-0.6976565,0.6794845,0.0483509,0.1998855,-0.7042789],"spine2":[0.6317158,0.0732001,0.1413314,-0.7586846,0.6309993,0.0715077,0.1419748,-0.7593219,0.6282444,0.0647371,0.1446119,-0.7617122,0.6247886,0.0562491,0.1477825,-0.7646146,0.6214201,0.0476965,0.1508635,-0.7673345,0.6182672,0.0390547,0.1540926,-0.7697245,0.6159873,0.0302703,0.1574983,-0.7712572,0.613536,0.0216347,0.1609871,-0.7727798,0.6110656,0.013123,0.1646224,-0.7741615,-0.6090338,-0.0045425,-0.1685765,0.7750092,-0.6081854,0.0044885,-0.173136,0.7746705,-0.6083898,0.0140318,-0.1783101,0.7732209,-0.6092473,0.024564,-0.1838785,0.7709754,0.6111009,-0.0369042,0.1898453,-0.7675627,0.6136568,-0.0512575,0.1958494,-0.7631783,0.6160064,-0.0671159,0.2012776,-0.7586296,0.6174969,-0.0844237,0.2054168,-0.7545688,0.6190762,-0.1023098,0.208631,-0.750167,0.6213008,-0.12119,0.2102645,-0.7450417,0.6245324,-0.14125,0.2097887,-0.7389157,0.6289081,-0.1625029,0.2069003,-0.7316144,0.6333269,-0.1842679,0.2027632,-0.7237606,0.6376572,-0.2061167,0.198204,-0.7152792,0.6417527,-0.227499,0.1934891,-0.7063708,0.6453082,-0.2471915,0.188828,-0.6977232,0.648078,-0.2631914,0.1843915,-0.6904527,0.6490722,-0.2728748,0.1814624,-0.6865246,0.6490853,-0.2812229,0.178301,-0.6839669,0.6482919,-0.2886319,0.1744059,-0.6826359,0.6465533,-0.2949329,0.1695122,-0.6828243,0.6435202,-0.2993708,0.1636557,-0.685183,0.6380419,-0.3005034,0.1563986,-0.6914764,0.6319802,-0.3006321,0.1489701,-0.698591,-0.6249831,0.298836,-0.1409121,0.7072743,-0.6172368,0.2945718,-0.1315615,0.7175916,-0.6094731,0.2876557,-0.1200009,0.7289695,-0.6022695,0.2791676,-0.1069951,0.7401952,-0.5951162,0.2696271,-0.0945364,0.751133,-0.5881074,0.2593154,-0.0828344,0.7615928,-0.5814413,0.2486235,-0.0719794,0.7713179,-0.5754413,0.2380344,-0.0619406,0.779981,-0.5720861,0.2270716,-0.0532084,0.7863363,-0.5703351,0.2157525,-0.0451398,0.7912845,-0.5698744,0.2044381,-0.0378296,0.794995,-0.5705599,0.1933373,-0.0313897,0.7975568,-0.5724148,0.1824992,-0.0259463,0.7989757,-0.5750931,0.1719539,-0.0208387,0.7995408,-0.5781638,0.1616594,-0.0158521,0.7995884,-0.5816118,0.1516217,-0.0110213,0.7991352,-0.5854334,0.1417411,-0.0065146,0.7982072,-0.5896225,0.1318062,-0.0026283,0.7968472,-0.5941434,0.1209521,-0.000857,0.7952129,-0.5984326,0.109582,0.0002151,0.7936436,-0.602862,0.0974924,-0.000453,0.7918664,-0.6076836,0.0845485,-0.0034456,0.7896584,-0.6130499,0.0706953,-0.0088954,0.7868246,-0.6188965,0.05607,-0.0163302,0.7832986,-0.6248702,0.0414128,-0.0249649,0.7792297,-0.6305984,0.0275189,-0.0339913,0.7748761,-0.6358814,0.0147299,-0.0432248,0.7704346,0.6405824,-0.0028902,0.0531046,-0.7660455,0.6442641,0.0080971,0.0634468,-0.7621238,0.6468539,0.0183273,0.0734348,-0.7588488,0.6484431,0.0277775,0.0831381,-0.7561997,0.6490749,0.0363429,0.0924027,-0.7542166,0.6487726,0.0438337,0.1008594,-0.7529941,0.6474271,0.0503964,0.1087209,-0.7526474,0.6454962,0.056462,0.1161544,-0.7527648,0.642919,0.0619631,0.1232356,-0.7534114,0.6397164,0.0666966,0.1298735,-0.7546174,0.6317158,0.0732001,0.1413314,-0.7586846],"chest":[0.5741077,0.1127993,0.0884351,-0.8061364,0.5728935,0.1107024,0.0894542,-0.8071778,0.5681589,0.1021697,0.0935597,-0.8111741,0.5621753,0.0914559,0.0985771,-0.816013,0.5562609,0.0806561,0.1034912,-0.8205839,0.550632,0.0697441,0.108479,-0.8247257,0.5461316,0.0586286,0.1133906,-0.8279164,-0.5414103,-0.0476852,-0.1183914,0.8310141,-0.5366337,-0.0368887,-0.1235438,0.8339067,-0.532462,-0.0260371,-0.1288671,0.8361816,-0.5300275,-0.0147283,-0.1343499,0.8371404,-0.5291474,-0.0029032,-0.1400401,0.8368891,-0.529413,0.0098521,-0.1456758,0.8357053,-0.5314835,0.0243952,-0.1509497,0.8331532,-0.5350128,0.0409387,-0.1554504,0.8294097,-0.5387012,0.0589078,-0.1587694,0.8253019,-0.5416275,0.078139,-0.1602383,0.8214972,-0.5444596,0.0979731,-0.1606625,0.817406,0.5477291,-0.1186405,0.15936,-0.8127248,0.5517458,-0.1402615,0.1557345,-0.8072484,0.5565594,-0.1628899,0.1493805,-0.8008708,0.5611804,-0.1862291,0.1412936,-0.7939971,0.565656,-0.2099847,0.1320598,-0.7864477,0.5698806,-0.2333905,0.1219501,-0.7783914,0.5736963,-0.2548072,0.1112395,-0.770436,0.5771788,-0.2716251,0.1002083,-0.7635724,0.5798375,-0.2799233,0.0907606,-0.7597328,0.5815836,-0.2862921,0.081171,-0.7571054,0.5824342,-0.2914149,0.0709718,-0.7555202,0.5820848,-0.2952873,0.0600378,-0.7552339,0.5800567,-0.2972079,0.0486597,-0.7568579,0.5748277,-0.2958773,0.0369831,-0.7620118,0.5688747,-0.2934941,0.0253806,-0.7678533,-0.5617157,0.2892714,-0.0136304,0.7749915,-0.5534187,0.2829052,-0.0011576,0.7833843,-0.5445951,0.2745604,0.0130317,0.792378,-0.5360459,0.2649336,0.0282238,0.8010421,-0.5276337,0.2538511,0.0423855,0.8095466,-0.5194413,0.2415692,0.0552256,0.8177868,-0.5116512,0.2285345,0.066673,0.8255542,-0.5045831,0.215361,0.0768826,0.832529,-0.5003747,0.2018126,0.0851398,0.8376443,-0.4978562,0.1880024,0.0923907,0.8415808,-0.4966791,0.1742837,0.0985919,0.8445204,-0.4967181,0.1608901,0.1036332,0.8465493,-0.4980655,0.1479266,0.1073414,0.8476593,-0.500193,0.1354083,0.110745,0.8480608,-0.5027088,0.1233469,0.1140409,0.8479765,-0.5055997,0.1117805,0.1172454,0.8474241,-0.5089163,0.1006494,0.1202093,0.8464181,-0.5127559,0.0897861,0.1226225,0.8449755,-0.5174077,0.0783062,0.1229663,0.8432299,-0.5218859,0.0662121,0.1226741,0.8415474,-0.5268257,0.0533331,0.1204549,0.8397028,-0.5325952,0.0395017,0.115552,0.837514,-0.5393172,0.0245749,0.1077435,0.83482,-0.5467859,0.0091009,0.0975396,0.8315217,-0.5544483,-0.005854,0.0859108,0.8277513,-0.5618237,-0.0193529,0.0738194,0.8237295,0.5686998,0.0311402,-0.0614319,-0.8196566,0.5749861,0.0417113,-0.0481245,-0.8156808,0.580136,0.0515045,-0.033971,-0.8121795,0.5840632,0.0607155,-0.0199676,-0.8091879,0.5868613,0.0693015,-0.0060673,-0.8066934,0.5885593,0.0771782,0.0075331,-0.8047265,0.5891594,0.0842121,0.0203994,-0.8033576,0.588444,0.0903804,0.0327958,-0.802801,0.5870319,0.0962328,0.0447592,-0.8025768,0.5848127,0.101587,0.0564166,-0.8028022,0.5818223,0.1062201,0.0676873,-0.8035039,0.5741077,0.1127993,0.0884351,-0.8061364],"neck":[-0.4914855,0.0293072,-0.0478268,0.8690775,-0.490521,0.0296201,-0.0492263,0.8695335,-0.4869428,0.0310039,-0.0549678,0.871151,-0.4828468,0.032746,-0.0621536,0.8728824,-0.4792774,0.0345567,-0.0693778,0.8742344,-0.4761809,0.0365509,-0.0767966,0.8752246,-0.474339,0.0390806,-0.0841402,0.8754403,-0.4720964,0.041782,-0.0913036,0.8758098,-0.4694458,0.044737,-0.0983892,0.8763212,-0.4667252,0.0483167,-0.1054059,0.8767683,-0.4645873,0.0531921,-0.112269,0.8767696,-0.4631912,0.0591652,-0.1191222,0.876221,-0.4625021,0.0663331,-0.1259042,0.8751228,-0.4628359,0.0757587,-0.1322866,0.8732375,-0.4637627,0.0876976,-0.1378723,0.8707609,-0.4641555,0.1014631,-0.1422912,0.8683422,-0.4630633,0.1169812,-0.1449758,0.8665274,-0.4619649,0.1331667,-0.1468299,0.8644629,-0.4613531,0.1504135,-0.1472907,0.8618785,-0.4616243,0.1689246,-0.1458927,0.8585353,-0.463044,0.1887404,-0.1423601,0.8542253,-0.4647498,0.2094311,-0.1375365,0.8492526,-0.4668887,0.230589,-0.1319975,0.8434574,-0.46939,0.2513465,-0.1259391,0.8370408,-0.4721598,0.2699553,-0.1194492,0.8306149,-0.4753507,0.2836936,-0.1124973,0.825169,-0.4781533,0.288617,-0.1064061,0.8226466,-0.4801388,0.2917627,-0.0999768,0.8211857,-0.481236,0.2940641,-0.0927238,0.8205733,-0.481035,0.2957854,-0.0844037,0.8209703,-0.4789358,0.2965034,-0.0750864,0.8228416,-0.4731096,0.2955798,-0.0644451,0.8274338,-0.4664762,0.2938468,-0.053681,0.8325698,-0.458497,0.2907511,-0.0423912,0.8387177,-0.4493122,0.2861745,-0.029916,0.8457705,-0.4397339,0.2804237,-0.015278,0.8530904,-0.4308553,0.2735475,0.0004909,0.8599623,-0.4224701,0.2647772,0.0152279,0.8667065,-0.4147412,0.2542427,0.0285311,0.8732333,-0.4079697,0.2423792,0.0402018,0.8793161,-0.4026433,0.2299024,0.0502583,0.8845888,-0.4009119,0.216504,0.0580536,0.888271,-0.4009405,0.202694,0.0647789,0.8910475,-0.4021476,0.1888333,0.0704761,0.8931139,-0.4041881,0.1751997,0.0751355,0.8945902,-0.4069486,0.1619764,0.0786993,0.8955238,-0.4091158,0.149397,0.0827247,0.8963601,-0.4109512,0.1371676,0.0869622,0.897074,-0.4125792,0.1255018,0.0914375,0.8975895,-0.4142227,0.1145491,0.0959783,0.897823,-0.4161857,0.1043833,0.1002182,0.8976914,-0.4190276,0.0945355,0.1027153,0.897178,-0.4216541,0.0848196,0.1047529,0.8966829,-0.4246181,0.0754998,0.1052109,0.8960636,-0.4282936,0.0664345,0.103399,0.8952428,-0.4328855,0.057096,0.0990567,0.8941689,-0.438793,0.0469383,0.0925065,0.8925805,-0.4456927,0.0361825,0.0843223,0.890471,-0.4533087,0.0251751,0.0751505,0.8878231,-0.4614929,0.0137928,0.0650113,0.8846511,-0.4700947,0.0013731,0.0533144,0.8810032,-0.4784603,-0.0105862,0.04056,0.877108,-0.4855875,-0.0196608,0.0282249,0.8735111,-0.4913869,-0.0249714,0.0164126,0.8704286,-0.4957981,-0.0262606,0.0053658,0.8680241,-0.4988484,-0.0238784,-0.0045338,0.8663484,-0.5002795,-0.0178239,-0.0134145,0.8655766,-0.5006877,-0.0103032,-0.0215663,0.8652979,-0.4999197,-0.0016126,-0.0291148,0.8655808,-0.4980173,0.0081027,-0.0360395,0.86638,-0.4914855,0.0293072,-0.0478268,0.8690775],"head":[-0.1929624,-0.0005389,0.0465814,0.9800997,-0.1927949,-0.0010525,0.0466527,0.9801288,-0.1926043,-0.0025689,0.0469516,0.9801492,-0.1930678,-0.0037565,0.0476345,0.9800213,-0.1944032,-0.0040555,0.0486304,0.9797071,-0.196387,-0.0037307,0.0495553,0.9792663,-0.1994664,-0.0030496,0.0501374,0.9786164,-0.2016926,-0.0030706,0.0503423,0.9781494,-0.202932,-0.0041665,0.0498816,0.9779126,-0.2032601,-0.0067627,0.0482791,0.9779104,-0.2029339,-0.0113279,0.0448729,0.9780981,-0.2024997,-0.0172456,0.0400749,0.97831,-0.20235,-0.0232462,0.0345796,0.9784265,-0.2023864,-0.0291553,0.0280703,0.9784691,-0.2021379,-0.0349194,0.0206507,0.9785165,-0.200781,-0.0407427,0.0127553,0.9787054,-0.1974851,-0.0464173,0.0044769,0.9791961,-0.1943819,-0.0513975,-0.003634,0.9795717,-0.1920137,-0.054947,-0.0112773,0.9797879,-0.1909431,-0.0563429,-0.0181717,0.9798143,-0.1917429,-0.0548805,-0.0241486,0.979612,-0.193813,-0.0509077,-0.0295689,0.9792704,-0.1973101,-0.0449721,-0.0345469,0.9786995,-0.2023567,-0.0381653,-0.0391367,0.977785,-0.2089701,-0.0325005,-0.0431382,0.9764294,-0.2172549,-0.0309956,-0.046018,0.9745368,-0.2262148,-0.0379587,-0.0481802,0.9721444,-0.2344343,-0.0455209,-0.0497927,0.9697882,-0.2414836,-0.0521336,-0.0504277,0.9676904,-0.2465982,-0.0566436,-0.0496699,0.9661851,-0.248842,-0.0583058,-0.0471381,0.9656377,-0.245867,-0.0555472,-0.042214,0.9667895,-0.2419359,-0.0527337,-0.0369622,0.9681529,-0.2363478,-0.0494532,-0.0308118,0.96992,-0.2290367,-0.0449657,-0.0228856,0.9721093,-0.2205462,-0.0382222,-0.0119461,0.9745541,-0.2118842,-0.0304888,0.0008066,0.9768188,-0.2033203,-0.02473,0.0130463,0.978713,-0.1950564,-0.0208726,0.0241739,0.9802719,-0.1875688,-0.0181642,0.0338523,0.9814999,-0.1816763,-0.0152222,0.0420404,0.9823414,-0.1793121,-0.0119668,0.0490689,0.9824949,-0.1785558,-0.0088417,0.0559269,0.9822992,-0.1787827,-0.0057807,0.0627003,0.9818717,-0.1796313,-0.0028179,0.0695277,0.9812699,-0.1809996,-0.0000992,0.076587,0.9804966,-0.1807084,0.002231,0.0869286,0.9796851,-0.1794515,0.0047131,0.0999311,0.9786668,-0.1776468,0.0076443,0.1149033,0.9773333,-0.1757844,0.0111979,0.1307752,0.9756394,-0.1744021,0.0154158,0.1461059,0.9736526,-0.1743707,0.019579,0.1578808,0.9717434,-0.174198,0.0238369,0.1677164,0.9700299,-0.1741658,0.0283009,0.173522,0.9688939,-0.1744991,0.0326898,0.1746451,0.968494,-0.1754476,0.0363563,0.1718702,0.9686883,-0.178154,0.0385877,0.1674784,0.9688773,-0.1829484,0.0395409,0.163257,0.9686659,-0.1900867,0.040139,0.1605958,0.9677112,-0.1998363,0.0407955,0.1599419,0.9658259,-0.2123144,0.0413165,0.1608349,0.9629889,-0.2256175,0.0406849,0.1612573,0.9599154,-0.2360483,0.039157,0.1591441,0.957821,-0.2425574,0.0363966,0.1536645,0.9571982,-0.2448428,0.0323744,0.1449602,0.9581182,-0.2434297,0.0274641,0.1340581,0.9602167,-0.2382007,0.0215925,0.1206448,0.9634516,-0.2313186,0.015476,0.1063294,0.9669262,-0.2229679,0.0095642,0.0913086,0.970493,-0.2134789,0.0044804,0.0759302,0.9739822,-0.1929624,-0.0005389,0.0465814,0.9800997],"leftShoulder":[-0.4937361,-0.3256809,-0.1861733,0.7845356,-0.4945905,-0.3196347,-0.1858753,0.7865521,-0.4975651,-0.2959878,-0.184743,0.7941601,-0.5000548,-0.2676439,-0.1834815,0.8028988,-0.5013252,-0.2410581,-0.1826397,0.8106829,-0.5017851,-0.216074,-0.182348,0.8174797,-0.5022865,-0.1932969,-0.1826797,0.8227835,-0.5020272,-0.1711762,-0.1831749,0.8277164,-0.5011849,-0.1497521,-0.1839212,0.8322025,-0.5004314,-0.1291701,-0.1850339,0.8358504,-0.5009303,-0.1096462,-0.1866989,0.8379678,-0.5023059,-0.0926217,-0.1899537,0.8384674,-0.5044973,-0.0765065,-0.1939756,0.837856,-0.5082443,-0.0612112,-0.198847,0.8357037,-0.5133857,-0.0459594,-0.2039188,0.83231,-0.5187889,-0.0294141,-0.2079309,0.8287084,-0.5235793,-0.0101757,-0.2094744,0.8257612,-0.5283172,0.0105141,-0.2095613,0.8227116,-0.5334917,0.0328533,-0.2075135,0.8192957,-0.5393445,0.058327,-0.2020339,0.8154065,-0.5456774,0.089767,-0.1913312,0.8109072,-0.5513241,0.124132,-0.1778689,0.8056027,-0.556879,0.1519298,-0.166853,0.7993517,-0.5623013,0.1763179,-0.1565095,0.7926122,-0.5672498,0.1979946,-0.1459024,0.7859633,-0.5715686,0.2150816,-0.1349116,0.7802872,-0.5745442,0.2235865,-0.1254455,0.7772847,-0.5764958,0.2302657,-0.1160284,0.7753501,-0.5778214,0.2355107,-0.1055289,0.7742873,-0.5789958,0.2346682,-0.0947422,0.7750604,-0.580478,0.218011,-0.0865319,0.779762,-0.5777439,0.1989329,-0.0764306,0.7879061,-0.5728794,0.1872362,-0.0671412,0.7951376,-0.5681694,0.176373,-0.0687583,0.8008423,-0.5636316,0.1632651,-0.0839789,0.8053642,-0.5572114,0.14805,-0.1078451,0.8099173,-0.5454123,0.1135009,-0.1450335,0.8176847,-0.5301186,0.0830993,-0.1657517,0.8274027,-0.5130187,0.0544749,-0.177694,0.838015,-0.4949724,0.0256293,-0.1859256,0.8483968,-0.4764451,-0.0051247,-0.1929056,0.8577652,-0.4598647,-0.0391559,-0.1974579,0.8648709,-0.4453136,-0.070566,-0.1978124,0.8703944,-0.4324855,-0.1009715,-0.1954316,0.8743955,-0.4212944,-0.131142,-0.1912495,0.8767762,-0.4120048,-0.1610511,-0.1856352,0.8774133,-0.4045386,-0.1901431,-0.1772349,0.8768021,-0.3986045,-0.2168373,-0.166379,0.8754508,-0.394466,-0.2406291,-0.1530332,0.8735417,-0.3918823,-0.2624298,-0.1381421,0.870905,-0.3900007,-0.2845303,-0.1235999,0.8669862,-0.3888912,-0.3081805,-0.1114633,0.8610252,-0.3869062,-0.3331517,-0.1013759,0.8538363,-0.3848603,-0.359593,-0.0942807,0.8447998,-0.3832523,-0.3874837,-0.0906905,0.8335162,-0.3822486,-0.4166379,-0.0907008,0.8198001,-0.3819892,-0.4449819,-0.0945404,0.8044485,-0.3830488,-0.4701008,-0.100142,0.7888285,-0.3854979,-0.4898121,-0.1070984,0.7746001,-0.3901606,-0.5023414,-0.1146728,0.7630714,-0.3984792,-0.5062071,-0.1218434,0.7550648,-0.4086641,-0.5061894,-0.1277374,0.7486315,-0.4285098,-0.4886522,-0.1238405,0.7498412,-0.4483735,-0.4659209,-0.1199314,0.7533229,-0.4636005,-0.4447434,-0.1204695,0.7568124,-0.4742406,-0.4254817,-0.1250002,0.7605499,-0.4807099,-0.4082154,-0.1336843,0.7644649,-0.4853524,-0.3917406,-0.1436971,0.7683251,-0.4885711,-0.3755808,-0.1546237,0.7722233,-0.4907682,-0.3593055,-0.1658628,0.7762317,-0.4937361,-0.3256809,-0.1861733,0.7845356],"leftArm":[-0.0317887,-0.3584115,-0.5256152,0.7708822,-0.0345468,-0.3580153,-0.5226622,0.7729527,-0.0455503,-0.3561955,-0.5104963,0.7813088,-0.0585575,-0.353161,-0.4945805,0.7919839,-0.0710107,-0.3493235,-0.4780742,0.8027301,-0.0830253,-0.3445334,-0.461311,0.8133853,-0.0957274,-0.3384792,-0.444928,0.8235941,-0.1075192,-0.3312754,-0.427885,0.8340328,-0.1184392,-0.3230698,-0.4104255,0.8444815,-0.1291464,-0.3139675,-0.393262,0.8544534,-0.1409947,-0.3039477,-0.3776248,0.8632125,-0.1541518,-0.2936939,-0.3629606,0.8707702,-0.1666977,-0.2827156,-0.3482704,0.8780612,-0.1785092,-0.2706105,-0.3333632,0.8853098,-0.1886453,-0.2575137,-0.3177047,0.8928401,-0.1952076,-0.2443712,-0.3004142,0.9010705,-0.1959141,-0.2332852,-0.2812626,0.9099929,-0.1942462,-0.2232101,-0.2624469,0.9184592,-0.1922649,-0.213739,-0.2443438,0.9260917,-0.1913587,-0.2043755,-0.2274617,0.9326702,-0.1921217,-0.1945816,-0.2126356,0.9380903,-0.192398,-0.1849341,-0.1987826,0.94301,-0.1952424,-0.1755804,-0.1843979,0.9471269,-0.200545,-0.1667916,-0.1701294,0.9502727,-0.2084713,-0.1597193,-0.1558195,0.9522341,-0.2197416,-0.1564894,-0.140219,0.9526612,-0.2301153,-0.1594359,-0.1208607,0.9523759,-0.2376003,-0.1629302,-0.0994396,0.9524241,-0.251011,-0.1750043,-0.0799929,0.9486665,-0.2809225,-0.2027481,-0.0647241,0.9358347,-0.3387498,-0.2520718,-0.0558368,0.90476,-0.4060258,-0.2945806,-0.0447565,0.8639226,-0.4498498,-0.3182197,-0.0265563,0.834066,-0.4794264,-0.3276552,-0.011919,0.8140334,-0.500997,-0.3252347,-0.0100662,0.8019495,-0.5173489,-0.3127986,-0.0274692,0.7960858,-0.5032582,-0.3003962,-0.0581436,0.8081539,-0.4845303,-0.286362,-0.0880857,0.8218687,-0.4596664,-0.2718264,-0.1186851,0.8370968,-0.4271033,-0.2593627,-0.1509185,0.852958,-0.3856112,-0.252717,-0.185323,0.8678096,-0.3371185,-0.2662883,-0.2271517,0.8739815,-0.2873843,-0.2846919,-0.2701217,0.8737248,-0.2398835,-0.3035711,-0.310581,0.8682396,-0.1965931,-0.3207285,-0.3464578,0.8593319,-0.1576879,-0.3356929,-0.3770778,0.8486796,-0.1243897,-0.3464213,-0.3979538,0.8403286,-0.0930542,-0.3524396,-0.4131197,0.8345414,-0.0628762,-0.3535993,-0.4233128,0.8317574,-0.0334857,-0.3502386,-0.4292648,0.8318313,-0.0047812,-0.3432488,-0.4316087,0.834189,0.0236351,-0.3347794,-0.430823,0.8377086,0.0526872,-0.3262034,-0.427598,0.8414127,0.0807506,-0.3189683,-0.4240551,0.843751,0.1069251,-0.3143728,-0.4217622,0.843714,0.1309549,-0.3134701,-0.4216897,0.8406932,0.1521055,-0.3189565,-0.4243429,0.8337049,0.1709212,-0.3291052,-0.4274247,0.8244901,0.1867312,-0.3440207,-0.4287458,0.8142225,0.1959351,-0.3629125,-0.4290512,0.8036286,0.1924609,-0.3838909,-0.432017,0.7930624,0.1556358,-0.3978447,-0.4521067,0.7830049,0.1231286,-0.4064412,-0.4709778,0.7731913,0.0949246,-0.4113838,-0.4871427,0.7644898,0.070856,-0.413072,-0.5003625,0.7576202,0.049969,-0.4115621,-0.5106961,0.7531993,0.0322766,-0.4065203,-0.5178035,0.7520498,0.0163556,-0.3994866,-0.5227819,0.7528891,0.0021757,-0.3906877,-0.5259994,0.7554356,-0.0103659,-0.38042,-0.5276153,0.7594704,-0.0317887,-0.3584115,-0.5256152,0.7708822],"leftForeArm":[0.1618325,-0.3901302,-0.3778595,0.8239119,0.161398,-0.3893647,-0.3737881,0.8262132,0.1590825,-0.3855726,-0.357639,0.8355362,0.1559126,-0.3792126,-0.3378324,0.8472062,0.151862,-0.3711786,-0.3188341,0.8587836,0.1470955,-0.3616137,-0.3007724,0.8701347,0.1406367,-0.3504549,-0.2844065,0.8812012,0.1329482,-0.3375158,-0.2690993,0.8921846,0.1240035,-0.3231821,-0.2548929,0.9028876,0.1141795,-0.3080096,-0.2418095,0.9130286,0.1042643,-0.2925523,-0.2300194,0.9222978,0.0922087,-0.2770917,-0.2197694,0.9308164,0.0800651,-0.2609879,-0.2099408,0.9388289,0.0686935,-0.243846,-0.2000504,0.9464672,0.0581441,-0.2256627,-0.1898197,0.9537631,0.0476972,-0.2072228,-0.1789434,0.9606055,0.0364696,-0.1907962,-0.1674199,0.9665596,0.0248809,-0.1760498,-0.1563057,0.971574,0.0147478,-0.1625623,-0.1448399,0.9758982,0.0078685,-0.1496884,-0.1327821,0.9797451,0.0061122,-0.1367133,-0.1205156,0.9832335,0.0033103,-0.1242639,-0.1095896,0.9861732,-0.0016234,-0.1119361,-0.098129,0.9888571,-0.0072943,-0.1000033,-0.0863252,0.9912084,-0.013871,-0.089474,-0.0738639,0.9931496,-0.0234273,-0.082186,-0.059569,0.9945593,-0.040623,-0.0812322,-0.0424537,0.9949617,-0.0602531,-0.0816551,-0.0242797,0.9945414,-0.073547,-0.0887815,-0.0036344,0.9933255,-0.0745495,-0.1049332,0.0229667,0.9914151,-0.0609628,-0.1292981,0.0614883,0.9878182,-0.0615907,-0.1413309,0.1019646,0.9827692,-0.0747844,-0.1411141,0.1341329,0.9780094,-0.0810584,-0.1315581,0.1558395,0.9756209,-0.0685881,-0.1144194,0.163914,0.977413,-0.0317446,-0.093999,0.1550557,0.9829111,-0.0257023,0.089334,-0.1367479,-0.9862347,-0.0822808,0.0871485,-0.117794,-0.9857787,-0.1378622,0.0890346,-0.0975917,-0.9816021,-0.1918539,0.097438,-0.0767026,-0.9735577,-0.242941,0.1153205,-0.0564832,-0.9615043,-0.2797376,0.1577928,-0.0379849,-0.9462587,-0.3070743,0.2061939,-0.0167654,-0.9289286,-0.3245142,0.2536464,0.0079882,-0.9112026,-0.3327416,0.2961173,0.0361631,-0.8945892,-0.3333742,0.3321461,0.0670549,-0.8797979,-0.3267072,0.3567883,0.0976568,-0.8697285,-0.318331,0.372126,0.1287779,-0.8623247,-0.3089208,0.3784112,0.160053,-0.8577622,0.2980564,-0.3763331,-0.191267,0.8561266,0.2844845,-0.3670196,-0.222279,0.8572965,0.2644804,-0.3523069,-0.2542144,0.8609907,0.240458,-0.3343329,-0.2850403,0.8655366,0.2120064,-0.3154079,-0.3154328,0.8695247,0.1795956,-0.2973305,-0.3460683,0.871537,0.1444273,-0.2813207,-0.3775272,0.870329,0.1079038,-0.2701716,-0.4101139,0.8643903,0.0725758,-0.2624059,-0.441602,0.8549056,0.039938,-0.259281,-0.4696187,0.8429926,0.0132964,-0.2630922,-0.4921848,0.8296745,-0.0021439,-0.2768112,-0.5070225,0.8162715,0.0116983,-0.3068775,-0.5041747,0.8071538,0.0335459,-0.3353107,-0.4943393,0.8012928,0.0549974,-0.3596579,-0.4816169,0.7972871,0.0729032,-0.378299,-0.468757,0.7948848,0.0882858,-0.3915377,-0.4556427,0.7945399,0.101516,-0.3986984,-0.4426566,0.7967367,0.1140081,-0.4023132,-0.429461,0.8004433,0.1261582,-0.4027045,-0.4164561,0.805281,0.1383176,-0.4003245,-0.4036671,0.8109633,0.1618325,-0.3901302,-0.3778595,0.8239119],"leftHand":[0.0852271,-0.1956125,-0.4858208,0.8476144,0.086318,-0.1924524,-0.4843168,0.8490869,0.0904913,-0.1793814,-0.4783797,0.8548605,0.0962199,-0.1620701,-0.4711,0.8617075,0.1024364,-0.1441517,-0.4644557,0.8677603,0.1091413,-0.1258604,-0.4587583,0.8728047,0.1159075,-0.107982,-0.4548582,0.8763614,0.1230898,-0.0893876,-0.4516131,0.8791498,0.1305893,-0.0703919,-0.4491445,0.8810565,0.1382438,-0.0514518,-0.4478225,0.8818709,0.1457962,-0.0330192,-0.4483324,0.8812782,-0.1526341,0.0151836,0.4507046,-0.8793962,-0.1595224,-0.0026439,0.4546153,-0.8762822,-0.1664466,-0.0205489,0.4606975,-0.8715682,-0.1731073,-0.0386237,0.468706,-0.8653651,-0.1791613,-0.0566582,0.4772912,-0.8584196,-0.1838459,-0.073902,0.4851107,-0.8517081,-0.1875558,-0.0901919,0.4926945,-0.8449499,-0.1902819,-0.1050556,0.5004168,-0.8380568,-0.1922607,-0.1182306,0.5084163,-0.8310056,-0.1941831,-0.1295506,0.5166688,-0.8237493,-0.1951163,-0.1389593,0.5247567,-0.8168539,-0.1944924,-0.1480399,0.5335439,-0.8096838,-0.1927872,-0.1564794,0.5424401,-0.8025622,-0.1896703,-0.1642207,0.5506464,-0.796144,-0.1837341,-0.1711728,0.5569973,-0.7916411,-0.173049,-0.1779189,0.5600942,-0.7903755,-0.1610917,-0.1850125,0.562254,-0.7897406,-0.1474093,-0.1811246,0.5532293,-0.799626,-0.1299941,-0.1547667,0.5196615,-0.8301209,-0.1058313,-0.0904194,0.4433503,-0.8854742,0.0816274,0.020186,-0.3479253,0.9337438,0.0631399,-0.0191247,-0.2857118,0.956042,0.0451532,-0.0489234,-0.2471892,0.9666774,0.0243241,-0.0901536,-0.2170281,0.971689,-0.0000924,-0.1624354,-0.1751429,0.9710508,-0.01345,-0.2281922,-0.1430849,0.9629507,-0.0125838,-0.2702884,-0.1319014,0.9536183,-0.0036845,-0.2971702,-0.1342773,0.9453285,0.00936,-0.3141207,-0.1445767,0.9382634,0.0247557,-0.3230782,-0.1587519,0.9326336,0.0370526,-0.3249809,-0.1726412,0.9290907,0.0477027,-0.3230062,-0.1888572,0.9261341,0.0574028,-0.3162465,-0.2087621,0.9236403,0.0666542,-0.3050661,-0.2325211,0.9211003,0.075356,-0.2909282,-0.2593011,0.9178481,0.0810603,-0.2788254,-0.2866533,0.9129707,0.0865175,-0.2693243,-0.312484,0.9068257,0.090507,-0.2638353,-0.3358718,0.8996608,0.0917949,-0.2626409,-0.3564373,0.8919338,0.0896864,-0.2650122,-0.3741783,0.8841467,0.0843153,-0.2705479,-0.3903632,0.8759631,0.0773986,-0.2756703,-0.4049145,0.868366,0.0687454,-0.2803198,-0.4183154,0.8612242,0.0590142,-0.2842479,-0.4310695,0.8543416,0.049514,-0.2870304,-0.4437055,0.8475183,0.0431325,-0.2875149,-0.4570289,0.8405946,0.0407156,-0.2845939,-0.469651,0.8347314,0.0442648,-0.2766319,-0.4804638,0.8310655,0.0536021,-0.2644286,-0.4890168,0.829498,0.0659782,-0.2506445,-0.4943625,0.8297168,0.0688313,-0.2478278,-0.4968847,0.828824,0.0657048,-0.2509616,-0.4963061,0.8284814,0.0608185,-0.2545691,-0.4946206,0.8287618,0.0572396,-0.2550242,-0.4929928,0.829846,0.0556852,-0.25201,-0.4913467,0.8318465,0.0570292,-0.2457414,-0.490278,0.834258,0.0599551,-0.2378659,-0.4891954,0.8369666,0.064509,-0.22853,-0.4883311,0.8397294,0.0705598,-0.2180393,-0.4876647,0.8424151,0.0852271,-0.1956125,-0.4858208,0.8476144],"rightShoulder":[-0.548461,0.0534531,-0.0469264,0.8331454,-0.5470224,0.0531322,-0.0479815,0.8340511,-0.5422195,0.0529195,-0.0516325,0.8369777,-0.536608,0.0537996,-0.0561703,0.8402395,-0.5306965,0.0551712,-0.0617959,0.8435038,-0.5229268,0.0548145,-0.0708585,0.8476568,-0.5145638,0.0535634,-0.0825634,0.8517854,-0.5065823,0.055003,-0.0932572,0.8553667,-0.4999801,0.0612676,-0.1013262,0.8579039,-0.495749,0.0734568,-0.1057462,0.8588683,-0.4948403,0.0916792,-0.1061727,0.8575869,-0.4964269,0.1170024,-0.1017928,0.854113,-0.5007093,0.1589128,-0.089193,0.846216,-0.5054344,0.2095143,-0.0728689,0.8338644,-0.5088254,0.2632999,-0.0556975,0.817721,-0.5095397,0.3169377,-0.0387153,0.7990124,-0.5077699,0.3581155,-0.0278966,0.7830356,-0.5051231,0.3933816,-0.0197123,0.7679278,-0.5021155,0.4293817,-0.0102084,0.7506045,-0.4986974,0.4685444,0.0025479,0.7292191,-0.4948285,0.5094175,0.0182958,0.7037783,-0.4910808,0.5438629,0.0323046,0.6797126,-0.4880303,0.5715982,0.0438644,0.6581625,-0.4858935,0.5937682,0.0534803,0.6391297,-0.484855,0.6112143,0.0622344,0.6224625,-0.4853236,0.6244301,0.0716612,0.6077933,-0.4912009,0.6197712,0.0777126,0.6070964,-0.5027673,0.5950842,0.0716266,0.622872,-0.5146281,0.5633381,0.0630928,0.6432942,-0.5240438,0.5318136,0.0571882,0.6627834,-0.5304856,0.5013621,0.0543152,0.6813743,-0.5325647,0.4721501,0.0548855,0.7003119,-0.5328492,0.44188,0.0547412,0.7195952,-0.5306695,0.4119937,0.0552528,0.7386462,-0.5261086,0.3837829,0.057691,0.7566982,-0.5199599,0.3583069,0.0633585,0.7728153,-0.5129922,0.3376442,0.0715609,0.7859481,-0.5055054,0.3182508,0.0791692,0.7980683,-0.4977598,0.2997827,0.0856924,0.8093345,-0.4900352,0.2823296,0.0909716,0.8196827,-0.4827117,0.2663949,0.0951973,0.8288309,-0.4780871,0.2523759,0.097849,0.8355625,-0.4750644,0.23934,0.0997586,0.8408795,-0.4733493,0.2275278,0.100943,0.8449746,-0.4728505,0.2170499,0.1012969,0.8479627,-0.4736692,0.2078734,0.1005999,0.8498858,-0.4754443,0.2002407,0.1000996,0.8507858,-0.4777112,0.1935722,0.0998046,0.8510939,-0.4805106,0.187822,0.0997004,0.8508186,-0.4838868,0.1828289,0.0996235,0.8500014,-0.4878658,0.1783071,0.0992709,0.8487278,-0.4927219,0.173185,0.0973163,0.8472081,-0.4974285,0.1673486,0.0950884,0.8458827,-0.502495,0.1604728,0.0912404,0.8446434,-0.5081915,0.152265,0.0849949,0.8434054,-0.5145934,0.1424872,0.0761477,0.8420763,-0.5214567,0.1312302,0.0654772,0.8405797,-0.5282872,0.1196815,0.0537487,0.8388683,-0.5344326,0.1088617,0.0409692,0.8371693,-0.5397075,0.0992072,0.0273913,0.8355378,-0.5443301,0.0905578,0.0135082,0.8338595,-0.5485502,0.0829244,0.0018261,0.8319933,-0.5520404,0.076101,-0.008074,0.830298,-0.5548452,0.0701415,-0.0164693,0.8288279,-0.5569497,0.0651322,-0.0233874,0.827658,-0.5583158,0.0612019,-0.0286161,0.826873,-0.5585825,0.0585225,-0.0323844,0.8267478,-0.5582795,0.0561765,-0.035638,0.8269813,-0.5571561,0.0543686,-0.0385758,0.8277276,-0.5551299,0.0532938,-0.0412893,0.829027,-0.548461,0.0534531,-0.0469264,0.8331454],"rightArm":[0.1141872,-0.4057679,0.0591058,-0.9048868,0.1180749,-0.4092045,0.0662787,-0.9023398,0.1384851,-0.4206496,0.0926608,-0.8917902,0.1676014,-0.4324937,0.1203688,-0.8777074,0.1999546,-0.4427952,0.1425858,-0.862334,0.2317561,-0.4550964,0.1636625,-0.8440325,0.2649402,-0.4668705,0.1843741,-0.8233133,0.2923822,-0.477514,0.1996236,-0.8041414,0.3097245,-0.4884368,0.2053796,-0.7895058,0.3137117,-0.5024229,0.1972334,-0.7811883,0.3012172,-0.5233914,0.1705993,-0.7786049,0.2638498,-0.5581861,0.105508,-0.7795381,0.2205444,-0.591217,0.0260613,-0.7753344,0.1782728,-0.6151367,-0.0608536,-0.7655863,0.1409031,-0.6256696,-0.1479801,-0.7528518,0.1094803,-0.6220734,-0.2263556,-0.7414862,0.0780644,-0.6157385,-0.2865227,-0.7298471,0.0410715,-0.6100226,-0.332444,-0.7180993,0.0047422,-0.6046298,-0.3664568,-0.7071843,-0.0284866,-0.598822,-0.3919024,-0.6978633,-0.0589769,-0.5911607,-0.4130425,-0.6902512,-0.0943297,-0.580829,-0.4298263,-0.6848276,-0.1325718,-0.5691356,-0.4448523,-0.6786868,-0.1684389,-0.5570984,-0.4584303,-0.6716483,-0.1941211,-0.5453183,-0.4700062,-0.6663625,-0.1988347,-0.5341834,-0.4780703,-0.6682527,-0.1740934,-0.5189462,-0.4784673,-0.6866261,-0.1499353,-0.5055449,-0.4735446,-0.705478,-0.1277906,-0.4918417,-0.4658603,-0.7243863,-0.1088454,-0.4764258,-0.4566475,-0.7434005,-0.0945069,-0.4581807,-0.4455524,-0.7632967,-0.0886708,-0.438582,-0.4300056,-0.7841419,-0.086648,-0.4195835,-0.4130329,-0.8036452,-0.0897483,-0.4017607,-0.3943045,-0.8216189,-0.098162,-0.386338,-0.3742469,-0.8372851,-0.1108483,-0.3750824,-0.3541265,-0.8494824,-0.1228305,-0.3713998,-0.3359474,-0.8568047,-0.1356352,-0.3700262,-0.3189538,-0.8619467,-0.1488811,-0.3701731,-0.3031996,-0.8653764,-0.1618458,-0.3716409,-0.2887265,-0.8673673,-0.1733038,-0.3748306,-0.2755485,-0.8680673,-0.1820362,-0.3805984,-0.2642719,-0.8672762,-0.1892732,-0.3878123,-0.254015,-0.8655944,-0.1946186,-0.3964384,-0.2443692,-0.8632751,-0.1977513,-0.4063231,-0.2351503,-0.8605233,-0.198381,-0.4172211,-0.226438,-0.8574948,-0.1960163,-0.4298197,-0.2185195,-0.8538629,-0.1921274,-0.4433623,-0.2103924,-0.8498541,-0.1866516,-0.4576781,-0.2019554,-0.8455211,-0.1793961,-0.4724615,-0.1931654,-0.841002,-0.1700673,-0.4872719,-0.1840519,-0.8365214,-0.1594755,-0.5002452,-0.1744904,-0.8329919,-0.1499089,-0.511606,-0.1651178,-0.8297727,-0.1400278,-0.5206311,-0.1558433,-0.8276765,-0.128971,-0.5268357,-0.1467785,-0.8272041,-0.1162437,-0.5299981,-0.1382208,-0.8285435,-0.1020623,-0.5296804,-0.1302594,-0.8318981,-0.0867177,-0.5274267,-0.1222895,-0.8362693,-0.0699237,-0.5257372,-0.1134254,-0.8401463,-0.0516058,-0.5250928,-0.103297,-0.843175,-0.0318537,-0.5239023,-0.0921588,-0.8461787,-0.0133913,-0.5186295,-0.0810951,-0.8510392,0.0038256,-0.5113774,-0.0698049,-0.8565079,0.0200618,-0.5023352,-0.0581913,-0.8624794,0.0353536,-0.4918186,-0.0460932,-0.8687577,0.0495351,-0.4802692,-0.0332845,-0.8750885,0.0621152,-0.4674255,-0.0196897,-0.8816277,0.0740697,-0.4538718,-0.0056381,-0.8879652,0.0851764,-0.4401966,0.0089705,-0.8938073,0.0955224,-0.4270947,0.0244022,-0.898816,0.1141872,-0.4057679,0.0591058,-0.9048868],"rightForeArm":[-0.1968847,-0.3678219,-0.0420358,-0.9078416,-0.1974324,-0.3689368,-0.0347848,-0.907577,-0.1992412,-0.3709687,-0.0094865,-0.9069703,-0.2045783,-0.3700282,0.0153674,-0.9060853,-0.2156879,-0.3656633,0.0331517,-0.9048039,-0.2347106,-0.3591572,0.0499713,-0.9018979,-0.2562537,-0.3491811,0.0660429,-0.8989132,0.2813429,0.3376756,-0.0772127,0.8949076,-0.3135333,-0.3272182,0.081012,-0.8877286,-0.3564045,-0.3218196,0.0762626,-0.8738375,-0.4134583,-0.3262016,0.0638,-0.8476876,-0.4871667,-0.3573433,0.0379448,-0.7959489,-0.5481407,-0.4016175,0.0082393,-0.7336057,-0.5882823,-0.4530575,-0.0291666,-0.6691877,-0.6042706,-0.5048279,-0.0774871,-0.6115567,-0.5963406,-0.5488342,-0.1360835,-0.569772,-0.5629182,-0.5857857,-0.194792,-0.5495765,-0.5217441,-0.6108484,-0.2502109,-0.540409,-0.4742974,-0.625309,-0.3012097,-0.5415749,-0.4226212,-0.6304903,-0.3475132,-0.5505524,-0.3690134,-0.6269394,-0.3905699,-0.56412,-0.3140241,-0.6129933,-0.4303329,-0.5834738,-0.2611269,-0.5918253,-0.4654593,-0.6040722,-0.2130886,-0.5670318,-0.4941283,-0.6236228,-0.1756733,-0.5434082,-0.5144982,-0.639639,-0.1569313,-0.5274684,-0.5246847,-0.6495041,-0.1723548,-0.5216465,-0.5206248,-0.6535508,-0.1964074,-0.5187075,-0.5119447,-0.6559568,-0.2217086,-0.5141718,-0.501959,-0.6591736,-0.2447849,-0.5057625,-0.4925134,-0.6646166,-0.2666328,-0.4921956,-0.48364,-0.6728616,-0.2860294,-0.4735677,-0.4729522,-0.6857384,-0.3037178,-0.4535282,-0.4620303,-0.6989962,-0.3189803,-0.432509,-0.4499724,-0.7132408,-0.3308119,-0.4121041,-0.4361917,-0.7283341,-0.3377885,-0.394987,-0.4207328,-0.743551,-0.3389779,-0.3862316,-0.4044029,-0.7565563,-0.33894,-0.3803799,-0.3880745,-0.7680033,-0.3378945,-0.376764,-0.3721207,-0.7780761,-0.3357864,-0.3752769,-0.3567898,-0.7868391,-0.3321215,-0.3763981,-0.3422187,-0.794296,-0.3254585,-0.381153,-0.3289592,-0.8003655,-0.3173379,-0.3880076,-0.3165209,-0.805333,-0.3084503,-0.3967421,-0.3047106,-0.809077,-0.2991369,-0.4070323,-0.2934866,-0.8116079,-0.2893023,-0.4185208,-0.282978,-0.8130609,-0.2778397,-0.4319976,-0.2733482,-0.8133043,-0.2662921,-0.4464079,-0.2636866,-0.8125749,-0.2548345,-0.4615505,-0.2539073,-0.8109017,-0.2438821,-0.4770437,-0.2439534,-0.8083548,-0.2341217,-0.4923162,-0.2337889,-0.8050804,-0.2267237,-0.5054099,-0.2233644,-0.8020384,-0.219635,-0.5168839,-0.2131854,-0.7994645,-0.2140299,-0.5258059,-0.2032432,-0.7977541,-0.2105934,-0.5315381,-0.1936547,-0.797255,-0.2093954,-0.5337908,-0.1847259,-0.7981838,-0.210243,-0.5321273,-0.1767352,-0.8008764,-0.2118851,-0.5282559,-0.1691258,-0.8046408,-0.2136856,-0.5246522,-0.1607203,-0.8082373,-0.215876,-0.5216687,-0.1510574,-0.8114437,-0.2194915,-0.5174983,-0.1407204,-0.8149949,-0.2221414,-0.5092877,-0.1316191,-0.820948,-0.2239629,-0.4991106,-0.1231561,-0.8279866,-0.2249678,-0.4871479,-0.1152293,-0.8359418,-0.2250933,-0.4737141,-0.1076132,-0.8445989,-0.2241791,-0.4592596,-0.0999343,-0.8537198,-0.2217987,-0.4436519,-0.092048,-0.8634266,-0.218189,-0.4274552,-0.0840697,-0.8732742,-0.2137609,-0.4111602,-0.0756652,-0.882909,-0.2087338,-0.3953294,-0.0663074,-0.8920472,-0.1968847,-0.3678219,-0.0420358,-0.9078416],"rightHand":[0.1057565,0.1140797,0.7835619,0.6015248,0.1081028,0.1177769,0.7737748,0.6129559,0.1193585,0.1362846,0.7320292,0.6567445,0.134227,0.1627714,0.6794562,0.7027289,-0.149732,-0.1943673,-0.6298746,-0.7369258,-0.1627587,-0.2311016,-0.585415,-0.7598624,-0.1725711,-0.2717241,-0.5468112,-0.7729054,-0.1834544,-0.30656,-0.5141768,-0.7797356,-0.1966895,-0.331894,-0.4893425,-0.7821148,-0.2133456,-0.3446634,-0.4740858,-0.7816223,-0.235043,-0.3417643,-0.4684801,-0.7800502,-0.2629997,-0.3236472,-0.4774205,-0.7734037,-0.2861217,-0.3083201,-0.4914439,-0.7625982,-0.3044935,-0.2988502,-0.5091851,-0.7474643,-0.3174228,-0.2969273,-0.5308909,-0.7274832,-0.3224327,-0.3044837,-0.5543455,-0.7042925,-0.315558,-0.3319985,-0.5727504,-0.6798214,-0.3031474,-0.3581456,-0.5906316,-0.6564965,-0.2858177,-0.3827906,-0.6082863,-0.6338513,-0.2653309,-0.4062825,-0.6256841,-0.610781,-0.2433928,-0.4283035,-0.6432088,-0.5861728,-0.2231138,-0.4438954,-0.6644389,-0.5582993,-0.2047911,-0.4528499,-0.6852844,-0.5323278,-0.189523,-0.4558033,-0.7050245,-0.5091806,-0.178387,-0.4532719,-0.7234916,-0.4891652,-0.1718457,-0.4462114,-0.7405166,-0.4722283,-0.1710352,-0.4370642,-0.7504205,-0.4653933,-0.1724398,-0.4293674,-0.7542037,-0.4659237,-0.1751621,-0.420305,-0.756285,-0.4697818,-0.1784643,-0.4085104,-0.7591809,-0.4742512,-0.1821926,-0.3932713,-0.7635318,-0.4787095,-0.186433,-0.3748969,-0.7683325,-0.4841076,-0.1907674,-0.3552553,-0.7729558,-0.4898375,-0.1951914,-0.3338336,-0.7771566,-0.4964706,-0.1998881,-0.3108822,-0.780486,-0.5042208,0.2050963,0.2873077,0.7824984,0.5129191,0.2106493,0.266625,0.7818566,0.522722,0.2161725,0.2474446,0.7802529,0.5322086,0.221525,0.229857,0.7780204,0.5410884,0.2266248,0.2139714,0.7753344,0.549285,0.2312842,0.2000128,0.7722127,0.5569472,0.2343164,0.1886754,0.7692148,0.5637428,0.2363586,0.1786319,0.7664424,0.5699046,0.237459,0.1700287,0.7637684,0.5756399,0.2376353,0.1629071,0.7611512,0.5810676,0.236857,0.1572614,0.7586538,0.5861844,0.2353452,0.1530892,0.7560144,0.5912855,0.2332554,0.1496472,0.7532651,0.5964808,0.2305924,0.1468746,0.7504491,0.6017317,0.2272986,0.1447367,0.7476925,0.6069123,0.2232784,0.1432009,0.7451867,0.6118309,0.2182584,0.1420965,0.7436012,0.6158158,0.2128884,0.1406166,0.7427611,0.6190407,0.2070113,0.1391428,0.7429319,0.6211585,0.2005616,0.1378615,0.7443079,0.6219123,0.1935098,0.136858,0.7470889,0.6210331,0.1864525,0.1360608,0.7511761,0.6184314,0.1792174,0.1354121,0.7557833,0.6150905,0.1716689,0.1356784,0.7595823,0.6124997,0.1639765,0.1369715,0.7620887,0.6112049,0.1565083,0.1386778,0.7638164,0.610621,0.1502772,0.1395089,0.7659896,0.6092733,0.1447389,0.139306,0.7682538,0.607808,0.139748,0.1382074,0.770611,0.6062408,0.1351725,0.1363381,0.7730182,0.6046347,0.1308741,0.133827,0.7753775,0.6031186,0.1271554,0.1306102,0.7775424,0.6018309,0.123199,0.1272136,0.7796893,0.6006025,0.1192544,0.1236859,0.7816075,0.5996414,0.1152705,0.1201588,0.7830732,0.5992253,0.1057565,0.1140797,0.7835619,0.6015248],"leftUpLeg":[-0.7344616,0.0190442,-0.1071557,0.6698665,-0.738006,0.0188671,-0.1110139,0.6653323,-0.7469818,0.022913,-0.1241279,0.6527522,-0.7511411,0.0356179,-0.1379872,0.6445757,-0.7468528,0.0575482,-0.1488651,0.6455526,-0.7363991,0.0857243,-0.1580737,0.652212,-0.7193317,0.1133396,-0.1665003,0.664826,-0.699002,0.1390653,-0.1746444,0.6793794,-0.6775143,0.1629209,-0.1836874,0.6933182,-0.6557305,0.1860989,-0.1945497,0.7053617,-0.6330276,0.2108251,-0.2078638,0.7152771,-0.6090909,0.2358483,-0.2231309,0.7235996,-0.5830454,0.2614506,-0.2394051,0.7310176,-0.5537343,0.2892566,-0.2572947,0.7372302,-0.5207606,0.3190449,-0.2768,0.7418898,-0.4847328,0.3489124,-0.297227,0.7449499,-0.4456197,0.3794835,-0.320538,0.7447622,-0.4049116,0.4076162,-0.3444108,0.7424802,-0.3623727,0.433231,-0.3686918,0.738284,-0.3181407,0.4559028,-0.3929605,0.7324761,-0.2726836,0.474879,-0.416456,0.7257396,-0.2269037,0.4884979,-0.4359119,0.7210169,-0.1809654,0.4984026,-0.4519013,0.7173783,-0.1341997,0.5032745,-0.4641267,0.7164437,-0.0856267,0.5014194,-0.4725396,0.7196895,-0.0339988,0.4908162,-0.4772516,0.7281308,0.0236876,0.4748923,-0.4755423,0.7401187,0.0825633,0.4577521,-0.4700187,0.7501524,0.1400811,0.440574,-0.461261,0.7573045,0.1934652,0.4243863,-0.4502413,0.7614134,0.239742,0.4101735,-0.4384445,0.7629207,0.2615695,0.4027521,-0.4316262,0.7635909,0.2505503,0.4004919,-0.4337315,0.7672729,0.2270898,0.408435,-0.440212,0.7666971,0.2040034,0.4274874,-0.447458,0.7585634,0.186283,0.4552466,-0.4532746,0.7433649,0.1696761,0.4733159,-0.4608243,0.7313159,0.1493934,0.4803772,-0.469681,0.7254785,0.1273245,0.4822257,-0.4780065,0.7230191,0.1045234,0.4823951,-0.4844893,0.7222464,0.0814117,0.4821713,-0.4884792,0.7226832,0.0569494,0.4821753,-0.4866975,0.7262157,0.0315046,0.4814181,-0.4818153,0.731504,0.0055843,0.4796677,-0.4745911,0.7380047,-0.0205659,0.4767855,-0.4653219,0.7454718,-0.0469583,0.4726975,-0.4538416,0.7539097,-0.0739135,0.4675661,-0.440051,0.7630687,-0.1010234,0.4611698,-0.4253654,0.7721276,-0.1282214,0.4534672,-0.4098644,0.7809852,-0.1555108,0.4443817,-0.3936343,0.7895526,-0.1829595,0.4337919,-0.3767633,0.7977467,-0.2105647,0.4214888,-0.3590758,0.8056515,-0.2379078,0.4081365,-0.3410197,0.81273,-0.2651555,0.3935273,-0.3224907,0.8190413,-0.2925255,0.3774043,-0.3035387,0.8245357,-0.3202701,0.3594477,-0.284379,0.8290676,-0.3492964,0.33879,-0.2668863,0.8318564,-0.3786578,0.3166846,-0.2485717,0.8333914,-0.4079834,0.2935658,-0.2298517,0.8333888,-0.4369949,0.2697967,-0.2113154,0.8316195,-0.4654623,0.2456032,-0.1937394,0.8279426,-0.4932807,0.2220964,-0.1777134,0.8220495,-0.5203778,0.1993187,-0.1636981,0.8140528,-0.5471857,0.1773653,-0.1513909,0.803872,-0.5738681,0.1561152,-0.1404892,0.7915593,-0.6003094,0.1352278,-0.1306887,0.7773432,-0.6249017,0.1145115,-0.1216067,0.7626249,-0.6479435,0.0938516,-0.1138215,0.7472655,-0.6698272,0.0736961,-0.107891,0.7309308,-0.6910386,0.054428,-0.1044049,0.713164,-0.7344616,0.0190442,-0.1071557,0.6698665],"leftLeg":[-0.6414606,0.1166092,-0.2276337,0.7232659,-0.6386142,0.1172757,-0.2223301,0.7273154,-0.6325962,0.1198741,-0.2053168,0.737087,-0.6318777,0.1245742,-0.1897423,0.7410868,-0.639324,0.1313783,-0.1803937,0.7358415,-0.6515851,0.1405612,-0.1739159,0.7248673,-0.6581725,0.1566586,-0.1733838,0.7156851,-0.6616923,0.1750204,-0.176192,0.7074514,-0.6619479,0.1975815,-0.186209,0.6986507,-0.6585648,0.2254182,-0.2037269,0.688458,-0.6510648,0.2581876,-0.2256252,0.677161,-0.6395873,0.2944082,-0.2523581,0.6637524,-0.6263041,0.3316395,-0.278979,0.6480195,-0.6117734,0.3699982,-0.3035207,0.629849,-0.5967469,0.4089005,-0.3246882,0.6093202,-0.5821471,0.4471205,-0.341903,0.5867626,-0.5652625,0.4869723,-0.357922,0.5614519,-0.5465988,0.5262002,-0.3720737,0.5347003,-0.5269575,0.5642266,-0.383191,0.5070788,-0.5069926,0.600377,-0.3904286,0.4796577,-0.4871848,0.6338063,-0.3933635,0.4540988,-0.4690292,0.662557,-0.3903107,0.4343816,-0.4509913,0.6886248,-0.3832391,0.4189637,-0.4321143,0.7122695,-0.3746372,0.4069354,-0.4128825,0.7330336,-0.3654403,0.3983003,-0.3952295,0.7497215,-0.3554254,0.3941878,-0.3769016,0.7632451,-0.340472,0.3993507,-0.3561684,0.7740899,-0.3232719,0.4116117,-0.3338208,0.7817912,-0.304985,0.4293604,-0.311292,0.7861529,-0.2869928,0.4502177,-0.290852,0.7875202,-0.2708743,0.4710033,-0.2841071,0.7866215,-0.26326,0.4808367,-0.2963946,0.7837859,-0.2695139,0.4745442,-0.3131238,0.7866819,-0.28273,0.4507204,-0.3250773,0.7970004,-0.2984672,0.4123498,-0.3286337,0.8121084,-0.3143129,0.3656327,-0.3325089,0.8178954,-0.3244189,0.3394662,-0.3415911,0.8154405,-0.3330745,0.3277707,-0.3519521,0.8095189,-0.3425582,0.3216563,-0.3616972,0.8023829,-0.353841,0.3164701,-0.3705422,0.7944655,-0.3663787,0.311913,-0.3815116,0.7836428,-0.3771815,0.3131884,-0.3939937,0.7705507,-0.3869035,0.3183179,-0.4073675,0.7554968,-0.3955505,0.3268274,-0.4215679,0.7386032,-0.4028509,0.3383151,-0.4370434,0.7197954,-0.4082603,0.352436,-0.4543965,0.6989895,-0.4113781,0.3683822,-0.4722029,0.6765992,-0.4128846,0.3856997,-0.4904136,0.6525933,-0.4126297,0.4041698,-0.5090217,0.6268873,-0.4105432,0.4235134,-0.5280576,0.5993333,-0.4066329,0.443401,-0.5474631,0.5695184,-0.4008009,0.4639953,-0.5660852,0.5385574,-0.3934157,0.4844869,-0.5838361,0.5063758,-0.3846354,0.5047519,-0.6005301,0.473038,-0.3749917,0.5243853,-0.615902,0.4387387,-0.3654527,0.5427868,-0.6302241,0.4045001,-0.3602429,0.5562574,-0.6439475,0.3688618,-0.3529626,0.5698157,-0.6568151,0.3325194,-0.343633,0.5830447,-0.6686557,0.2961125,-0.3325725,0.5954935,-0.679339,0.2601534,-0.3204339,0.6067461,-0.6873966,0.2275215,-0.3089606,0.6166549,-0.6911648,0.201209,-0.3021315,0.6249182,-0.692482,0.1788173,-0.29632,0.6329989,-0.6919943,0.1593128,-0.2895104,0.641831,-0.6891929,0.142909,-0.2814807,0.6521954,-0.6842615,0.1305821,-0.2731339,0.6634247,-0.6781031,0.1209815,-0.2645455,0.6749484,-0.6710846,0.1142473,-0.2559005,0.6863731,-0.6632445,0.1106342,-0.2472686,0.6976568,-0.6414606,0.1166092,-0.2276337,0.7232659],"leftFoot":[-0.7068219,0.1654296,-0.1541191,0.6702858,-0.7089149,0.1632513,-0.1586472,0.6675475,-0.7167655,0.1594246,-0.1814122,0.6541564,-0.7250326,0.1628391,-0.2171967,0.6329587,-0.7308544,0.1758151,-0.2606496,0.6058075,-0.7334519,0.1953921,-0.307173,0.5740339,-0.7322905,0.2197379,-0.347936,0.5425923,-0.7295083,0.2428031,-0.3785148,0.515355,-0.7264396,0.2657389,-0.3991207,0.4923119,-0.7236093,0.2900807,-0.4110256,0.4725471,-0.7207044,0.3170726,-0.4166618,0.45436,-0.7163055,0.3467231,-0.4168244,0.4392572,-0.7096192,0.3772765,-0.4141244,0.4273219,-0.6998409,0.4082398,-0.4096074,0.4192669,-0.6862429,0.4391824,-0.4042359,0.4156715,-0.6679754,0.4698352,-0.3988203,0.4171405,-0.6394868,0.5040541,-0.3906902,0.4293568,-0.6050192,0.5390702,-0.3798708,0.4461538,-0.5658464,0.5732159,-0.3667119,0.4655789,-0.5237395,0.6050012,-0.3515672,0.4858713,-0.4810229,0.6331062,-0.3348049,0.5056671,-0.4457912,0.6556899,-0.3164287,0.520782,-0.4182923,0.6734771,-0.2988415,0.5311816,-0.4006996,0.68673,-0.2819406,0.5369834,-0.3941388,0.6959144,-0.2649309,0.5386738,-0.3986585,0.7014671,-0.246655,0.5368209,-0.4137632,0.704709,-0.2262446,0.5300931,-0.432633,0.7055111,-0.2060434,0.5221387,-0.4533308,0.7039463,-0.1873079,0.5136793,-0.4736566,0.7006191,-0.171262,0.5054222,-0.4912359,0.6968149,-0.1586555,0.4979605,-0.4995262,0.6935314,-0.1552985,0.4953485,-0.5017468,0.6862977,-0.1670292,0.4993465,-0.4941596,0.6784368,-0.1955944,0.5072206,-0.4774626,0.669058,-0.2394724,0.5167628,-0.4556894,0.6565243,-0.2920771,0.5253704,-0.4416057,0.649279,-0.3207032,0.5296892,-0.4374656,0.6460802,-0.330196,0.5312014,-0.437707,0.644363,-0.3315429,0.5322482,-0.4398248,0.6419936,-0.3314476,0.5334238,-0.4431678,0.6387058,-0.3321843,0.534145,-0.4487052,0.633806,-0.3329574,0.5348766,-0.4560496,0.6262217,-0.3313021,0.5386131,-0.4652479,0.6160425,-0.3276835,0.5446647,-0.4763467,0.6032914,-0.3224445,0.5524155,-0.4893517,0.5879505,-0.3158297,0.5613384,-0.5033943,0.5712929,-0.3109605,0.56879,-0.5183315,0.5525658,-0.3052975,0.5768856,-0.5339666,0.5318251,-0.2987318,0.5854921,-0.550072,0.5091376,-0.2912018,0.5944756,-0.5663955,0.4845842,-0.2826764,0.6037121,-0.5826321,0.4582769,-0.2732301,0.6130803,-0.598117,0.4314242,-0.2630624,0.6220348,-0.6126171,0.4045937,-0.2523642,0.6303305,-0.625813,0.3786894,-0.2415722,0.6376482,-0.6373344,0.3549312,-0.2313885,0.6436521,-0.6457736,0.3368742,-0.2251485,0.6471479,-0.6538072,0.3189706,-0.2188226,0.6503158,-0.6614076,0.3013361,-0.212418,0.6531578,-0.6685532,0.2841231,-0.2060182,0.6556426,-0.6751998,0.2674551,-0.1998194,0.6577577,-0.6810593,0.2518193,-0.1941987,0.6595696,-0.6861159,0.2372153,-0.1886148,0.6613609,-0.6905418,0.2235389,-0.1832111,0.6630355,-0.6944523,0.2108687,-0.1780187,0.6645146,-0.697861,0.1992562,-0.1730601,0.6658357,-0.7006099,0.1897722,-0.1687284,0.6668306,-0.7028484,0.1816796,-0.1647373,0.6677262,-0.7046021,0.1750726,-0.1611961,0.6685067,-0.7058716,0.1700305,-0.1582319,0.6691768,-0.7068219,0.1654296,-0.1541191,0.6702858],"rightUpLeg":[-0.3026298,-0.1451124,-0.4819063,-0.8093972,-0.2946146,-0.1407873,-0.4809314,-0.8136868,0.2629332,0.1249321,0.4766563,0.8294919,0.2239168,0.1089651,0.4699496,0.8468384,0.1860854,0.0990937,0.4611289,0.8619239,0.1497695,0.0958382,0.4490177,0.8756524,0.11556,0.0979278,0.4341181,0.8880301,0.0835988,0.1011622,0.4172966,0.8992447,0.0537891,0.1050277,0.398726,0.9094468,0.0260433,0.1095242,0.3782001,0.918853,0.0002862,0.1153235,0.3551311,0.9276757,-0.022723,0.1208524,0.330133,0.9358902,-0.0441459,0.1263332,0.3037613,0.9433028,-0.0643926,0.1330685,0.2753633,0.949906,-0.0836821,0.1412907,0.2453276,0.9554311,-0.1020995,0.1497893,0.2150256,0.9596368,-0.1193183,0.156911,0.1846386,0.9628347,-0.1359629,0.1634051,0.1544254,0.9648656,-0.1524066,0.1704865,0.1234908,0.9656379,-0.1687342,0.1790034,0.0912052,0.9649705,-0.1846883,0.1892896,0.0570871,0.9627049,-0.1993961,0.2002541,0.0207139,0.9590153,-0.2133311,0.2130421,-0.0172159,0.9533134,-0.2266529,0.2276698,-0.0565308,0.9453038,-0.2395275,0.2436727,-0.0967251,0.9348232,-0.2523428,0.2601944,-0.1369115,0.9218878,-0.2666397,0.2749499,-0.1745226,0.9071095,-0.2813715,0.2885091,-0.2106309,0.890633,-0.2953113,0.3017294,-0.24473,0.8728447,-0.307993,0.3144011,-0.2758753,0.8545087,-0.3198911,0.3252807,-0.302753,0.8367812,-0.3319613,0.3305771,-0.3215368,0.8228818,-0.3435869,0.3350836,-0.3378819,0.8096313,-0.3552719,0.3374727,-0.3496783,0.7985106,-0.3673673,0.3367536,-0.3556671,0.7906575,-0.3800225,0.3323642,-0.3553044,0.7866865,-0.3906816,0.327324,-0.3503985,0.7857784,-0.3997886,0.3224711,-0.3439886,0.7860364,-0.4074783,0.3178237,-0.336351,0.7872849,-0.4139618,0.3134955,-0.3278881,0.7892056,-0.4195341,0.3096943,-0.3191398,0.7913472,-0.4233081,0.3064865,-0.3092378,0.7945114,-0.425732,0.3033497,-0.2984956,0.7985184,-0.4268284,0.3003159,-0.2871345,0.803232,-0.4264424,0.2975581,-0.2750329,0.8086798,-0.424259,0.2954023,-0.2617095,0.8150153,-0.4195922,0.2942922,-0.2462228,0.8226231,-0.4131153,0.2935672,-0.22889,0.8311217,-0.404651,0.2932006,-0.2092083,0.8405491,-0.3941274,0.2930627,-0.186591,0.8508593,-0.3815884,0.2929269,-0.1603566,0.861899,-0.3673597,0.2921383,-0.1289081,0.8735472,-0.353102,0.2905392,-0.0938227,0.884366,-0.3388249,0.2873995,-0.0541532,0.8942408,-0.324329,0.2821596,-0.0091695,0.9028359,-0.3092206,0.2744451,0.0416361,0.9095762,-0.2921159,0.2622442,0.1004258,0.914227,-0.2716888,0.2473229,0.1630507,0.9156588,-0.2474974,0.23066,0.2277652,0.913052,-0.2191447,0.2128902,0.2926165,0.9061065,-0.1862693,0.1941911,0.3555251,0.8950952,-0.1430497,0.1728155,0.4112191,0.883499,-0.0815861,0.1489152,0.4606877,0.8711687,0.0010649,0.1219635,0.4978008,0.8586723,0.1034186,0.093825,0.5159958,0.845133,0.218806,0.068603,0.5090794,0.8296118,-0.3096114,-0.061697,-0.4879461,-0.8137831,-0.3649656,-0.065345,-0.4747493,-0.7982125,-0.3847977,-0.0733982,-0.4715752,-0.7900382,-0.3735253,-0.0881921,-0.475476,-0.7915956,-0.3026298,-0.1451124,-0.4819063,-0.8093972],"rightLeg":[-0.1435061,0.0265164,-0.3032475,0.9416708,-0.1442611,0.0214899,-0.3095166,0.9396416,-0.146817,0.0029047,-0.3325704,0.9315757,-0.150553,-0.0172215,-0.3571808,0.9216611,-0.1572401,-0.032832,-0.3764471,0.9124063,-0.1693193,-0.0443031,-0.3912123,0.9035049,-0.1928035,-0.0584567,-0.3947526,0.8964263,-0.2173741,-0.0695797,-0.3960955,0.8893905,-0.2426326,-0.0779148,-0.3956551,0.8823354,-0.2686544,-0.0834622,-0.3939315,0.8750296,-0.2960455,-0.0858196,-0.3914329,0.8670481,-0.3217523,-0.0845605,-0.3888353,0.8591461,-0.3455599,-0.0802352,-0.3872288,0.8510021,-0.3680404,-0.0725846,-0.3869467,0.8423479,-0.3887661,-0.0615114,-0.3883557,0.833221,-0.4062066,-0.0475598,-0.3921441,0.8239886,-0.4189924,-0.0310755,-0.3996718,0.8147037,-0.42981,-0.0136877,-0.4073358,0.8057007,-0.442728,0.0027488,-0.4114928,0.7966542,-0.4593599,0.0183822,-0.4107032,0.7873839,-0.4785112,0.0347321,-0.4060292,0.7777924,-0.4968222,0.052778,-0.3984036,0.7691923,-0.514547,0.0730243,-0.3879822,0.7611693,-0.5312965,0.0950758,-0.3747826,0.7538054,-0.5464947,0.1184444,-0.3588985,0.7473328,-0.55965,0.1424626,-0.3404445,0.7420201,-0.5685031,0.1653526,-0.3207752,0.7393011,-0.5692192,0.19304,-0.3113373,0.7360667,-0.5641799,0.2233647,-0.3124203,0.7308918,-0.555502,0.2536831,-0.3225376,0.7232094,-0.5452531,0.2810568,-0.338606,0.7134789,-0.5340583,0.3019514,-0.3587353,0.7035027,-0.5243338,0.3190241,-0.3730122,0.6958158,-0.5173928,0.3310078,-0.3815207,0.6907825,-0.5149676,0.3367977,-0.3842203,0.6882954,-0.5190904,0.3354548,-0.380916,0.6876906,-0.5257058,0.3310772,-0.3744676,0.6883279,-0.5324009,0.3260119,-0.3674091,0.6894027,-0.5388652,0.3204847,-0.3598217,0.6909719,-0.5444049,0.3151348,-0.3515647,0.6933366,-0.5479656,0.3110453,-0.342264,0.6970222,-0.5474251,0.3092679,-0.3304686,0.703896,-0.5446871,0.3084095,-0.3178975,0.7121381,-0.5409283,0.3076087,-0.3042423,0.7212559,-0.5370937,0.3061746,-0.2895236,0.7307281,-0.533927,0.303611,-0.2740955,0.7400095,-0.5323852,0.299675,-0.2605,0.7475966,-0.5328987,0.2932853,-0.2480469,0.7539731,-0.5358496,0.2837721,-0.2368991,0.7590899,-0.5415326,0.2704305,-0.2271428,0.7628997,-0.5501051,0.2525008,-0.218793,0.7653479,-0.5623837,0.2279846,-0.2117092,0.7661115,-0.5753618,0.1994766,-0.204242,0.7664549,-0.5879292,0.1662393,-0.1957166,0.7670715,-0.5987094,0.1278234,-0.1856859,0.768589,-0.6061071,0.08416,-0.1738817,0.7715675,-0.6047821,0.0367526,-0.1661456,0.7779997,-0.5894827,-0.0052392,-0.1706539,0.7895314,-0.5625902,-0.041855,-0.1805345,0.805697,-0.5256626,-0.0726683,-0.1921478,0.8255164,-0.4795487,-0.096333,-0.2049955,0.8477794,-0.4229127,-0.1125832,-0.2191185,0.8720418,-0.3576781,-0.1233683,-0.2354744,0.8952086,-0.2814106,-0.1173826,-0.2608756,0.9159549,-0.1973123,-0.0852165,-0.2947653,0.9310851,-0.1117836,-0.0234518,-0.3293996,0.9372568,-0.066755,0.0224611,-0.3304589,0.9411887,-0.044271,0.0513617,-0.3244588,0.9434663,-0.0413459,0.0624157,-0.3179422,0.9451495,-0.0598905,0.0575069,-0.3126499,0.9462326,-0.1435061,0.0265164,-0.3032475,0.9416708],"rightFoot":[-0.3787836,0.2357919,-0.1650768,0.8795879,-0.3787645,0.2359734,-0.1657625,0.8794185,-0.3782731,0.2374223,-0.1689376,0.8786354,-0.3768084,0.2402157,-0.1731381,0.8776873,-0.3748814,0.2446526,-0.1778159,0.8763507,-0.3727156,0.2505866,-0.1831676,0.8744936,-0.3703618,0.2580448,-0.1877423,0.8723519,-0.3679947,0.266063,-0.1926388,0.869874,-0.3656598,0.2744416,-0.1978341,0.867085,-0.3634053,0.2829285,-0.2031612,0.864068,-0.3613208,0.2913899,-0.2082478,0.8609135,-0.3600505,0.29819,-0.2126344,0.8580402,-0.3592019,0.3038342,-0.2166426,0.8554091,-0.3588205,0.3080766,-0.2198673,0.8532262,-0.3591197,0.3109488,-0.2221145,0.8514746,-0.3604263,0.3122622,-0.2236614,0.8500357,-0.3630862,0.3107101,-0.2247271,0.849191,-0.3663692,0.3081968,-0.2254498,0.848505,-0.3699476,0.3048999,-0.2256097,0.8481009,-0.3735474,0.3013964,-0.225064,0.8479202,-0.3767763,0.2980649,-0.2240131,0.8479476,-0.3798631,0.2934885,-0.2232877,0.8483579,-0.3823372,0.2894355,-0.2225475,0.8488333,-0.383876,0.2860772,-0.2218182,0.8494679,-0.3841229,0.2835602,-0.2211403,0.8503765,-0.3829629,0.2819863,-0.2205401,0.851578,-0.3813121,0.2802657,-0.2200978,0.8530001,-0.3805512,0.2786212,-0.221294,0.853569,-0.385352,0.2775975,-0.2273829,0.8501414,-0.3978911,0.2778705,-0.2392756,0.8409624,-0.4173855,0.2801408,-0.2561925,0.8256367,-0.4412572,0.2838074,-0.2781828,0.8045867,-0.4639842,0.2877689,-0.3012402,0.7817685,-0.4846583,0.2903389,-0.3240131,0.7588315,-0.5029519,0.2888874,-0.3448553,0.7380097,-0.5190411,0.2799712,-0.3616426,0.7220991,-0.5353146,0.2684924,-0.3776925,0.7061858,-0.5514144,0.2563681,-0.3937548,0.6893292,-0.5671035,0.2437412,-0.4096131,0.6717149,-0.5821302,0.2308221,-0.4250817,0.653568,-0.5963008,0.2179183,-0.4399736,0.6351064,-0.6092248,0.2059092,-0.4535261,0.617058,-0.6209361,0.1945083,-0.4659104,0.5996102,-0.6314099,0.1839434,-0.4768653,0.5831688,-0.6406328,0.174356,-0.486237,0.5681225,-0.6486476,0.1658504,-0.4939424,0.554771,-0.6547455,0.1593796,-0.4988218,0.5450535,-0.6595604,0.1542999,-0.5015958,0.5381201,-0.6630279,0.1508067,-0.5021895,0.5342818,-0.6650688,0.1490488,-0.5004996,0.5338241,-0.6655899,0.1491205,-0.4963653,0.5370053,-0.66305,0.1532475,-0.4860141,0.548334,-0.6580871,0.1603356,-0.4709732,0.5651532,-0.6506817,0.1699615,-0.4516542,0.586289,-0.6408075,0.1817049,-0.4284603,0.6105497,-0.6284905,0.1952071,-0.4017707,0.6367686,-0.6131595,0.2092126,-0.3736124,0.6638368,-0.5965907,0.2212713,-0.3450779,0.6899564,-0.5795126,0.2305797,-0.3158872,0.7149919,-0.5624919,0.2372624,-0.2873969,0.7380464,-0.545655,0.2426184,-0.2623576,0.7580009,-0.5292234,0.2458114,-0.2488849,0.7730173,-0.5095053,0.2536459,-0.2401246,0.7863894,-0.4840447,0.2701061,-0.2358925,0.7981843,-0.4514209,0.2903515,-0.2365399,0.809916,-0.409567,0.2984324,-0.2487089,0.8254313,-0.3801902,0.2994537,-0.2461362,0.8397618,-0.356788,0.2932806,-0.2309969,0.8563465,-0.3473112,0.2829184,-0.2132214,0.8682562,-0.3540527,0.2689982,-0.195813,0.8740389,-0.3787836,0.2357919,-0.1650768,0.8795879]}`),chains:{hips:`spine`,spine:`spine2`,spine2:`chest`,chest:`neck`,neck:`head`,leftShoulder:`leftArm`,rightShoulder:`rightArm`,leftArm:`leftForeArm`,rightArm:`rightForeArm`,leftForeArm:`leftHand`,rightForeArm:`rightHand`,leftUpLeg:`leftLeg`,rightUpLeg:`rightLeg`,leftLeg:`leftFoot`,rightLeg:`rightFoot`},directions:JSON.parse(`{"hips":[0.0929021,0.2532121,-0.9629397,0.097114,0.2515217,-0.9629671,0.1136858,0.2443665,-0.9629956,0.134034,0.2351381,-0.9626759,0.1538515,0.2255618,-0.962004,0.1731028,0.2156699,-0.9610005,0.1914725,0.2058316,-0.9596727,0.2095322,0.1957414,-0.9580092,0.2272332,0.1853669,-0.9560357,0.2440679,0.1748917,-0.9538573,0.2590391,0.1646557,-0.9517285,0.2717543,0.1545153,-0.9498814,0.2811495,0.1458376,-0.948518,0.2851731,0.140331,-0.9481474,0.2832274,0.13924,-0.9488912,0.276218,0.143307,-0.9503509,0.2641254,0.154622,-0.9520135,0.2520916,0.1665306,-0.9532667,0.2413773,0.1774438,-0.9540706,0.2340578,0.1846027,-0.9545359,0.2327239,0.1838726,-0.9550028,0.2370322,0.1749637,-0.9556168,0.2458399,0.1581458,-0.9563225,0.256721,0.1333888,-0.9572365,0.2668061,0.1031914,-0.9582098,0.2735179,0.0727419,-0.9591124,0.2749266,0.0539405,-0.9599509,0.2749294,0.0406935,-0.9606029,0.2748896,0.0324901,-0.9609267,0.2755307,0.0293035,-0.9608455,0.2770091,0.0317138,-0.9603438,0.2789156,0.04415,-0.9593002,0.2807457,0.0589491,-0.9579702,0.2826912,0.0785534,-0.955989,0.2849434,0.1036884,-0.9529197,0.2875907,0.1333734,-0.9484214,0.2897585,0.1633967,-0.9430491,0.2910747,0.1923574,-0.9371628,0.2910179,0.2199187,-0.9310985,0.2892732,0.2456254,-0.9251968,0.2857365,0.2689183,-0.919803,0.2807443,0.2868568,-0.9159125,0.2748512,0.3014401,-0.9130119,0.2679231,0.3130634,-0.9111578,0.2599796,0.3219212,-0.9103721,0.2511918,0.3280167,-0.9106633,0.2421355,0.3315444,-0.9118381,0.2332862,0.3336056,-0.913392,0.2250105,0.3343361,-0.9151992,0.2175756,0.3338704,-0.9171649,0.21115,0.3323316,-0.9192233,0.2061974,0.3297112,-0.9212889,0.2018922,0.3266596,-0.9233272,0.1981106,0.3226457,-0.9255549,0.1948351,0.3172488,-0.9281123,0.1921493,0.3101694,-0.9310605,0.1905615,0.3016833,-0.9341699,0.190006,0.2918419,-0.9374039,0.1901446,0.281034,-0.9406726,0.1905201,0.2700542,-0.9438076,0.1905217,0.2601185,-0.9465938,0.1883525,0.2522085,-0.949165,0.1843312,0.2459631,-0.9515903,0.1775711,0.240701,-0.9542177,0.1673076,0.235902,-0.9572661,0.1528823,0.2312272,-0.9608127,0.1384093,0.2280524,-0.9637608,0.1267102,0.2272061,-0.9655682,0.1174821,0.2291067,-0.9662857,0.109713,0.2340845,-0.9660059,0.0929021,0.2532121,-0.9629397],"spine":[0.313,0.0314441,-0.9492325,0.3119958,0.0318787,-0.9495485,0.3080465,0.0333219,-0.9507876,0.302901,0.0351381,-0.952374,0.2975106,0.0366835,-0.9540135,0.2921018,0.0374955,-0.9556519,0.2862295,0.0362646,-0.9574746,0.2802192,0.0351433,-0.9592925,0.2741642,0.0338085,-0.9610884,0.2682705,0.0314266,-0.9628309,0.2628206,0.0266667,-0.9644761,0.2577779,0.019906,-0.9659991,0.2523905,0.0122232,-0.9675483,0.2459572,0.0033525,-0.9692749,0.237717,-0.0058909,-0.9713166,0.227186,-0.0135805,-0.9737567,0.2134909,-0.0180323,-0.9767786,0.1975566,-0.022453,-0.9800343,0.177375,-0.0278316,-0.9837497,0.1516111,-0.0347606,-0.9878288,0.1196879,-0.0435104,-0.9918577,0.0855294,-0.0520437,-0.9949755,0.0514912,-0.0604521,-0.9968421,0.0184238,-0.0685174,-0.9974798,-0.0118681,-0.0752818,-0.9970917,-0.0365053,-0.0795414,-0.9961629,-0.0512082,-0.0786085,-0.9955895,-0.0641351,-0.0745399,-0.9951535,-0.0759879,-0.0675385,-0.9948188,-0.0864921,-0.0572767,-0.9946047,-0.0943919,-0.043163,-0.994599,-0.0969715,-0.022467,-0.9950336,-0.0980012,-0.0004699,-0.9951862,-0.0964215,0.0238161,-0.9950556,-0.0924496,0.0501486,-0.9944537,-0.0875551,0.0770853,-0.9931727,-0.0839957,0.1026575,-0.991164,-0.0805402,0.1271117,-0.9886131,-0.077446,0.1500722,-0.9856371,-0.0751176,0.1710773,-0.9823899,-0.0741007,0.189544,-0.9790721,-0.0743347,0.2006545,-0.9768378,-0.0751719,0.2072667,-0.9753921,-0.0764322,0.2101428,-0.9746785,-0.0778607,0.2096735,-0.9746665,-0.0791062,0.2058818,-0.9753742,-0.0804792,0.1995778,-0.9765715,-0.0818161,0.1920391,-0.9779709,-0.0829217,0.1833496,-0.9795442,-0.0832633,0.1735782,-0.981294,-0.0819688,0.162826,-0.983244,-0.0758048,0.1514318,-0.9855567,-0.0676635,0.1403382,-0.9877889,-0.0561402,0.128806,-0.9900794,-0.0405771,0.1162495,-0.9923908,-0.0210684,0.1021484,-0.994546,0.0022845,0.086331,-0.9962639,0.0281409,0.0695972,-0.9971782,0.0548885,0.0529949,-0.9970851,0.0817509,0.0371993,-0.9959583,0.1088606,0.0226564,-0.9937988,0.1356297,0.0108922,-0.9906997,0.1610989,0.0020437,-0.9869361,0.185262,-0.0040306,-0.9826809,0.2077258,-0.0073529,-0.9781595,0.2277244,-0.0078666,-0.9736938,0.2456434,-0.0056937,-0.9693435,0.2623196,-0.0017417,-0.9649795,0.2777587,0.0039258,-0.9606429,0.2915841,0.0113119,-0.9564783,0.313,0.0314441,-0.9492325],"spine2":[0.338164,0.0021972,-0.9410846,0.3366227,0.0035629,-0.9416329,0.3305524,0.0086901,-0.9437476,0.3228558,0.0151782,-0.9463264,0.3150241,0.0214701,-0.9488408,0.3072803,0.0270933,-0.9512333,0.2994102,0.030385,-0.9536405,0.2919406,0.0340337,-0.9558307,0.284881,0.0376086,-0.9578248,0.2780263,0.0398453,-0.9597467,0.2709041,0.0386894,-0.9618285,0.2633813,0.0344475,-0.9640766,0.2545381,0.0282545,-0.9666499,0.242934,0.0192521,-0.9698518,0.2277846,0.0084503,-0.9736749,0.2094141,-0.0013823,-0.9778261,0.1874135,-0.0079795,-0.9822487,0.163063,-0.0139712,-0.9865167,0.1346289,-0.0201831,-0.9906905,0.1009269,-0.0270959,-0.9945248,0.0614097,-0.0348833,-0.9975029,0.0191523,-0.0418008,-0.9989424,-0.024122,-0.0482082,-0.998546,-0.0670664,-0.0539725,-0.9962876,-0.1071198,-0.0585403,-0.9925212,-0.1404544,-0.0615445,-0.9881725,-0.1603761,-0.06146,-0.9851407,-0.177514,-0.0588131,-0.9823593,-0.1931684,-0.0537361,-0.979693,-0.2072156,-0.0457737,-0.9772239,-0.2181144,-0.0341787,-0.9753245,-0.2231288,-0.0159679,-0.9746582,-0.2264706,0.0034825,-0.9740118,-0.2270015,0.025189,-0.9735686,-0.2250029,0.0488756,-0.9731315,-0.2221566,0.0729703,-0.9722766,-0.2199293,0.0956052,-0.9708196,-0.2163868,0.1172596,-0.9692404,-0.2117033,0.1377352,-0.9675798,-0.2063709,0.1566435,-0.965854,-0.201182,0.1733338,-0.964096,-0.1956001,0.1830813,-0.9634427,-0.1897143,0.1886719,-0.9635411,-0.1835793,0.1909171,-0.9642869,-0.1771215,0.1901992,-0.9656357,-0.170113,0.1864862,-0.9676179,-0.1632873,0.1807015,-0.9698888,-0.1566801,0.1738952,-0.97222,-0.1502145,0.1660926,-0.9746019,-0.1434832,0.1572866,-0.9770739,-0.1357441,0.1474826,-0.9797053,-0.1236529,0.1367431,-0.9828587,-0.1096255,0.1265323,-0.9858863,-0.0920117,0.1158994,-0.98899,-0.069859,0.1041521,-0.9921049,-0.0429394,0.0907836,-0.9949445,-0.0121153,0.075813,-0.9970484,0.0204569,0.0600292,-0.997987,0.0524934,0.0443814,-0.9976346,0.0831955,0.0293832,-0.9961,0.1133231,0.015276,-0.9934408,0.1427677,0.0032039,-0.989751,0.1706029,-0.0063762,-0.9853192,0.1968758,-0.013672,-0.9803331,0.2212424,-0.0186935,-0.9750397,0.2429827,-0.021293,-0.9697969,0.2626319,-0.0212103,-0.964663,0.2810064,-0.0196625,-0.9595045,0.2981273,-0.0165112,-0.9543833,0.3136063,-0.0117537,-0.9494803,0.338164,0.0021972,-0.9410846],"chest":[0.383375,-0.0212083,-0.9233492,0.3812418,-0.0191138,-0.9242778,0.3725848,-0.0110572,-0.9279323,0.3617342,-0.0007717,-0.932281,0.3508141,0.009402,-0.9363979,0.3399445,0.0188588,-0.9402564,0.3286898,0.025722,-0.9440876,0.3179435,0.033083,-0.9475323,0.3077226,0.040504,-0.9506136,0.2976059,0.0464312,-0.9535591,0.2866555,0.0482648,-0.9568172,0.2747381,0.0464238,-0.9603977,0.2608934,0.042029,-0.9644523,0.2430995,0.0337866,-0.9694128,0.2204685,0.0228045,-0.9751275,0.1937858,0.012393,-0.9809656,0.1629631,0.0051632,-0.9866186,0.1296978,-0.0009768,-0.9915531,0.0926699,-0.0068637,-0.9956732,0.0508986,-0.0129625,-0.9986197,0.0038395,-0.0193575,-0.9998053,-0.0464409,-0.0245123,-0.9986202,-0.0987829,-0.0290186,-0.9946858,-0.1514333,-0.0329373,-0.9879186,-0.2010828,-0.0362517,-0.9789032,-0.2429039,-0.0395742,-0.9692428,-0.2679813,-0.0426252,-0.9624807,-0.2893177,-0.0439759,-0.9562225,-0.3085937,-0.0435058,-0.9501985,-0.3258218,-0.0404955,-0.9445635,-0.3393873,-0.0339151,-0.9400351,-0.3464107,-0.0201704,-0.9378661,-0.3516356,-0.0051565,-0.9361228,-0.3538841,0.0122788,-0.9352087,-0.3534928,0.0319581,-0.9348912,-0.3522925,0.0523233,-0.9344262,-0.3510961,0.0713982,-0.9336133,-0.3473177,0.0897364,-0.933444,-0.3409903,0.1073593,-0.9339163,-0.3326756,0.1240099,-0.9348521,-0.3234429,0.1390263,-0.9359788,-0.3122103,0.1478294,-0.9384408,-0.2998432,0.1530308,-0.9416346,-0.2866089,0.1554765,-0.9453478,-0.2725744,0.1554981,-0.9494859,-0.2575689,0.1529373,-0.9540799,-0.2427964,0.148704,-0.958612,-0.228478,0.1436217,-0.962897,-0.2146715,0.137696,-0.9669312,-0.2010776,0.1308474,-0.970797,-0.1870259,0.1229534,-0.9746301,-0.1692231,0.11391,-0.978973,-0.149535,0.1055713,-0.9831042,-0.1260359,0.096816,-0.98729,-0.0974829,0.0868898,-0.991437,-0.0633712,0.0753477,-0.9951416,-0.0252602,0.0621646,-0.9977462,0.0138098,0.0480383,-0.99875,0.0510111,0.0337045,-0.9981292,0.0856112,0.0195907,-0.996136,0.1190418,0.0059671,-0.9928713,0.1517791,-0.0058586,-0.9883971,0.1829822,-0.0155824,-0.9829927,0.2126727,-0.0233999,-0.9768433,0.2405334,-0.0293122,-0.9701982,0.2659275,-0.0331625,-0.9634224,0.2891617,-0.0344094,-0.9566617,0.3112518,-0.0344311,-0.9497035,0.3320785,-0.0329938,-0.9426745,0.3512529,-0.03015,-0.9357951,0.383375,-0.0212083,-0.9233492],"neck":[0.1682213,-0.01176,-0.9856791,0.1691282,-0.0101816,-0.9855415,0.172664,-0.0046352,-0.9849699,0.1770913,0.0013042,-0.9841936,0.1814203,0.0058891,-0.983388,0.1855855,0.0091671,-0.9825854,0.1885426,0.0095161,-0.9820189,0.1911238,0.0107229,-0.9815074,0.1933068,0.0127547,-0.9810555,0.1943974,0.0148535,-0.9808104,0.1929936,0.015637,-0.9810754,0.1894848,0.0147288,-0.9817732,0.1836052,0.0122849,-0.9829233,0.1730577,0.0078723,-0.9848802,0.1570933,0.0027754,-0.9875799,0.1369339,-0.0002288,-0.9905802,0.1126197,0.0013525,-0.9936372,0.0863006,0.0036853,-0.9962623,0.0565607,0.0060266,-0.998381,0.02241,0.007731,-0.999719,-0.016643,0.008253,-0.9998274,-0.0586903,0.0088849,-0.9982367,-0.1025495,0.0088922,-0.9946882,-0.1464139,0.0081782,-0.9891896,-0.1869593,0.0066356,-0.9823453,-0.2193531,0.0035026,-0.9756392,-0.234924,-0.0003456,-0.9720137,-0.2471299,-0.0026463,-0.9689787,-0.2580554,-0.003,-0.9661255,-0.268225,-0.0004294,-0.9633562,-0.2766192,0.0063133,-0.9609589,-0.2817072,0.0213037,-0.9592639,-0.2854697,0.0377771,-0.9576429,-0.2871754,0.056957,-0.9561831,-0.2874892,0.0785624,-0.9545564,-0.2884467,0.1007779,-0.9521777,-0.2896808,0.1209945,-0.9494448,-0.287616,0.139673,-0.9475065,-0.2820163,0.156681,-0.9465294,-0.2733431,0.1715709,-0.9464919,-0.2627323,0.1834186,-0.9472747,-0.2491033,0.187824,-0.9500893,-0.2340082,0.1887074,-0.9537451,-0.2178538,0.1873037,-0.9578398,-0.2009488,0.1843216,-0.9621045,-0.1834553,0.1799676,-0.9664139,-0.1674355,0.1768865,-0.9698848,-0.1521732,0.174571,-0.9728146,-0.1380756,0.1727021,-0.9752482,-0.1252019,0.1707664,-0.9773246,-0.1132378,0.1681023,-0.979244,-0.0997074,0.1637029,-0.981458,-0.0858241,0.1598544,-0.9834027,-0.0707113,0.1553773,-0.9853212,-0.0533177,0.149483,-0.9873257,-0.0324708,0.1417405,-0.9893712,-0.0076193,0.1312058,-0.9913259,0.0201428,0.1183348,-0.9927694,0.0494322,0.103511,-0.9933992,0.0803495,0.0869705,-0.9929653,0.1145374,0.0689819,-0.991021,0.1487724,0.0505777,-0.9875772,0.1772842,0.0337549,-0.9835807,0.1985052,0.0186993,-0.9799214,0.2118072,0.0057377,-0.9772946,0.2174829,-0.0048014,-0.9760523,0.2157321,-0.0121643,-0.9763768,0.2106613,-0.017264,-0.9774067,0.2029685,-0.0196638,-0.9789878,0.192954,-0.0193625,-0.9810167,0.1682213,-0.01176,-0.9856791],"leftShoulder":[-0.8827546,-0.3158159,-0.3478572,-0.8883335,-0.3101855,-0.338598,-0.9087138,-0.2880986,-0.3020569,-0.9301031,-0.2615592,-0.2578662,-0.9472719,-0.2363343,-0.2163839,-0.9609944,-0.2120682,-0.1775299,-0.9716389,-0.1890393,-0.1420631,-0.9801099,-0.1667041,-0.1076773,-0.9866292,-0.1449549,-0.0745048,-0.9914266,-0.1235139,-0.0426338,-0.9947363,-0.1017451,-0.0121509,-0.9967707,-0.0792145,0.0131609,-0.9977717,-0.0557675,0.0366285,-0.9978143,-0.0307306,0.0584995,-0.9967444,-0.0044656,0.080503,-0.9941705,0.0215734,0.1056391,-0.9894598,0.0457618,0.1373872,-0.982545,0.06899,0.1727593,-0.972887,0.090597,0.2127981,-0.9590209,0.1100386,0.2610947,-0.9376674,0.127041,0.3234817,-0.9091099,0.1422385,0.3915194,-0.8817523,0.1559015,0.4452052,-0.8544574,0.1679452,0.4916269,-0.8273753,0.1770478,0.5330142,-0.8034365,0.1808635,0.567255,-0.7892993,0.177455,0.5878064,-0.7771196,0.1713206,0.605586,-0.7659674,0.1614414,0.6222786,-0.761862,0.1448956,0.6313252,-0.7776518,0.116624,0.6177835,-0.7948031,0.0776045,0.601885,-0.8032476,0.045047,0.5939394,-0.8164039,0.0308585,0.5766562,-0.8387478,0.0365986,0.5432887,-0.8658258,0.0532066,0.4975086,-0.9106808,0.0699266,0.4071495,-0.9399372,0.0629981,0.3354838,-0.961072,0.0437437,0.2728133,-0.9772121,0.0195417,0.2113638,-0.9892425,-0.0064154,0.1461441,-0.9963649,-0.0362519,0.07709,-0.9975105,-0.0686026,0.0163227,-0.9938859,-0.1029307,-0.0399505,-0.9859212,-0.1385805,-0.0935673,-0.9739207,-0.1751022,-0.1442834,-0.9580785,-0.214774,-0.1896254,-0.9396178,-0.2559262,-0.2272009,-0.9195327,-0.2983007,-0.2558836,-0.8979894,-0.3410296,-0.2780537,-0.8740136,-0.3826571,-0.2994558,-0.8475102,-0.4207609,-0.3235532,-0.8180424,-0.4558054,-0.350782,-0.7860252,-0.4865438,-0.3813653,-0.7517236,-0.5124784,-0.4150633,-0.7151793,-0.5337294,-0.4512777,-0.6790101,-0.5488846,-0.4875151,-0.646132,-0.559795,-0.51879,-0.6205162,-0.5656098,-0.5431807,-0.6060897,-0.5662882,-0.5585454,-0.6064368,-0.5623761,-0.5621099,-0.6132046,-0.557846,-0.5592745,-0.6482629,-0.5552301,-0.5210324,-0.6888264,-0.5461875,-0.4766522,-0.7242677,-0.5292986,-0.4419042,-0.7547582,-0.5063798,-0.4170367,-0.7809638,-0.4779006,-0.4021277,-0.8045608,-0.4473701,-0.3905661,-0.8261968,-0.4150946,-0.3809137,-0.8463291,-0.3816619,-0.3715659,-0.8827546,-0.3158159,-0.3478572],"rightShoulder":[0.8074809,0.0287798,0.5891913,0.8063859,0.0256736,0.5908322,0.8034707,0.0143662,0.5951709,0.8009231,-0.0001864,0.5987672,0.7979755,-0.0169367,0.6024519,0.7904847,-0.0390493,0.6112356,0.7796341,-0.0643757,0.6229177,0.7716691,-0.0901175,0.6296075,0.7702276,-0.1147402,0.6273628,0.7773358,-0.1365939,0.6140775,0.7931226,-0.1541325,0.5892365,0.81799,-0.1686465,0.5499552,0.8589931,-0.1841255,0.4777327,0.9005108,-0.2023901,0.3848618,0.932961,-0.2245521,0.2813542,0.9523886,-0.2502921,0.1740974,0.9568396,-0.2756645,0.0920165,0.9536602,-0.3000771,0.0220444,0.9447682,-0.3237161,-0.0511956,0.9285398,-0.3462301,-0.1339351,0.9032107,-0.3666713,-0.2230753,0.8740093,-0.3835182,-0.2983649,0.8448649,-0.3971368,-0.358449,0.8177936,-0.4078187,-0.4060757,0.794078,-0.414719,-0.4443515,0.7746096,-0.4159538,-0.4764057,0.7823844,-0.4007225,-0.4767557,0.8195884,-0.378706,-0.4299496,0.8610447,-0.3513291,-0.3676547,0.8957339,-0.3205395,-0.3080832,0.9236709,-0.2874583,-0.2533768,0.945641,-0.2529007,-0.2044613,0.9636223,-0.2199019,-0.1519054,0.9769119,-0.1887363,-0.1001085,0.9858427,-0.1590761,-0.0529999,0.991485,-0.1294586,-0.0140698,0.994675,-0.1021273,0.0138421,0.9961225,-0.0780431,0.0406119,0.9960829,-0.0574176,0.0672462,0.9947946,-0.040316,0.0935861,0.9926175,-0.0264565,0.1183665,0.9898748,-0.0147627,0.1411736,0.9866447,-0.0039005,0.1628405,0.983114,0.0058256,0.1829016,0.9794383,0.0141893,0.2012445,0.9756953,0.0210676,0.2181165,0.9723345,0.0280132,0.2319071,0.9692214,0.0350615,0.2436814,0.9664012,0.0422837,0.2535367,0.9638178,0.0496037,0.2619061,0.9613056,0.0568037,0.2695644,0.9580562,0.0629503,0.2795809,0.9542229,0.0691895,0.2909837,0.9492856,0.0742608,0.3055195,0.9427586,0.0776087,0.3243194,0.9341834,0.0794019,0.3478458,0.9234722,0.080714,0.3750792,0.911438,0.0812982,0.4033254,0.8987953,0.0795772,0.4310852,0.8859907,0.0753023,0.4575479,0.8731198,0.0695494,0.4825191,0.8613825,0.0659814,0.5036532,0.8506727,0.0635484,0.5218406,0.8411005,0.0617165,0.5373463,0.8328822,0.0602057,0.550166,0.8263763,0.058995,0.5600194,0.8217117,0.05702,0.5670437,0.817556,0.0546113,0.5732537,0.814004,0.0509487,0.5786205,0.8112064,0.0456046,0.5829789,0.8074809,0.0287798,0.5891913],"leftArm":[-0.867262,-0.4886551,0.0952514,-0.864431,-0.4921724,0.1025932,-0.8521927,-0.5062139,0.1323446,-0.8345908,-0.524175,0.169407,-0.8146627,-0.5419341,0.2064754,-0.7927055,-0.5588596,0.2435034,-0.7695797,-0.5729353,0.2819435,-0.7434941,-0.5873356,0.3197708,-0.7148072,-0.6015968,0.3565558,-0.6847321,-0.6140226,0.3925789,-0.6553723,-0.6216425,0.4290078,-0.6265425,-0.6248132,0.4658895,-0.5960263,-0.6273169,0.5012246,-0.563147,-0.6297123,0.5350961,-0.5270566,-0.6337634,0.566176,-0.4870988,-0.6425438,0.5915,-0.4448647,-0.6586512,0.6068558,-0.4033685,-0.6758394,0.6168752,-0.3631647,-0.6912229,0.6247578,-0.3248842,-0.7029708,0.6326787,-0.2895733,-0.7103693,0.6415004,-0.2558308,-0.717042,0.6483837,-0.22163,-0.7192844,0.6584148,-0.1883775,-0.7169404,0.6712008,-0.1571071,-0.7095023,0.6869671,-0.1282484,-0.6954434,0.7070437,-0.1001741,-0.6802338,0.7261178,-0.0694981,-0.667551,0.7413135,-0.0540883,-0.6427177,0.7641913,-0.0705095,-0.5872467,0.806331,-0.1392098,-0.4749856,0.8689127,-0.209057,-0.3333917,0.9193178,-0.2398241,-0.2331725,0.9423985,-0.2502909,-0.1631129,0.9543315,-0.2538046,-0.1138052,0.9605372,-0.2597259,-0.0809338,0.9622849,-0.2699805,-0.1196891,0.9553978,-0.2784189,-0.1666501,0.9458914,-0.2890354,-0.2242796,0.9306757,-0.3076637,-0.2934773,0.9051045,-0.3407015,-0.3725123,0.8632248,-0.4138748,-0.4463478,0.7933986,-0.4942742,-0.5059674,0.7068875,-0.5693854,-0.5481886,0.6126088,-0.6330619,-0.5746022,0.5187148,-0.6840342,-0.5895334,0.42959,-0.7153675,-0.6018161,0.3550587,-0.7333724,-0.6151817,0.289338,-0.7400265,-0.6314015,0.2317173,-0.7374039,-0.6507333,0.181057,-0.7274732,-0.6725545,0.1358427,-0.7121084,-0.6958846,0.0929852,-0.6925554,-0.7196929,0.049083,-0.6731112,-0.7395265,0.0046728,-0.6569654,-0.7528593,-0.0399919,-0.6459349,-0.7586296,-0.0851417,-0.6415014,-0.755851,-0.1310164,-0.6387362,-0.7490354,-0.17596,-0.6342088,-0.741957,-0.2174372,-0.6311359,-0.7347473,-0.248624,-0.6395921,-0.7235242,-0.2596819,-0.6942602,-0.6861989,-0.2171035,-0.7416891,-0.6461469,-0.1799763,-0.7802531,-0.607889,-0.1472275,-0.8104021,-0.5739519,-0.1175911,-0.8333553,-0.5455925,-0.0885875,-0.8491163,-0.5249159,-0.0588635,-0.8602224,-0.509132,-0.0283207,-0.8672692,-0.4978324,0.002648,-0.8706204,-0.4907961,0.0337544,-0.867262,-0.4886551,0.0952514],"rightArm":[0.0149758,-0.5268206,0.8498446,0.0153511,-0.5158667,0.8565313,0.0206268,-0.4647321,0.885211,0.0350436,-0.3961656,0.9175101,0.0580597,-0.3236932,0.944379,0.0891397,-0.2511964,0.9638228,0.1243618,-0.1747088,0.9767349,0.1593089,-0.1121261,0.9808407,0.19324,-0.0761663,0.9781907,0.229548,-0.0773734,0.970217,0.2764083,-0.1245409,0.9529365,0.3581776,-0.2404435,0.9021617,0.4521929,-0.35622,0.8176973,0.5469149,-0.4459519,0.7085273,0.6314564,-0.4992128,0.5933375,0.6959448,-0.5219803,0.4931504,0.7406835,-0.5359096,0.4052023,0.7690715,-0.554472,0.3179462,0.785022,-0.5717961,0.238306,0.7922177,-0.5863728,0.1689914,0.7942744,-0.597851,0.1081772,0.7864302,-0.6159941,0.0455933,0.7736978,-0.6331867,-0.0215948,0.7602717,-0.6438925,-0.0859623,0.7513462,-0.6465668,-0.1320239,0.7531179,-0.6436119,-0.136298,0.7619027,-0.6437232,-0.0715867,0.7613574,-0.6483079,-0.0056392,0.7530229,-0.6554052,0.0583144,0.7372341,-0.6652267,0.1181498,0.7121666,-0.6804928,0.1724767,0.6740187,-0.7068129,0.2147426,0.6309984,-0.7349874,0.248263,0.5831293,-0.7659748,0.2706343,0.5325708,-0.7985335,0.2805574,0.4837654,-0.829684,0.2785596,0.4453649,-0.8531234,0.2717179,0.4104869,-0.8736757,0.2611346,0.3786162,-0.8916956,0.2480497,0.3499471,-0.9070712,0.2340062,0.3254837,-0.9192847,0.2213054,0.3077904,-0.927605,0.2116933,0.2938104,-0.9338764,0.2038391,0.2831072,-0.9382608,0.1987887,0.2755225,-0.9408293,0.1973007,0.2712812,-0.9415304,0.1998173,0.2720395,-0.9398452,0.2066048,0.2747056,-0.9369983,0.2158031,0.2791391,-0.9329085,0.227515,0.2852462,-0.9273796,0.2420778,0.2929708,-0.9200909,0.2600015,0.2996303,-0.9118005,0.2807874,0.3047827,-0.9039886,0.2998534,0.3082474,-0.89581,0.3201688,0.310085,-0.8865031,0.3434525,0.3106168,-0.8754146,0.37036,0.3089736,-0.8625741,0.400626,0.3056848,-0.8478507,0.4332506,0.3027939,-0.8303623,0.467776,0.3005903,-0.8096489,0.5040973,0.2973256,-0.7856939,0.5424782,0.2874688,-0.7621959,0.5800164,0.2733736,-0.7389666,0.6157883,0.2552611,-0.7157389,0.6500459,0.2333607,-0.6924602,0.6826725,0.2079594,-0.6692982,0.7132972,0.1782889,-0.646973,0.7413764,0.1463755,-0.6241252,0.7674906,0.1130057,-0.601009,0.7912129,0.0792002,-0.5773243,0.8126648,0.0149758,-0.5268206,0.8498446],"leftForeArm":[0.4117106,-0.590153,-0.6944162,0.4152057,-0.5895133,-0.6928769,0.4277334,-0.5870121,-0.687358,0.4410505,-0.5827078,-0.6825878,0.4508691,-0.5783677,-0.6798587,0.4573272,-0.5741519,-0.6791181,0.4586649,-0.5720265,-0.6800089,0.4558322,-0.5712654,-0.6825488,0.4491905,-0.5723487,-0.6860356,0.4396495,-0.575133,-0.689877,0.428231,-0.5788103,-0.6939717,0.4136443,-0.5867327,-0.6961631,0.3978548,-0.5950625,-0.6982923,0.3814293,-0.6021966,-0.7013351,0.364619,-0.6080144,-0.7052457,0.3483419,-0.61378,-0.7084717,0.3352651,-0.6214413,-0.7081016,0.323999,-0.63051,-0.7053239,0.3157956,-0.6377642,-0.7025169,0.3106736,-0.6402713,-0.7025201,0.3075264,-0.6352813,-0.7084103,0.3028549,-0.6326265,-0.7127851,0.2982602,-0.6330598,-0.7143361,0.2944604,-0.6346148,-0.7145328,0.2933414,-0.6374514,-0.7124651,0.2987299,-0.6440187,-0.7042729,0.3157544,-0.6599924,-0.6816958,0.3363189,-0.6773598,-0.6542731,0.3705423,-0.6827893,-0.6296803,0.4253837,-0.6653029,-0.6135314,0.5046541,-0.6147811,-0.6061092,0.5656048,-0.5774011,-0.5888117,0.5998805,-0.5628054,-0.5686769,0.6109645,-0.5507719,-0.5686586,0.5965739,-0.5312597,-0.6015503,0.5566106,-0.4958039,-0.6666057,0.525759,-0.4293647,-0.7343184,0.4993368,-0.3559108,-0.7899306,0.4802597,-0.2775675,-0.8320498,0.4740027,-0.1967723,-0.8582552,0.4871973,-0.1177239,-0.8653207,0.5443529,-0.0671313,-0.8361658,0.6090283,-0.04167,-0.7920531,0.6674765,-0.0423628,-0.7434249,0.7122883,-0.065735,-0.698802,0.741355,-0.1057375,-0.6627309,0.750227,-0.1546621,-0.6428367,0.7438481,-0.2020986,-0.6370606,0.7238541,-0.2453029,-0.6448734,0.6912607,-0.2841323,-0.6644001,0.6464275,-0.3204755,-0.6924066,0.5871503,-0.361711,-0.7241683,0.518508,-0.4034598,-0.7539029,0.4420511,-0.4478041,-0.7772145,0.3595546,-0.4945981,-0.7912605,0.2729053,-0.5417092,-0.7950307,0.1864774,-0.5875815,-0.7873844,0.1036553,-0.6269733,-0.772114,0.0309068,-0.6599353,-0.7506865,-0.0226421,-0.6866153,-0.7266683,-0.0447357,-0.7072359,-0.7055608,0.0054684,-0.7139843,-0.7001403,0.0718728,-0.7126137,-0.6978653,0.1369768,-0.708143,-0.6926549,0.1920015,-0.7022607,-0.6855402,0.2388052,-0.6942613,-0.6789501,0.2769323,-0.6834118,-0.6754678,0.3107941,-0.669887,-0.6742836,0.340577,-0.6534998,-0.6759773,0.3669366,-0.6341903,-0.6805588,0.4117106,-0.590153,-0.6944162],"rightForeArm":[-0.3116944,-0.6896797,-0.6535966,-0.3240605,-0.6883328,-0.648986,-0.3650165,-0.6821432,-0.6335958,-0.4040226,-0.6684197,-0.6244845,-0.4317948,-0.6461324,-0.6293379,-0.4592186,-0.6104021,-0.6453895,-0.4815279,-0.5689417,-0.6666605,-0.4950073,-0.5216645,-0.6948625,-0.5005935,-0.4629499,-0.731494,-0.5034612,-0.3846676,-0.7736651,-0.5141762,-0.2756675,-0.8121762,-0.556895,-0.128978,-0.8205076,-0.6197528,-0.0067181,-0.7847683,-0.6868391,0.0636997,-0.7240127,-0.7405177,0.0725148,-0.6681131,-0.7633943,0.0287522,-0.6452925,-0.7512042,-0.0612167,-0.657225,-0.7091357,-0.1507582,-0.688766,-0.6397675,-0.2351999,-0.7316957,-0.5474988,-0.3105532,-0.7770468,-0.4366598,-0.3721291,-0.8190532,-0.3074111,-0.4181766,-0.8547671,-0.1728906,-0.4478065,-0.8772561,-0.0457548,-0.4643327,-0.8844782,0.056309,-0.4703363,-0.880689,0.1120446,-0.4688244,-0.8761562,0.0943444,-0.4535278,-0.8862346,0.0572312,-0.4345821,-0.898812,0.0198165,-0.4125694,-0.9107106,-0.008135,-0.3883321,-0.9214836,-0.025889,-0.3602487,-0.932497,-0.0328207,-0.3335198,-0.9421716,-0.0345375,-0.3076983,-0.9508569,-0.0314108,-0.2856181,-0.9578286,-0.0253112,-0.2708672,-0.9622839,-0.0191776,-0.2674927,-0.963369,-0.0198406,-0.2787454,-0.9601601,-0.0242969,-0.2929503,-0.9558189,-0.031458,-0.3089382,-0.9505617,-0.0407981,-0.3264764,-0.9443245,-0.0522515,-0.3464922,-0.9365965,-0.065129,-0.3714461,-0.9261674,-0.0791047,-0.3983563,-0.9138133,-0.0946059,-0.4260386,-0.8997449,-0.1114072,-0.4538,-0.884112,-0.1285695,-0.4815722,-0.8669245,-0.1456015,-0.5113343,-0.8469577,-0.163537,-0.540684,-0.8251766,-0.1822733,-0.569278,-0.8016851,-0.2017413,-0.596349,-0.7769609,-0.2219869,-0.6207144,-0.7519544,-0.2421017,-0.6401668,-0.7290907,-0.2600502,-0.6578571,-0.7068224,-0.276232,-0.6719341,-0.6871684,-0.2907521,-0.6813895,-0.6716931,-0.3031471,-0.6861568,-0.6612796,-0.3124516,-0.686499,-0.6565769,-0.3198224,-0.6848837,-0.6547121,-0.3287058,-0.6830999,-0.652171,-0.3403183,-0.6808933,-0.648512,-0.3530265,-0.6761347,-0.6466948,-0.3588429,-0.6714974,-0.6483233,-0.3608935,-0.667484,-0.6513225,-0.359525,-0.6642435,-0.6553796,-0.3553362,-0.6620421,-0.6598761,-0.3492266,-0.6612898,-0.66388,-0.3409811,-0.662657,-0.6667965,-0.3313937,-0.665891,-0.6684066,-0.3219273,-0.6704332,-0.6684924,-0.3142403,-0.6759717,-0.6665698,-0.3116944,-0.6896797,-0.6535966],"leftUpLeg":[-0.0835124,-0.4355117,0.8963009,-0.0904513,-0.4245937,0.9008545,-0.1114847,-0.3946828,0.9120289,-0.128963,-0.3761576,0.9175369,-0.1369842,-0.3811496,0.9143087,-0.1407524,-0.4017559,0.9048651,-0.1476119,-0.4376013,0.88697,-0.1585523,-0.478223,0.8638078,-0.1746883,-0.5168382,0.8380706,-0.1963923,-0.5502194,0.8115964,-0.2239939,-0.5781658,0.7845706,-0.2571651,-0.6012811,0.756523,-0.2945829,-0.6211396,0.7262275,-0.3374674,-0.6371012,0.6929775,-0.3861075,-0.6477759,0.6567399,-0.4392118,-0.6519668,0.6180876,-0.4989127,-0.6448133,0.5790526,-0.5602856,-0.6282877,0.5397542,-0.6223517,-0.6023983,0.4997946,-0.6835547,-0.5676176,0.4588717,-0.7419247,-0.5255317,0.4163701,-0.793544,-0.4839532,0.3688866,-0.8387257,-0.4419918,0.318092,-0.8781398,-0.4016774,0.2598574,-0.9121188,-0.363751,0.1890094,-0.9396016,-0.3273636,0.0999096,-0.9566511,-0.2911375,-0.0075949,-0.9615809,-0.2489754,-0.1156439,-0.9549779,-0.2019241,-0.2173566,-0.9393712,-0.1528684,-0.3069415,-0.9188927,-0.1061122,-0.379969,-0.9062716,-0.0838118,-0.4143034,-0.9073004,-0.0999726,-0.4084257,-0.9200555,-0.124508,-0.3714776,-0.9392089,-0.1402458,-0.313397,-0.9590665,-0.1443183,-0.2436466,-0.9711466,-0.1463447,-0.1883019,-0.9769569,-0.1544844,-0.1472745,-0.9794614,-0.1665897,-0.1135927,-0.9797839,-0.1820894,-0.0828668,-0.9780776,-0.2012116,-0.0536472,-0.9724779,-0.2314783,-0.0265424,-0.9635678,-0.2674632,-0.0006996,-0.9514096,-0.307004,0.0238412,-0.9358987,-0.34911,0.0470717,-0.91657,-0.3938751,0.069007,-0.892815,-0.4412169,0.0906036,-0.8656791,-0.4878396,0.112304,-0.8352258,-0.5332881,0.13417,-0.8015325,-0.5771532,0.1563325,-0.7646786,-0.6190528,0.1789978,-0.7244809,-0.6590281,0.2020132,-0.6819336,-0.6956654,0.2258678,-0.6369439,-0.7290313,0.2506311,-0.5895912,-0.7588582,0.2766161,-0.5402271,-0.7845594,0.3043372,-0.4915627,-0.8033725,0.3360932,-0.4408142,-0.8177937,0.3699951,-0.389232,-0.8269038,0.4058677,-0.3383846,-0.8299361,0.4435109,-0.2902188,-0.8263501,0.4826164,-0.2462779,-0.8158359,0.5232198,-0.2077626,-0.7986997,0.5647242,-0.1741216,-0.7751519,0.6073066,-0.1448869,-0.7454804,0.6505895,-0.119713,-0.7102528,0.6936929,-0.098569,-0.672793,0.7332351,-0.0824555,-0.633046,0.7697102,-0.0721273,-0.5906389,0.803706,-0.0683409,-0.5448184,0.8357646,-0.0835124,-0.4355117,0.8963009],"rightUpLeg":[0.8653465,-0.1346527,-0.4827464,0.8718161,-0.1454217,-0.467749,0.893598,-0.1859038,-0.4085614,0.912179,-0.2322081,-0.3376519,0.921564,-0.2748565,-0.2741783,0.9226317,-0.3168777,-0.2198619,0.9174103,-0.357987,-0.1737917,0.9081735,-0.3977354,-0.1304894,0.8953245,-0.4363793,-0.0892585,0.8787204,-0.4747071,-0.050036,0.8576908,-0.5139911,-0.0134006,0.8326088,-0.5534509,0.0213229,0.8040783,-0.591931,0.0554597,0.771357,-0.6302434,0.0883265,0.7349386,-0.6674196,0.1200682,0.6965924,-0.7012401,0.1517279,0.6563061,-0.7316527,0.1842458,0.6148224,-0.758059,0.2175773,0.5713005,-0.7812988,0.251372,0.5251501,-0.8017416,0.2853554,0.47577,-0.8195792,0.3192692,0.4218724,-0.8351295,0.3529623,0.365343,-0.8469626,0.3862369,0.3068457,-0.8542889,0.4195667,0.2475605,-0.8561705,0.4535261,0.1894016,-0.8515605,0.4888474,0.1374018,-0.8384557,0.527364,0.0897257,-0.8187249,0.5671321,0.0471439,-0.7946429,0.6052439,0.0108241,-0.7680864,0.6402548,-0.0176695,-0.7402284,0.6721233,-0.0343215,-0.7131285,0.7001926,-0.0467027,-0.6863294,0.7257898,-0.0522761,-0.6610967,0.7484774,-0.0500838,-0.6384399,0.7680404,-0.0402341,-0.6188385,0.7844872,-0.0260795,-0.6053866,0.7955042,-0.0111943,-0.5951127,0.8035643,0.0041953,-0.5876387,0.8091126,0.0198351,-0.582363,0.8126869,0.0354131,-0.5784794,0.8149279,0.0515516,-0.5781168,0.8143239,0.0678352,-0.5801057,0.8117116,0.0840519,-0.5842125,0.8072367,0.1004937,-0.590742,0.8005779,0.1180385,-0.6004246,0.7909218,0.1381385,-0.6146531,0.7766076,0.1604837,-0.6314635,0.7586164,0.1859049,-0.6507126,0.7362149,0.2154129,-0.6717857,0.7087321,0.2502095,-0.6935321,0.6755801,0.2929483,-0.7137549,0.6361881,0.3420234,-0.7282436,0.5938698,0.3983445,-0.7350763,0.5486205,0.4622696,-0.7320282,0.5004414,0.5334569,-0.7166182,0.449313,0.612495,-0.6849414,0.3945949,0.691581,-0.6387523,0.337211,0.7668941,-0.5783927,0.2780922,0.834576,-0.5057039,0.2185096,0.8913616,-0.4240474,0.1601823,0.9320508,-0.3478367,0.1014443,0.9599583,-0.2783671,0.0314941,0.9736466,-0.2222687,-0.0510782,0.971932,-0.1820283,-0.1490431,0.9512152,-0.1573202,-0.2654054,0.9163475,-0.1375365,-0.3760198,0.8859956,-0.108159,-0.4509029,0.8701741,-0.0890653,-0.4846282,0.8671237,-0.0894574,-0.4899938,0.8653465,-0.1346527,-0.4827464],"leftLeg":[-0.3998552,0.0641577,0.9143301,-0.3952536,0.0510398,0.917153,-0.3771518,0.0173121,0.9259896,-0.3536778,-0.0004152,0.9353672,-0.3292355,0.0098231,0.9441968,-0.3015505,0.0364187,0.9527544,-0.2728857,0.0576947,0.9603149,-0.2454733,0.0754735,0.9664609,-0.2203333,0.0937651,0.9709075,-0.1954866,0.1127689,0.9742013,-0.1677681,0.1285888,0.9774041,-0.1391714,0.1426391,0.9799415,-0.1068799,0.1541817,0.9822447,-0.0685579,0.1617582,0.9844461,-0.0238076,0.1645638,0.9860791,0.026045,0.1628386,0.9863089,0.0802482,0.1544006,0.984744,0.134676,0.1389888,0.9810935,0.1888615,0.1164038,0.9750803,0.2413357,0.0866565,0.9665649,0.289486,0.0502325,0.9558632,0.3291821,0.0078636,0.9442337,0.361748,-0.0398972,0.9314218,0.385976,-0.0906712,0.9180421,0.4015575,-0.1417239,0.9048016,0.4090175,-0.1895425,0.8926244,0.4056151,-0.2436411,0.8809741,0.3909531,-0.3027687,0.8691874,0.3669591,-0.3634466,0.8562988,0.3370512,-0.4213817,0.8419228,0.3064493,-0.4714914,0.8269127,0.2947889,-0.490197,0.8202478,0.3086648,-0.4646482,0.8299567,0.3427182,-0.4239161,0.8383552,0.3889441,-0.3875135,0.8357965,0.4373079,-0.3650289,0.8218977,0.4645017,-0.3478145,0.8144097,0.4798668,-0.3221661,0.8160496,0.4884749,-0.2921158,0.8222291,0.4933314,-0.2598816,0.8301118,0.4950386,-0.2266647,0.8387848,0.4917553,-0.1907914,0.8495736,0.4842629,-0.1526332,0.861506,0.4720906,-0.1133337,0.8742345,0.4554221,-0.0735672,0.8872308,0.4349553,-0.0334801,0.8998294,0.4119466,0.0073044,0.9111787,0.3852142,0.0470073,0.9216292,0.3548948,0.0851546,0.9310201,0.3211673,0.1214937,0.9391969,0.2841932,0.1559982,0.9459909,0.2432703,0.18831,0.9515035,0.199658,0.2164244,0.9556658,0.1534924,0.2402601,0.9584963,0.1050302,0.2601126,0.959849,0.0544627,0.276758,0.959395,0.0035323,0.2973864,0.9547507,-0.0490834,0.3128129,0.9485457,-0.1017762,0.3225625,0.9410606,-0.1531672,0.3268958,0.9325658,-0.2024273,0.3266849,0.923201,-0.2468077,0.3215706,0.9141544,-0.2854442,0.3137419,0.9055869,-0.3190993,0.3020547,0.8982976,-0.3478129,0.2851435,0.8931514,-0.3714994,0.2616168,0.8908114,-0.3890321,0.2336781,0.891094,-0.4019821,0.2034343,0.8927625,-0.4101451,0.1722087,0.8956144,-0.4133481,0.1403245,0.8996957,-0.3998552,0.0641577,0.9143301],"rightLeg":[-0.6527113,-0.3838081,0.6531916,-0.664045,-0.3726961,0.6481835,-0.7044349,-0.3308412,0.6279455,-0.7447214,-0.2826873,0.6045477,-0.772515,-0.2388342,0.5883696,-0.7892064,-0.1957238,0.5821044,-0.7960975,-0.1559602,0.5847266,-0.7981027,-0.1181688,0.5908199,-0.7959569,-0.0818689,0.5997918,-0.7898579,-0.0458148,0.6115762,-0.7791791,-0.0079665,0.6267507,-0.7648179,0.0282682,0.643626,-0.7476318,0.0642196,0.6610012,-0.7267789,0.101086,0.6793924,-0.7020242,0.1384436,0.6985666,-0.6747175,0.1743349,0.7171915,-0.6462487,0.2078729,0.7342693,-0.6161805,0.2379436,0.7508025,-0.5837856,0.266531,0.766913,-0.5476345,0.2948481,0.783046,-0.5065374,0.3227495,0.7995328,-0.4617158,0.3455455,0.8169558,-0.4119863,0.3641881,0.835245,-0.3580806,0.3783075,0.8536169,-0.3011284,0.3872319,0.8714202,-0.2426013,0.3904547,0.888082,-0.1879785,0.3850319,0.9035566,-0.1321519,0.3734282,0.9181978,-0.0779374,0.3592928,0.9299648,-0.0287134,0.34515,0.9381082,0.0122806,0.3329798,0.942854,0.0390263,0.3237846,0.9453256,0.0609557,0.3126953,0.9478956,0.0764838,0.3029673,0.9499269,0.0852099,0.2986524,0.9505504,0.0876038,0.3042235,0.948564,0.0869526,0.3128768,0.9458051,0.0850071,0.3214275,0.9431109,0.0818844,0.3292271,0.9406936,0.0781788,0.3344669,0.9391592,0.0751162,0.3342306,0.9394932,0.0731084,0.3223492,0.9437935,0.0714318,0.3049486,0.9496862,0.0698688,0.2845198,0.9561207,0.0681565,0.2633396,0.9622926,0.0659969,0.2434931,0.9676546,0.0626261,0.229284,0.9713428,0.0562298,0.2211327,0.9736214,0.0454454,0.2199697,0.9744476,0.0287915,0.226415,0.9736053,0.0046296,0.2407232,0.9705828,-0.030519,0.2644644,0.9639124,-0.0729824,0.2889043,0.9545721,-0.124361,0.3105787,0.9423774,-0.1855893,0.325291,0.9272229,-0.2564848,0.3283775,0.9090565,-0.3381362,0.3119173,0.8879029,-0.4191063,0.2737001,0.865701,-0.494377,0.2164429,0.8418693,-0.560831,0.1431295,0.8154646,-0.6164974,0.0579475,0.7852216,-0.6624443,-0.0386835,0.7481118,-0.7025718,-0.1383285,0.6980388,-0.7321898,-0.2308868,0.6407725,-0.7466996,-0.3076492,0.5897387,-0.7408477,-0.3726535,0.5588149,-0.7124942,-0.4315681,0.553264,-0.6866259,-0.4714452,0.5534296,-0.6700374,-0.4871807,0.5600936,-0.6619825,-0.4747821,0.5799665,-0.6527113,-0.3838081,0.6531916]}`)};function ku(e,t,n=!1){let r=e.parent??e;r.updateMatrixWorld(!0);let i=e.parent?.getWorldQuaternion(new D)??new D,a=i.clone().invert(),o=t.map(({bone:e})=>({local:e.quaternion.clone(),canonical:a.clone().multiply(e.getWorldQuaternion(new D))})),s=Ou.rotations,c=Ou.directions,l=Ou.chains,u=n?1.4:Ou.duration,d=n?Array.from({length:43},(e,t)=>t*u/42):Ou.times,f=t.map(()=>[]),p=new D,m=new D;for(let e=0;e<d.length;e++)n&&(Du(t,`crawl`,d[e]/u*Math.PI*2/9.5,10),r.updateMatrixWorld(!0)),t.forEach(({bone:r,role:a},u)=>{if(!n&&s[a]){p.fromArray(s[a],e*4).normalize(),r.parent?.getWorldQuaternion(m),r.quaternion.copy(m.invert().multiply(i).multiply(p).multiply(o[u].canonical)).normalize(),r.updateWorldMatrix(!1,!0);let n=t.find(e=>e.role===l[a])?.bone;if(n&&c[a]){let t=n.getWorldPosition(new V).sub(r.getWorldPosition(new V)).normalize(),o=new V().fromArray(c[a],e*3).applyQuaternion(i).normalize(),s=new D().setFromUnitVectors(t,o),l=r.parent.getWorldQuaternion(new D);r.quaternion.premultiply(l.clone().invert().multiply(s).multiply(l)).normalize(),r.updateWorldMatrix(!1,!0)}}(n||s[a])&&f[u].push(...r.quaternion.toArray())});t.forEach(({bone:e},t)=>e.quaternion.copy(o[t].local)),r.updateMatrixWorld(!0);let h=t.flatMap(({bone:e},t)=>f[t].length?[new le(`${e.name}.quaternion`,d,f[t])]:[]);if(h.length<12)throw Error(`Wall crawl requires a complete humanoid limb mapping`);return new yn(n?`local-wall-crawl`:`retargeted-wall-crawl`,u,h)}function Au(e,t,n,r){n=Math.min(n,e.duration);let i=e.tracks.map(e=>{let r=[t,...Array.from(e.times).filter(e=>e>t&&e<n),n],i=e.getInterpolation()===2300?e.InterpolantFactoryMethodDiscrete():e.InterpolantFactoryMethodLinear(),a=e.clone();return a.times=new Float32Array(r.map(e=>e-t)),a.values=new Float32Array(r.flatMap(e=>Array.from(i.evaluate(e)))),a});return new yn(r,n-t,i)}var ju=e=>e.toLowerCase().replace(/[^a-z0-9]/g,``),Mu={leap:[`specialintro`,0,1.5],releaseFlip:[`entry`,.95,2.12],releaseTurn:[`basicsidehandspringrm`,.28,1.52],swing:[`speciala`,0,2.0333333],zip:[`ultimateflyoffscreen`,.12,.86],fall:[`dropin`,0,.43],landing:[`dropin`,.43,1.1333333],dive:[`speciald`,0,.82]},Nu=class{constructor(e){this.derived=[],this.firstFrame=!0,this.entryTime=1/0,this.landingTime=1/0,this.wasGrounded=!0,this.wasLobby=!1,this.previousPose=`idle`,this.releaseTime=1/0,this.releaseCount=0;let t=t=>{let n=e.find(e=>ju(e.name)===`armatureanimspidermanpavitr${t}`);if(!n)throw Error(`Pavitr native clip missing: ${t}`);return n};this.entry=t(`entry`),this.segments=Object.fromEntries(Object.entries(Mu).map(([e,[n,r,i]])=>{let a=Au(t(n),r,i,`pavitr-native:${e}`);return this.derived.push(a),[e,a]}))}select(e,t){let n=t.pose===`idle`||t.pose===`perch`;this.firstFrame&&=((t.lobby||t.grounded&&n)&&(this.entryTime=0),!1),t.lobby&&!this.wasLobby&&(this.entryTime=0),!t.lobby&&this.wasLobby&&(this.entryTime=1/0),this.wasLobby=!!t.lobby,!t.lobby&&(!t.grounded||!n)&&(this.entryTime=1/0),!t.lobby&&!this.wasGrounded&&t.grounded&&n&&(this.landingTime=0),(!t.grounded||!n)&&(this.landingTime=1/0),!t.grounded&&[`jump`,`fall`].includes(t.pose)&&[`swing`,`zip`].includes(this.previousPose)&&(this.release=this.releaseCount++%2?this.segments.releaseTurn:this.segments.releaseFlip,this.releaseTime=0),(t.grounded||![`jump`,`fall`].includes(t.pose))&&(this.releaseTime=1/0,this.release=void 0),this.wasGrounded=t.grounded,this.previousPose=t.pose;let r=(e,t=1,n=!1)=>({clip:e,loop:tt,rate:t,bodySupport:n});if(this.entryTime<this.entry.duration)return this.entryTime+=e,r(this.entry,1,!0);if(!t.lobby){if(this.landingTime<this.segments.landing.duration)return this.landingTime+=e,r(this.segments.landing,1,!0);if(this.release&&this.releaseTime<this.release.duration)return this.releaseTime+=e,r(this.release);if(this.release)return{clip:this.segments.fall,loop:Tn,rate:.55};switch(t.pose){case`jump`:return r(this.segments.leap);case`zip`:return r(this.segments.zip,1.3);case`fall`:return{clip:this.segments.fall,loop:Tn,rate:.55};case`dive`:return r(this.segments.dive);case`swing`:return{clip:this.segments.swing,loop:Tn,rate:.7+(t.tension??0)*.4};default:return}}}},Pu={coil:[`power_5`,.12,.5],rise:[`power_13`,.15,.74],ignite:[`fly_slow`,0,.4],boost:[`attack_heavy1`,.1,.3333333],redirect:[`power_14`,.16,.48],tuck:[`power_7`,.6,1.17],drift:[`jump_start`,.5,1.1],landing:[`power_6`,.62,1.2]},Fu=class{constructor(e){this.previousGrounded=!0,this.previousPowered=!1,this.previousBoost=!1,this.previousLobby=!1,this.lobbyTime=0,this.sequence=[],this.sequenceTime=0,this.sequenceKind=null,this.fast=!1,this.cruiseBlend=0,this.source=new Map(e.map(e=>[e.name,e])),this.segments=Object.fromEntries(Object.entries(Pu).map(([e,[t,n,r]])=>{let i=this.source.get(t);if(!i)throw Error(`Iron Man native clip missing: ${t}`);return[e,Au(i,n,r,`ironman-native:${e}`)]}));for(let e of[`menu_idle`,`menu_action`,`menu_goodbye`,`fly_idle`,`fly_slow`,`fly_fast`,`jump_start`])if(!this.source.has(e))throw Error(`Iron Man native clip missing: ${e}`);this.derived=Object.values(this.segments)}start(e,t){this.sequenceKind=e,this.sequenceTime=0,this.sequence=t.map(e=>({clip:this.segments[e],rate:e===`coil`?1.8:e===`rise`?1.4:1.15}))}select(e,t){let n=!t.grounded&&(t.pose===`hover`||t.pose===`fly`),r=t.boost??(t.pose===`fly`&&(t.speed??0)>62),i=t.pose===`idle`||t.pose===`perch`;t.lobby?this.sequence=[]:(n&&this.previousGrounded?this.start(`powered`,[`coil`,`rise`,`ignite`]):n&&!this.previousPowered?this.start(`powered`,[`boost`,`ignite`]):n&&r&&!this.previousBoost?this.start(`powered`,[`redirect`]):!n&&this.previousPowered&&!t.grounded?this.start(`fall`,[`tuck`]):t.grounded&&!this.previousGrounded&&i&&this.start(`landing`,[`landing`]),(this.sequenceKind===`powered`&&!n||this.sequenceKind===`fall`&&(n||t.grounded)||this.sequenceKind===`landing`&&(!t.grounded||!i))&&(this.sequence=[])),this.previousGrounded=t.grounded,this.previousPowered=n,this.previousBoost=r,t.lobby&&!this.previousLobby&&(this.lobbyTime=0),this.previousLobby=!!t.lobby,this.lobbyTime+=e;let a=(e,t=Mn,n=1,r=!1)=>({clip:e,loop:t,rate:n,bodySupport:r}),o=e=>this.source.get(e),s=this.sequence.length===0||this.sequence[0].clip===this.segments.redirect;if(this.cruiseBlend=G.damp(this.cruiseBlend,t.pose===`fly`&&n&&s?1:0,5,e),t.lobby){if(this.lobbyTime<2.5)return a(o(`menu_goodbye`),tt);let e=(this.lobbyTime-2.5)%12;return e>3&&e<4.5?a(o(`menu_action`),tt):a(o(`menu_idle`))}if(this.sequence.length){let t=this.sequence[0];return this.sequenceTime+=e*t.rate,this.sequenceTime>=t.clip.duration&&(this.sequence.shift(),this.sequenceTime=0),a(t.clip,tt,t.rate,this.sequenceKind===`landing`)}if(t.grounded)return i?a(o(`menu_idle`)):void 0;if(t.pose===`hover`)return a(o((t.speed??0)>6?`fly_slow`:`fly_idle`));if(t.pose===`fly`)return(t.speed??0)>50||r?this.fast=!0:(t.speed??0)<42&&(this.fast=!1),a(o(this.fast?`fly_fast`:`fly_slow`),Mn,r?1.2:1);if(t.pose===`jump`)return a(o(`jump_start`),tt);if(t.pose===`fall`||t.pose===`dive`)return a(this.segments.drift,Tn,.7)}},Iu=e=>e.toLowerCase().replace(/[^a-z0-9]/g,``),Lu={jump:`Flying Knee Punch Combo`,dive:`Flying Knee Punch Combo`,swing:`Swing to Land`,zip:`Swing to Land`,fall:`Swing to Land`},Ru=class{constructor(e){let t=t=>{let n=e.find(e=>Iu(e.name)===Iu(t));if(!n)throw Error(`Symbiote native clip missing: ${t}`);return n},n=t(Lu.jump),r=t(Lu.swing);this.clips={jump:n,dive:n,swing:r,zip:r,fall:r}}select(e,t){if(t.lobby||t.pose===`crawl`||t.pose===`wall`)return;let n=this.clips[t.pose];if(!n)return;let r=G.clamp(t.tension??0,0,1);return{clip:n,loop:Mn,rate:t.pose===`swing`?.9+r*.2:1}}},zu=e=>e.toLowerCase().replace(/[^a-z0-9]/g,``),Bu=class{constructor(e){this.previousPose=`idle`;let t=t=>{let n=e.find(e=>zu(e.name)===zu(t));if(!n)throw Error(`Ultimate Alliance Spider-Man clip missing: ${t}`);return n},n=t(`zone_attilan1.zone5`),r=Su(n,n.duration,`mua-native:stand`),i=t(`idle`),a=Su(i,Math.min(.568,i.duration),`mua-native:perch`);this.native={stand:r,perch:a,run:t(`run`),walk:t(`walk`),jump:t(`jump_start`),doubleJump:t(`jumpdouble_start`),swing:t(`power_8_loop`),zip:t(`power_8_start`),aerial:t(`power_10`)},this.derived=[r,a]}select(e,t){if(t.lobby)return this.previousPose=t.pose,{clip:this.native.stand,loop:Mn,rate:1};if(t.pose===`crawl`||t.pose===`wall`){this.previousPose=t.pose;return}let n=(e,t=1)=>({clip:e,loop:tt,rate:t}),r;switch(t.pose){case`idle`:r={clip:this.native.stand,loop:Mn,rate:1};break;case`perch`:r={clip:this.native.perch,loop:Mn,rate:1};break;case`run`:r={clip:this.native.run,loop:Mn,rate:G.clamp((t.speed??8)/9,.7,1.7)};break;case`jump`:r=n([`swing`,`zip`].includes(this.previousPose)?this.native.doubleJump:this.native.jump,1.08);break;case`swing`:r={clip:this.native.swing,loop:Mn,rate:1};break;case`zip`:r=n(this.native.zip,1.2);break;case`fall`:r=n(this.native.aerial,.9);break;case`dive`:r=n(this.native.aerial,1.15);break;default:r=void 0}return this.previousPose=t.pose,r}};function Vu(e){let t=e.duration;if(!Number.isFinite(t)||t<=0)return e.clone();let n=Math.max(2,Math.ceil(t*60)),r=Math.min(.12,t*.2),i=new Float32Array(Array.from({length:n+1},(e,r)=>r*t/n)),a=e.tracks.map(e=>{let n=e.clone();if(![`number`,`vector`,`quaternion`,`color`].includes(e.ValueTypeName))return n;let a=e.getValueSize(),o=e.getInterpolation()===2300?e.InterpolantFactoryMethodDiscrete():e.InterpolantFactoryMethodLinear(),s=Array.from(o.evaluate(0)),c=new Float32Array(i.length*a),l=e.ValueTypeName===`quaternion`&&a===4;for(let e=0;e<i.length;e++){let n=Array.from(o.evaluate(i[e])),u=Math.max(0,Math.min(1,(i[e]-(t-r))/r)),d=u*u*(3-2*u);if(l){let t=[0,0,0,1];D.slerpFlat(t,0,n,0,s,0,d);for(let n=0;n<4;n++)c[e*a+n]=t[n]}else for(let t=0;t<a;t++)c[e*a+t]=n[t]+(s[t]-n[t])*d}return c.set(s,(i.length-1)*a),n.times=i.slice(),n.values=c,n.setInterpolation(dn),n});return new yn(e.name,t,a,e.blendMode)}var Hu=class{constructor(e){this.derived=[],this.history=[],this.library=new Map,this.previous=``,this.grounded=!0,this.sequence=-1,this.clock=0,this.stateTime=0,this.activeUntil=0,this.seed=2099,this.nextTrick=0,this.shortHop=!1,this.swingVariant=`Swinging`,this.crawlVariant=`wall-crawl-slow`,this.idleVariant=`Idle`,this.idleAfter=0,this.lastTrickRequest=-1,this.releaseCount=0;for(let t of e)t.name.startsWith(`mixamo:`)&&this.library.set(t.name.slice(7),t);let t=(e,t,n,r)=>{let i=this.library.get(e);if(!i)return;let a=Au(i,t*i.duration,n*i.duration,`context:${r}`),o=r===`wall-run`?Vu(a):a;this.library.set(r,o),this.derived.push(o)};t(`Start Swinging`,.22,.78,`web-catch`),t(`Falling`,.2,.3,`web-wings-glide`),t(`Swinging`,.18,.75,`swing-a`),t(`Swinging (1)`,.18,.75,`swing-b`),t(`Stylish Flip`,.2,.72,`swing-style`),t(`Wall Run`,.17,.5,`wall-run`),t(`Wall Run`,.5,.96,`wall-run-ledge`),t(`Running Crawl`,.15,.78,`wall-crawl-fast`),t(`Low Crawl`,.18,.75,`wall-crawl-slow`),t(`Jumping To Hanging`,.6,.85,`mantle-reach`),t(`Falling To Landing`,.12,.85,`soft-land`),t(`Running Jump`,.2,.68,`running-takeoff`),t(`Shooting`,.08,.8,`slingshot-web-pull`),t(`Flip Kick`,.12,.52,`slingshot-launch`);for(let e of[`Jumping`,`Jumping (1)`,`Jumping (2)`,`Jumping (3)`])t(e,.22,.66,`${e}-air`);for(let e of[`Swing To Land`,`Swing To Land (1)`,`Swing To Land (2)`,`Swing To Land (3)`])t(e,.62,.96,`${e}-contact`)}choose(e){let t=e.filter(e=>this.library.has(e)),n=t.filter(e=>!this.history.slice(-3).includes(e)),r=n.length?n:t.filter(e=>e!==this.history.at(-1));this.seed=Math.imul(this.seed,1664525)+1013904223>>>0;let i=(r.length?r:t)[this.seed%Math.max(1,r.length||t.length)];return i&&(this.history.push(i),this.history.length>32&&this.history.shift()),i}selection(e,t=1,n=tt,r=!1){let i=this.library.get(e);return i?{clip:i,rate:t,loop:n,bodySupport:r}:void 0}commit(e,t,n=!1){let r=this.choose(e);if(!r)return;let i=this.library.get(r),a=t?G.clamp(i.duration/t,.65,2.4):1;return this.active=this.selection(r,a,tt,n),this.activeUntil=this.clock+i.duration/a,this.active}select(e,t){this.clock+=e;let n=t.mode??t.pose,r=this.previous!==n,i=!this.grounded&&t.grounded,a=[`swing`,`zip`,`webZip`].includes(this.previous)&&!t.grounded&&[`jump`,`fall`,`pointLaunch`].includes(n),o=this.previous===`slingshot`&&n===`pointLaunch`,s=this.grounded&&!t.grounded,c=t.actionSequence!==void 0&&t.actionSequence!==this.sequence,l=n===`doubleJump`&&(r||c);this.stateTime=r?0:this.stateTime+e,this.previous=n,this.grounded=t.grounded,this.sequence=t.actionSequence??-1;let u=t.speed??0,d=t.timeToLanding??0,f=t.trickClearance??!1;if(t.lobby)return;if(s&&(this.shortHop=d<1.5),(l||a||t.grounded||n===`swing`||d>1.6)&&(this.shortHop=!1),n===`glide`)return this.active=void 0,this.selection(`Flying`,.8,Mn);if(n===`slingshot`){this.active=void 0;let e=this.selection(`slingshot-web-pull`,0,tt);return e&&(e.time=e.clip.duration*G.lerp(.08,.92,G.clamp(t.charge??0,0,1))),e}if(o)return this.commit([`slingshot-launch`],.42,!0);if(n===`chargeJump`)return this.active=void 0,this.selection(`Male Crouch Pose`,0,Mn);if(n===`cornerTether`)return this.active=void 0,this.selection(`web-catch`,1.3);if(n===`swing`){if(this.active=void 0,r&&(this.swingVariant=this.choose([...t.swingStyle?.swingVariants??[`swing-a`,`swing-b`,`swing-style`]])??`swing-a`),this.stateTime<.2)return this.selection(`web-catch`,1.6);let e=this.selection(this.swingVariant,0,Mn);return e&&(e.time=e.clip.duration*G.clamp(.5+(t.verticalSpeed??0)/58,.03,.97)),e}if(n===`wallRun`||n===`wall`)return this.active=void 0,this.selection(`wall-run`,G.clamp(u/12,.9,2.4),Mn);if(n===`wallCrawl`||n===`crawl`)return this.active=void 0,u>.1&&(this.crawlVariant=u>2.4?`wall-crawl-fast`:`wall-crawl-slow`),this.selection(this.crawlVariant,Math.min(1.25,u/2.7)*(t.crawlDirection??1),Mn);if(n===`mantle`)return this.active=void 0,this.selection(`wall-run-ledge`,1.25,tt);if(n===`vault`)return this.active=void 0,this.selection(`Jump Over`,1.8,tt);if(n===`webZip`||n===`zip`)return this.active=void 0,this.selection(`web-catch`,1.4);if(n===`dive`)return this.active=void 0,this.selection(`Falling`,.8,Tn);if(t.grounded){if(r&&n===`roll`||i&&n===`roll`?this.commit([`Falling To Roll`,`Run To Rolling`,`Quick Roll To Run`],.8,!0):i&&this.commit(u>8?[`Swing To Land-contact`,`Swing To Land (1)-contact`,`Swing To Land (2)-contact`,`Swing To Land (3)-contact`]:[`soft-land`],.38,!0),this.active?.bodySupport&&this.clock<this.activeUntil&&(n===`roll`||u<2||this.clock<this.activeUntil-.12))return this.active;if(this.active=void 0,u>.6){let e=t.moveStrafe??0,n=t.moveForward??1,r=u>5?`Running`:n<-.2?`Walk Backward`:e<-.2?`Left Strafe Walking`:e>.2?`Right Strafe Walking`:`Walking`;return this.selection(r,G.clamp(u/(r===`Running`?9:2.4),.6,1.7),Mn)}return n===`perch`?this.selection(`Male Crouch Pose`,0,Mn):(this.clock>this.idleAfter&&(this.idleVariant=this.choose([`Idle`,`Breathing Idle`,`Happy Idle`])??`Idle`,this.idleAfter=this.clock+6),this.selection(this.idleVariant,1,Mn))}a&&this.releaseCount++;let p=t.swingStyle,m=(Math.imul(this.releaseCount,2654435761)>>>0)/4294967296,h=a&&m<(n===`jump`&&(t.verticalSpeed??0)>10?.95:p?.releaseTrickChance??.72);(s||l||a)&&(this.active=void 0,this.nextTrick=this.clock+Math.max(.35,(p?.trickInterval??1.4)*.55));let g=(t.trickRequest??0)!==this.lastTrickRequest;if(this.lastTrickRequest=t.trickRequest??0,l){let e=this.choose([`Backflip`,`Front Flip`,`Front Twist Flip`,`Running Forward Flip`])??`Front Flip`,t=this.library.get(e);if(t){let n=G.clamp(d>.2?d-.12:.65,.4,.85);return this.active=this.selection(e,t.duration/n),this.activeUntil=this.clock+n,this.active}}let _=l||h||g||this.clock>this.nextTrick&&d>1.7;if(!this.active&&_&&f&&d>.78){let e=[...p?.tricks??[`Backflip`,`Front Flip`,`Front Twist Flip`]];u>8&&d>1.4&&e.push(`Running Forward Flip`,`Run To Flip`),d>1.8&&e.push(`Butterfly Twirl`,`Aerial Evade`,`Corkscrew Evade`,`Big Jump`);let t=e.filter(e=>(this.library.get(e)?.duration??99)/2.4+.12<d);t.length&&(this.commit(t,Math.min(1.15,d-.22)),this.nextTrick=this.activeUntil+Math.max(.45,(p?.trickInterval??1.4)*.65))}if(!this.active&&s&&this.commit(u>6?[`running-takeoff`]:[`Jumping-air`,`Jumping (1)-air`,`Jumping (2)-air`,`Jumping (3)-air`],.45),this.active&&this.clock<this.activeUntil&&d>.12)return this.active;if(this.active=void 0,this.shortHop||d<.65){let e=this.selection(`Jumping (1)-air`,0);return e&&(e.time=e.clip.duration*.88),e}return this.selection(`Falling`,.65,Tn)}},Uu=e=>e.toLowerCase().replace(/[^a-z0-9]/g,``),Wu=(e,t)=>{for(let n of t){let t=e.find(e=>Uu(e.name)===n)??e.find(e=>Uu(e.name).endsWith(n));if(t)return t}},Gu=e=>e.tracks.some(e=>{let t=e.getValueSize();for(let n=t;n<e.values.length;n++)if(Math.abs(e.values[n]-e.values[n%t])>1e-5)return!0;return!1}),Ku=class{get animationSample(){return{name:this.activeClip,progress:this.current?Math.min(1,this.current.time/Math.max(.001,this.current.getClip().duration)):0,sequence:this.clipSequence}}get cruiseBlend(){return this.ironman?.cruiseBlend??1}playRandomLobbyEmote(e=Math.random){if(!this.emotes.length)return;let t=Math.floor(e()*this.emotes.length);this.emotes.length>1&&t===this.previousLobbyEmote&&(t=(t+1)%this.emotes.length),this.previousLobbyEmote=t,this.forcedLobbyEmote=this.emotes[t],this.forcedLobbyEmoteUntil=this.elapsed+Math.max(.65,this.forcedLobbyEmote.duration);let n=this.actions.get(this.forcedLobbyEmote);return n===this.current&&n?.reset().setEffectiveWeight(1).play(),this.forcedLobbyEmote.name}constructor(e,t,n){this.actions=new Map,this.current=null,this.pose=`idle`,this.elapsed=0,this.glideBlend=0,this.stateTime=0,this.swingRising=!1,this.swingVerticalSpeed=0,this.contactSamples=[],this.bodySamples=[],this.handSamples=[],this.bodySupportTime=0,this.inverse=new p,this.point=new V,this.handSide=`right`,this.forcedLobbyEmoteUntil=0,this.previousLobbyEmote=-1,this.overlays=[],this.activeClip=`procedural`,this.clipSequence=0,this.contactError=0,this.supportMode=`soles`,this.root=e,this.suit=t,this.clips=t.id===`pavitr`?n.filter(e=>Uu(e.name).startsWith(`armatureanimspidermanpavitr`)):[...n],this.mixer=new ft(e),this.bones=_u(e),this.webWings=new to(e,this.bones),this.clips.some(e=>e.name===`mixamo:Running`)&&(this.contextual=new Hu(this.clips),this.clips.push(...this.contextual.derived)),this.baseY=e.position.y,this.idle=Wu(this.clips,[`shellidle`,`stand`,`idle`,`passive`,`combatidle`]);let r=Wu(this.clips,[`runaboveground`,`run`,`bullywalking`,`walk`]);this.run=r&&(t.id!==`pavitr`||Gu(r))?r:void 0;let i=t.id===`venom`?void 0:t.id===`tobey`?Wu(this.clips,[`mixamocomlayer0`]):t.id===`pavitr`?Wu(this.clips,[`specialattack`]):t.id===`playstation`||t.id===`symbiote`?Wu(this.clips,[`swingtoland`]):Wu(this.clips,[`swingend`,`lowcrawl`,`crawl`]);if(i){let e=t.id===`tobey`?1.473:t.id===`pavitr`?2.3075:t.id===`playstation`||t.id===`symbiote`?1.52:Uu(i.name)===`swingend`?1.568:.568;this.perch=Su(i,Math.min(e,i.duration),`rooftop-perch`),this.clips.push(this.perch)}this.hang=Wu(this.clips,[`hanging`]);let a=Wu(this.clips,[`swingstart`]),o=Wu(this.clips,[`swingend`]);if(a&&o&&(this.swingDown=a.clone(),this.swingDown.name=`arc-downswing`,this.swingUp=o.clone(),this.swingUp.name=`arc-upswing`,this.clips.push(this.swingDown,this.swingUp)),!this.hang){let e=Wu(this.clips,[`swingtoland`,`swingstart`]);e&&(this.hang=Su(e,Math.min(.48,e.duration*.25),`sustained-swing`),this.clips.push(this.hang))}let s=this.clips.filter(e=>e.name===`lobby:dance:${t.id}`);if(this.emotes=s.length?s:this.clips.filter(e=>/(?:shellfidget|fidgetvictoryin|hiphop|moonwalk|silly1|silly2|scream)/.test(Uu(e.name))),t.id===`pavitr`){let e=Wu(this.clips,[`passive`]);e&&this.emotes.push(e),this.pavitr=new Nu(this.clips),this.clips.push(...this.pavitr.derived)}t.id===`ironman`&&this.clips.some(e=>e.name===`fly_fast`)&&(this.ironman=new Fu(this.clips),this.clips.push(...this.ironman.derived)),t.id===`symbiote`&&(this.symbiote=new Ru(this.clips)),t.id===`mua-spider`&&(this.muaSpider=new Bu(this.clips),this.clips.push(...this.muaSpider.derived)),t.traversal===`spider`&&(this.crawl=t.id===`symbiote`?void 0:Wu(this.clips,[`lowcrawl`,`crawl`]),(!this.crawl||!Gu(this.crawl))&&(this.crawl=ku(e,this.bones,t.id===`pavitr`),this.clips.push(this.crawl)));for(let e of this.clips)this.actions.set(e,this.mixer.clipAction(e));e.updateMatrixWorld(!0),e.traverse(e=>{if(this.contextual&&e instanceof W&&!(e instanceof qe)&&e.visible&&this.bodySamples.push({mesh:e,indices:Array.from({length:e.geometry.getAttribute(`position`).count},(e,t)=>t)}),!(e instanceof qe)||!e.visible)return;let t=e.geometry.getAttribute(`skinIndex`),n=e.geometry.getAttribute(`skinWeight`);if(!t||!n)return;if(this.pavitr||this.ironman||this.muaSpider||this.contextual){let r=new Set,i=new Map;for(let r=0;r<t.count;r++){e.getVertexPosition(r,this.point);let a=0;for(let e=1;e<4;e++)n.getComponent(r,e)>n.getComponent(r,a)&&(a=e);let o=t.getComponent(r,a),s=i.get(o);s||(s={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0],low:[r,r,r],high:[r,r,r]},i.set(o,s));for(let e=0;e<3;e++){let t=this.point.getComponent(e);t<s.min[e]&&(s.min[e]=t,s.low[e]=r),t>s.max[e]&&(s.max[e]=t,s.high[e]=r)}}for(let e of i.values())for(let t of[...e.low,...e.high])r.add(t);for(let e=0;e<192;e++)r.add(Math.floor(e*(t.count-1)/191));this.bodySamples.push({mesh:e,indices:this.contextual?Array.from({length:t.count},(e,t)=>t):[...r]});let a={mesh:e,left:[],right:[]};for(let i of[`left`,`right`])for(let o of r){let r=0;for(let a=0;a<4;a++)e.skeleton.bones[t.getComponent(o,a)].name.toLowerCase().includes(`${i}hand`)&&(r+=n.getComponent(o,a));r>.35&&a[i].push(o)}this.handSamples.push(a)}let r=e.skeleton.bones.map(e=>pu(e.name).endsWith(`Foot`)),i=[];for(let e=0;e<t.count;e++){let a=0;for(let i=0;i<4;i++)r[t.getComponent(e,i)]&&(a+=n.getComponent(e,i));a>.35&&i.push(e)}if(i.length){let t=new Set;for(let e=0;e<96;e++)t.add(i[Math.floor(e*(i.length-1)/95)]);for(let n=0;n<3;n++){let r=1/0,a=-1/0,o=i[0],s=i[0];for(let t of i){e.getVertexPosition(t,this.point);let i=this.point.getComponent(n);i<r&&(r=i,o=t),i>a&&(a=i,s=t)}t.add(o),t.add(s)}this.contactSamples.push({mesh:e,indices:[...t]})}})}choose(e){if(e.lobby){if(this.forcedLobbyEmote&&this.elapsed<this.forcedLobbyEmoteUntil)return this.forcedLobbyEmote;this.forcedLobbyEmote=void 0;let e=this.pavitr?12:22,t=this.elapsed%e,n=this.emotes[Math.floor(this.elapsed/e)%this.emotes.length];return n&&t>3&&t<3+Math.min(18,n.duration)?n:this.idle}switch(e.pose){case`perch`:return this.perch;case`idle`:return this.idle;case`run`:return this.run;case`swing`:return this.swingDown&&this.swingUp?this.swingRising?this.swingUp:this.swingDown:this.hang;case`zip`:return Wu(this.clips,[`jumpup`])??this.hang;case`jump`:return this.suit.id===`venom`?Wu(this.clips,[`jump`]):Wu(this.clips,[`jumpup`,`jump`]);case`fall`:return Wu(this.clips,[`jumpdown`,`bracedrop`]);case`dive`:return Wu(this.clips,[`bracedrop`,`jumpdown`]);case`crawl`:case`wall`:return this.crawl;default:return}}update(e,t){!t.grounded&&t.pose===`run`&&(t={...t,pose:(t.verticalSpeed??0)>1?`jump`:`fall`});for(let e of this.overlays)e.bone.quaternion.copy(e.before);this.overlays.length=0,this.elapsed+=e;let n=this.pose!==t.pose;this.swingVerticalSpeed=G.damp(this.swingVerticalSpeed,t.verticalSpeed??0,12,e),n&&t.pose===`swing`?this.swingRising=(t.verticalSpeed??0)>2:this.swingVerticalSpeed>3?this.swingRising=!0:this.swingVerticalSpeed<-3&&(this.swingRising=!1),n&&(this.stateTime=0,t.pose===`swing`&&(this.handSide=this.handSide===`right`?`left`:`right`)),this.stateTime+=e,this.pose=t.pose,this.root.position.y=this.baseY;let r=t.combat,i=r?{light:[[`mixamopunching`,`mixamobigbodyblow`],[`mixamofistfighta`,`mixamoflyingkneepunchcombo`],[`mixamobigbodyblow`],[`mixamoflyingkneepunchcombo`]],heavy:[[`mixamokicking`,`mixamodropkick`],[`mixamohurricanekick`,`mixamospinflipkick`],[`mixamospinflipkick`],[`mixamodropkick`]],launcher:[[`mixamoflipkick`],[`mixamoinverteddoublekicktokipup`]],airLight:[[`mixamoflyingkneepunchcombo`],[`mixamobutterflytwirl`,`mixamobigbodyblow`]],airHeavy:[[`mixamodropkick`],[`mixamospinflipkick`,`mixamohurricanekick`]],grab:[[`mixamoflyingshoulderthrow`],[`mixamograbandslam`]],webShot:[[`mixamoshooting`]],webPull:[[`mixamoshooting`]],block:[[`mixamobodyblock`,`mixamoblock`],[`mixamoblock`,`mixamobodyblock`]],taunt:[[`mixamotaunt`]],hit:[[`mixamoreceiveuppercuttotheface`,`mixamogettinghitbackwards`],[`mixamogettingthrown`,`mixamogettinghitbackwards`],[`mixamowallcrash`,`mixamogettinghitbackwards`]],defeated:[[`mixamodefeated`,`mixamogettingthrown`]],dodge:[[`mixamocorkscrewevade`,`mixamoquickrolltorun`],[`mixamoaerialevade`,`mixamoruntorolling`],[`mixamocorkscrewkipup`,`mixamoquickrolltorun`],[`mixamoquickrolltorun`,`mixamoruntorolling`]]}[r.action]:void 0,a=i?.[r.comboIndex%i.length]??[],o=a.length?Wu(this.clips,a):void 0,s=r&&r.actionDuration>0?G.clamp(r.actionElapsed/r.actionDuration,0,1):0,c=r?r.activeStart/Math.max(.001,r.actionDuration):0,l=r?r.activeEnd/Math.max(.001,r.actionDuration):1,u=!!(r&&[`light`,`heavy`,`launcher`,`airLight`,`airHeavy`,`grab`].includes(r.action)),d=r?.action===`block`||r?.action===`webPull`,f=u?s<c?s/Math.max(.001,c)*.38:s<l?.38+(s-c)/Math.max(.001,l-c)*.22:.6+(s-l)/Math.max(.001,1-l)*.4:d?Math.min(.72,s%1):s,p=!!(r&&[`airLight`,`airHeavy`,`grab`,`hit`,`defeated`].includes(r.action)),m=(o?{clip:o,loop:2200,rate:0,time:f*o.duration,bodySupport:p}:null)??this.contextual?.select(e,t)??this.pavitr?.select(e,t)??this.ironman?.select(e,t)??this.symbiote?.select(e,t)??this.muaSpider?.select(e,t),h=m?.clip??this.choose(t);this.bodySupportTime=m?.bodySupport?.22:Math.max(0,this.bodySupportTime-e),this.supportMode=this.bodySupportTime>0&&t.grounded?`body`:`soles`;let g=h?this.actions.get(h)??null:null;if(g!==this.current){if(this.current?.fadeOut(.16),g){let e=t.lobby?this.emotes.includes(h):[`jump`,`fall`,`zip`,`dive`].includes(t.pose);g.reset().setLoop(m?.loop??(e?2200:2201),1/0),g.clampWhenFinished=m?m.loop===tt:e,g.enabled=!0,g.setEffectiveWeight(1).fadeIn(.16).play()}this.current=g,this.clipSequence++}if(g){let e=t.pose===`crawl`||t.pose===`wall`?G.clamp((t.speed??0)/4,0,1.5)*(t.crawlDirection??1):t.pose===`run`?G.clamp((t.speed??8)/9,.65,1.65):t.pose===`swing`?.85+(t.tension??0)*.25:1;g.setEffectiveTimeScale(m?.rate??e),m?.time!==void 0&&(g.time=m.time),(h===this.swingDown||h===this.swingUp)&&(g.setEffectiveTimeScale(0),g.time=h===this.swingDown?this.stateTime<.24?.7+this.stateTime*2.5:1.3+G.clamp(1-Math.abs(this.swingVerticalSpeed)/24,0,1)*.6:.05+G.clamp(this.swingVerticalSpeed/24,0,1)*.4)}if(this.mixer.update(e),this.glideBlend=G.damp(this.glideBlend,+(t.mode===`glide`),10,e),t.mode===`glide`){this.root.parent?.updateMatrixWorld(!0);let e=this.bones.find(e=>e.role===`leftArm`)?.bone.getWorldPosition(new V),t=this.bones.find(e=>e.role===`rightArm`)?.bone.getWorldPosition(new V);if(e&&t){let n=t.clone().sub(e).normalize();this.aimWebArm(e.clone().addScaledVector(n,-2),`left`,this.glideBlend),this.aimWebArm(t.clone().addScaledVector(n,2),`right`,this.glideBlend)}}if(this.webWings.update(t.mode===`glide`,e,t.speed??0),this.activeClip=h?.name??`procedural:${t.pose}`,!g){let n=t.lobby&&this.elapsed%14>9?`emote`:t.pose;Du(this.bones,n,this.elapsed,e,this.suit.rigPreset)}if(g&&t.pose===`swing`){let e=(1-G.clamp(Math.abs(t.verticalSpeed??0)/5,0,1))*(t.tension??0);for(let t of this.bones)[`leftLeg`,`rightLeg`,`leftUpLeg`,`rightUpLeg`].includes(t.role)&&(this.overlays.push({bone:t.bone,before:t.bone.quaternion.clone()}),t.bone.quaternion.premultiply(new D().setFromAxisAngle(t.axisX,e*(t.role.endsWith(`UpLeg`)?-.12:-.22))))}!t.grounded&&t.anchor&&(t.pose===`swing`||t.pose===`zip`)&&this.aimWebArm(t.anchor),t.grounded?(this.groundSoles(),this.pavitr&&this.supportMode===`soles`&&this.clearGroundFingers()):this.contactError=0}clearGroundFingers(){let e=this.root.parent;if(e){e.updateMatrixWorld(!0),this.inverse.copy(e.matrixWorld).invert();for(let t of[`left`,`right`]){let n=this.bones.find(e=>e.role===`${t}Hand`)?.bone;if(!n?.parent)continue;let r=!1;for(let i=0;i<3;i++){let i=1/0,a=new V;for(let e of this.handSamples)for(let n of e[t])e.mesh.getVertexPosition(n,this.point).applyMatrix4(e.mesh.matrixWorld).applyMatrix4(this.inverse),this.point.y<i&&(i=this.point.y,a.copy(this.point));if(i>=.008)break;r||=(this.overlays.push({bone:n,before:n.quaternion.clone()}),!0);let o=n.getWorldPosition(new V).applyMatrix4(this.inverse),s=a.clone().sub(o),c=G.clamp(.015-o.y,-s.length(),s.length()),l=s.clone().setY(0).normalize().multiplyScalar(Math.sqrt(Math.max(0,s.lengthSq()-c*c))).setY(c),u=e.getWorldQuaternion(new D),d=n.parent.getWorldQuaternion(new D).invert();s.applyQuaternion(u).applyQuaternion(d).normalize(),l.applyQuaternion(u).applyQuaternion(d).normalize(),n.quaternion.premultiply(new D().setFromUnitVectors(s,l)).normalize(),e.updateMatrixWorld(!0)}}}}groundSoles(){let e=this.root.parent;if(!e||!this.contactSamples.length)return;e.updateMatrixWorld(!0),this.inverse.copy(e.matrixWorld).invert();let t=1/0;for(let{mesh:e,indices:n}of this.supportMode===`body`?this.bodySamples:this.contactSamples)for(let r of n)e.getVertexPosition(r,this.point).applyMatrix4(e.matrixWorld).applyMatrix4(this.inverse),t=Math.min(t,this.point.y);if(!Number.isFinite(t))return;let n=G.clamp(-t,-2,2);this.root.position.y=this.baseY+n,this.contactError=t+n,this.root.updateMatrixWorld(!0)}aimWebArm(e,t=this.handSide,n=1){let r=this.bones.find(e=>e.role===`${t}Arm`)?.bone,i=this.bones.find(e=>e.role===`${t}ForeArm`)?.bone,a=this.bones.find(e=>e.role===`${t}Hand`)?.bone;if(!r?.parent||!i||!a)return;this.root.parent?.updateMatrixWorld(!0);let o=r.getWorldPosition(new V),s=i.getWorldPosition(new V),c=a.getWorldPosition(new V),l=o.distanceTo(s),u=s.distanceTo(c),d=e.clone().sub(o).normalize(),f=(l+u)*.94,p=(l*l-u*u+f*f)/(2*f),m=s.clone().sub(o);m.addScaledVector(d,-m.dot(d)),m.lengthSq()<.001&&m.set(this.handSide===`left`?1:-1,0,0).applyQuaternion(this.root.getWorldQuaternion(new D)).addScaledVector(d,-m.dot(d)),m.normalize();let h=o.clone().addScaledVector(d,p).addScaledVector(m,Math.sqrt(Math.max(0,l*l-p*p))),g=o.clone().addScaledVector(d,f),_=(e,t,n)=>{this.overlays.push({bone:e,before:e.quaternion.clone()});let r=e.parent.getWorldQuaternion(new D),i=new D().setFromUnitVectors(t.normalize(),n.normalize());e.quaternion.premultiply(r.clone().invert().multiply(i).multiply(r)).normalize(),this.root.parent?.updateMatrixWorld(!0)};_(r,s.clone().sub(o),h.clone().sub(o));let v=i.getWorldPosition(new V);if(_(i,a.getWorldPosition(new V).sub(v),g.sub(v)),n<1)for(let e of this.overlays.slice(-2))e.bone.quaternion.slerpQuaternions(e.before,e.bone.quaternion.clone(),n);this.root.parent?.updateMatrixWorld(!0)}webHand(e){let t=this.bones.find(e=>e.role===`${this.handSide}Hand`)?.bone;return t?(this.root.parent?.updateMatrixWorld(!0),t.getWorldPosition(e)):this.root.getWorldPosition(e).add(new V(0,1.45,0))}webHands(e){return this.root.parent?.updateMatrixWorld(!0),[`leftHand`,`rightHand`].map((t,n)=>{let r=this.bones.find(e=>e.role===t)?.bone;return r?r.getWorldPosition(e[n]):this.root.getWorldPosition(e[n]).add(new V(n?.28:-.28,1.45,0))})}},qu=.002,Ju=.6,Yu=new V(0,-1,0),Xu=()=>new Promise(e=>setTimeout(e,0)),Zu=(e,t=.46)=>e.point.y+qu+t*(1/Math.max(Ju,e.normal.y)-1),Qu=class e{constructor(e,t,n,r){this.bounds=new Ut,this.triangle=new Yt,this.ray=new fe,this.hitPoint=new V,this.faceNormal=new V,this.segmentStart=new V,this.segmentEnd=new V,this.segmentPoint=new V,this.trianglePoint=new V,this.bestSegmentPoint=new V,this.bestTrianglePoint=new V,this.edgeSegmentPoint=new V,this.edgeTrianglePoint=new V,this.direction=new V,this.contactNormal=new V,this.stack=[],this.candidates=[],this.positions=e,this.order=t,this.volumes=n,this.triangleCount=t.length,this.nodeBounds=new Float32Array(r.length*6),this.nodeMeta=new Int32Array(r.length*4),r.forEach((e,t)=>{this.nodeBounds.set([...e.min,...e.max],t*6),this.nodeMeta.set([e.left,e.right,e.start,e.count],t*4)}),r.length&&(this.bounds.min.fromArray(this.nodeBounds,0),this.bounds.max.fromArray(this.nodeBounds,3)),this.byteLength=e.byteLength+t.byteLength+n.byteLength+this.nodeBounds.byteLength+this.nodeMeta.byteLength}static async fromObject(t,n={}){t.updateWorldMatrix(!0,!0);let r=[],i=0,a=0,o=new p;if(t.traverseVisible(e=>{if(!(e instanceof W)||e instanceof qe)return;let t=e.geometry,n=t.getAttribute(`position`);if(!n||n.itemSize<3)return;let s=Array.isArray(e.material)?e.material:[e.material],c=e=>{let t=s[e];return t&&t.visible&&t.colorWrite&&(!t.transparent||t.opacity>.01)},l=t.index?.count??n.count,u=Math.max(0,t.drawRange.start),d=Math.min(l,u+t.drawRange.count),f=Array.isArray(e.material)&&t.groups.length?t.groups:[{start:0,count:l,materialIndex:0}],p=e instanceof Ye?e.count:1;for(let t=0;t<p;t++){let n=a++,s=e.matrixWorld.clone();e instanceof Ye&&(e.getMatrixAt(t,o),s.multiply(o));for(let t of f){if(!c(t.materialIndex??0))continue;let a=Math.max(u,t.start),o=Math.min(d,t.start+t.count);o-a<3||(r.push({mesh:e,matrix:s,start:a,end:o,volume:n}),i+=Math.floor((o-a)/3))}}}),i>2e6)throw Error(`City collision mesh too large (${i} triangles); split or simplify its collision geometry.`);let s=new Float32Array(i*9),c=new Uint32Array(i),l=new V,u=new V,d=new V,f=new V,m=new V,h=0,g=0;for(let e of r){let t=e.mesh.geometry,r=t.getAttribute(`position`);for(let a=e.start;a+2<e.end;a+=3)l.fromBufferAttribute(r,t.index?.getX(a)??a).applyMatrix4(e.matrix),u.fromBufferAttribute(r,t.index?.getX(a+1)??a+1).applyMatrix4(e.matrix),d.fromBufferAttribute(r,t.index?.getX(a+2)??a+2).applyMatrix4(e.matrix),Number.isFinite(l.x+l.y+l.z+u.x+u.y+u.z+d.x+d.y+d.z)&&f.subVectors(u,l).cross(m.subVectors(d,l)).lengthSq()>1e-14&&(l.toArray(s,h*9),u.toArray(s,h*9+3),d.toArray(s,h*9+6),c[h]=e.volume,h++),++g%12e3==0&&(n.onProgress?.(.5*g/Math.max(1,i)),await Xu())}let _=h===i?s:s.slice(0,h*9),v=h===i?c:c.slice(0,h),y=Uint32Array.from({length:h},(e,t)=>t),b=[],x=h?[{start:0,count:h,parent:-1,right:!1}]:[],S=0;for(;x.length;){let e=x.pop(),t={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0],start:e.start,count:e.count,left:-1,right:-1},r=b.length;b.push(t),e.parent>=0&&(b[e.parent][e.right?`right`:`left`]=r);for(let n=e.start;n<e.start+e.count;n++){let e=y[n]*9;for(let n=0;n<3;n++)t.min[n]=Math.min(t.min[n],_[e+n],_[e+3+n],_[e+6+n]),t.max[n]=Math.max(t.max[n],_[e+n],_[e+3+n],_[e+6+n])}if(e.count<=16)S+=e.count;else{let n=0;t.max[1]-t.min[1]>t.max[n]-t.min[n]&&(n=1),t.max[2]-t.min[2]>t.max[n]-t.min[n]&&(n=2);let i=(t.min[n]+t.max[n])*.5,a=e.start,o=e.start+e.count-1;for(;a<=o;){let e=y[a]*9+n;if((_[e]+_[e+3]+_[e+6])/3<i)a++;else{let e=y[a];y[a]=y[o],y[o--]=e}}let s=a>e.start&&a<e.start+e.count?a:e.start+Math.floor(e.count/2);t.count=0,x.push({start:s,count:e.start+e.count-s,parent:r,right:!0}),x.push({start:e.start,count:s-e.start,parent:r,right:!1})}b.length%500==0&&(n.onProgress?.(.5+.5*S/Math.max(1,h)),await Xu())}return n.onProgress?.(1),new e(_,y,v,b)}readTriangle(e){return this.triangle.a.fromArray(this.positions,e*9),this.triangle.b.fromArray(this.positions,e*9+3),this.triangle.c.fromArray(this.positions,e*9+6),this.triangle}rayHitsNode(e,t,n,r){let i=0,a=r;for(let r=0;r<3;r++){let o=r===0?`x`:r===1?`y`:`z`,s=t[o],c=n[o],l=this.nodeBounds[e*6+r],u=this.nodeBounds[e*6+r+3];if(Math.abs(c)<1e-12){if(s<l||s>u)return!1;continue}let d=(l-s)/c,f=(u-s)/c;if(i=Math.max(i,Math.min(d,f)),a=Math.min(a,Math.max(d,f)),i>a)return!1}return a>=0}raycast(e,t,n=1/0,r={}){if(!this.triangleCount||n<0||(this.ray.origin.copy(e),this.ray.direction.copy(t).normalize(),this.ray.direction.lengthSq()<.5))return null;this.stack.length=0,this.stack.push(0);let i=n,a=null;for(;this.stack.length;){let e=this.stack.pop();if(!this.rayHitsNode(e,this.ray.origin,this.ray.direction,i))continue;let t=e*4,n=this.nodeMeta[t+3];if(!n){this.stack.push(this.nodeMeta[t],this.nodeMeta[t+1]);continue}let o=this.nodeMeta[t+2];for(let e=o;e<o+n;e++){let t=this.order[e],n=this.readTriangle(t);if(!this.ray.intersectTriangle(n.a,n.b,n.c,!1,this.hitPoint))continue;let o=this.hitPoint.distanceTo(this.ray.origin);o>i||(n.getNormal(this.faceNormal),this.faceNormal.dot(this.ray.direction)>0&&this.faceNormal.negate(),!(r.minNormalY!==void 0&&this.faceNormal.y<r.minNormalY)&&(i=o,a={point:this.hitPoint.clone(),normal:this.faceNormal.clone(),distance:o,triangleIndex:t}))}}return a}supportAt(e,t={}){let n=Math.max(0,t.maxRise??.12),r=Math.max(0,t.maxDrop??.25);return this.raycast({x:e.x,y:e.y+n,z:e.z},Yu,n+r,{minNormalY:t.minNormalY??Ju})}hasSurface(e,t=.06){return!!this.supportAt(e,{maxRise:t,maxDrop:t})}collectCapsuleTriangles(e,t,n){let r=this.candidates;if(r.length=0,!this.triangleCount)return r;this.stack.length=0,this.stack.push(0);let i=e.x-t-qu,a=e.x+t+qu,o=e.y-qu,s=e.y+n+qu,c=e.z-t-qu,l=e.z+t+qu;for(;this.stack.length;){let e=this.stack.pop(),t=e*6;if(a<this.nodeBounds[t]||i>this.nodeBounds[t+3]||s<this.nodeBounds[t+1]||o>this.nodeBounds[t+4]||l<this.nodeBounds[t+2]||c>this.nodeBounds[t+5])continue;let n=e*4,u=this.nodeMeta[n+3];if(!u)this.stack.push(this.nodeMeta[n],this.nodeMeta[n+1]);else{let e=this.nodeMeta[n+2];for(let t=e;t<e+u;t++)r.push(this.order[t])}}return r}closestSegments(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,o=t.z-e.z,s=r.x-n.x,c=r.y-n.y,l=r.z-n.z,u=e.x-n.x,d=e.y-n.y,f=e.z-n.z,p=i*i+a*a+o*o,m=i*s+a*c+o*l,h=s*s+c*c+l*l,g=i*u+a*d+o*f,_=s*u+c*d+l*f,v=p*h-m*m,y=v>1e-12?G.clamp((m*_-h*g)/v,0,1):0,b=h>1e-12?(m*y+_)/h:0;b<0?(b=0,y=p>1e-12?G.clamp(-g/p,0,1):0):b>1&&(b=1,y=p>1e-12?G.clamp((m-g)/p,0,1):0),this.edgeSegmentPoint.set(e.x+i*y,e.y+a*y,e.z+o*y),this.edgeTrianglePoint.set(n.x+s*b,n.y+c*b,n.z+l*b)}distanceToTriangle(e){this.direction.subVectors(this.segmentEnd,this.segmentStart);let t=this.direction.length();if(this.ray.set(this.segmentStart,this.direction.normalize()),this.ray.intersectTriangle(e.a,e.b,e.c,!1,this.hitPoint)&&this.hitPoint.distanceTo(this.segmentStart)<=t)return this.bestSegmentPoint.copy(this.hitPoint),this.bestTrianglePoint.copy(this.hitPoint),0;e.closestPointToPoint(this.segmentStart,this.trianglePoint);let n=this.segmentStart.distanceToSquared(this.trianglePoint);this.bestSegmentPoint.copy(this.segmentStart),this.bestTrianglePoint.copy(this.trianglePoint),e.closestPointToPoint(this.segmentEnd,this.trianglePoint);let r=this.segmentEnd.distanceToSquared(this.trianglePoint);r<n&&(n=r,this.bestSegmentPoint.copy(this.segmentEnd),this.bestTrianglePoint.copy(this.trianglePoint));for(let t=0;t<3;t++){let r=t===0?e.a:t===1?e.b:e.c,i=t===0?e.b:t===1?e.c:e.a;this.closestSegments(this.segmentStart,this.segmentEnd,r,i);let a=this.edgeSegmentPoint.distanceToSquared(this.edgeTrianglePoint);a<n&&(n=a,this.bestSegmentPoint.copy(this.edgeSegmentPoint),this.bestTrianglePoint.copy(this.edgeTrianglePoint))}return Math.sqrt(n)}isCapsuleClear(e,t=.46,n=2.05,r=!0){this.segmentStart.set(e.x,e.y+t,e.z),this.segmentEnd.set(e.x,e.y+Math.max(t,n-t),e.z);for(let r of this.collectCapsuleTriangles(e,t,n))if(this.distanceToTriangle(this.readTriangle(r))<t-.006)return!1;return!r||!this.isInsideClosedVolume({x:e.x,y:e.y+n*.5,z:e.z})}isInsideClosedVolume(e){if(!this.triangleCount||!this.bounds.containsPoint(this.segmentPoint.copy(e)))return!1;let t=null;for(let n of[[1,13e-5,31e-5],[-1,-13e-5,-31e-5],[17e-5,11e-5,1],[-17e-5,-11e-5,-1]]){this.ray.origin.copy(e),this.ray.direction.set(...n).normalize(),this.stack.length=0,this.stack.push(0);let r=new Map;for(;this.stack.length;){let e=this.stack.pop();if(!this.rayHitsNode(e,this.ray.origin,this.ray.direction,1/0))continue;let n=e*4,i=this.nodeMeta[n+3];if(!i){this.stack.push(this.nodeMeta[n],this.nodeMeta[n+1]);continue}let a=this.nodeMeta[n+2];for(let e=a;e<a+i;e++){let n=this.order[e],i=this.volumes[n];if(t&&!t.has(i))continue;let a=this.readTriangle(n);if(!this.ray.intersectTriangle(a.a,a.b,a.c,!1,this.hitPoint))continue;let o=this.hitPoint.distanceTo(this.ray.origin);if(o>qu){let e=r.get(i)??[];e.push(o),r.set(i,e)}}}let i=new Set;for(let[e,t]of r){t.sort((e,t)=>e-t);let n=0,r=-1/0;for(let e of t)e-r>.005&&n++,r=e;n%2==1&&i.add(e)}if(!i.size)return!1;t=i}return!0}sweepCapsule(e,t,n,r=.46,i=2.05){let a=new V().copy(e),o=new V().copy(n),s=new V().copy(t).sub(a),c=s.length(),l=Math.max(.035,Math.min(.18,r*.4)),u=Math.max(1,Math.ceil(c/l)),d=Math.min(2048,u),f=s.multiplyScalar(1/u),p=n.y<=.1?this.supportAt(e,{maxRise:.025,maxDrop:r+.045}):null,m=p&&Math.abs(e.y-Zu(p,r))<=.045?p:null,h=a.clone(),g=!1,_=null,v=!1,y=0;for(let e=0;e<d;e++){h.copy(a),a.add(f);for(let e=0;e<5;e++){let e=!1,t=this.collectCapsuleTriangles(a,r,i);for(let s of t){this.segmentStart.set(a.x,a.y+r,a.z),this.segmentEnd.set(a.x,a.y+Math.max(r,i-r),a.z);let t=this.readTriangle(s),c=this.distanceToTriangle(t);if(c>=r+qu)continue;c>1e-7?this.contactNormal.subVectors(this.bestSegmentPoint,this.bestTrianglePoint).divideScalar(c):(t.getNormal(this.contactNormal),this.segmentPoint.set(h.x,h.y+i*.5,h.z).sub(t.a),this.contactNormal.dot(this.segmentPoint)<0&&this.contactNormal.negate());let l=r+qu-c,u=m&&this.contactNormal.y>.45&&this.bestTrianglePoint.y<=m.point.y+.28;if(l>1e-5&&(u?a.y+=l/this.contactNormal.y:a.addScaledVector(this.contactNormal,l),e=!0),u)o.y=Math.min(0,o.y);else{let e=o.dot(this.contactNormal);e<0&&o.addScaledVector(this.contactNormal,-e);let t=f.dot(this.contactNormal);t<0&&f.addScaledVector(this.contactNormal,-t)}this.contactNormal.y>Ju&&n.y<=.1?g=!0:Math.abs(this.contactNormal.y)<.45&&(_=this.contactNormal.clone(),v||=this.bestTrianglePoint.y<=a.y+.55),y++}if(!e)break}if(!this.isCapsuleClear(a,r,i,!1)){a.copy(h),o.set(0,0,0),y++;break}}let b=n.y<=.1?this.supportAt(a,{maxRise:.015,maxDrop:r+.035}):null;if(g=!!(b&&Math.abs(a.y-Zu(b,r))<=.035&&o.y<=.1),g&&b){let e=a.y;a.y=Zu(b,r),this.isCapsuleClear(a,r,i,!1)?o.y=Math.max(0,o.y):(a.y=e,g=!1)}return{position:a,velocity:o,grounded:g,wallNormal:_,feetTouching:v,blocked:y>0||d<u,contacts:y}}findHighestRoofSpawn(e=.46,t=2.05){let n=[],r=new V,i=new V,a=new V,o=new V;for(let e=0;e<this.positions.length;e+=9){r.fromArray(this.positions,e),i.fromArray(this.positions,e+3),a.fromArray(this.positions,e+6);let t=new Yt(r,i,a);t.getNormal(o),!(Math.abs(o.y)<.85||t.getArea()<.3)&&n.push(t.getMidpoint(new V))}n.sort((e,t)=>t.y-e.y);let s=new Set;for(let r of n){let n=`${Math.round(r.x*2)}:${Math.round(r.y*2)}:${Math.round(r.z*2)}`;if(s.has(n))continue;s.add(n);let i=!0;for(let e=0;e<8;e++){let t=e*Math.PI/4;if(!this.supportAt({x:r.x+Math.cos(t)*.85,y:r.y,z:r.z+Math.sin(t)*.85},{maxDrop:.15,maxRise:.15,minNormalY:.85})){i=!1;break}}if(i&&(r.y+=qu,this.hasSurface(r)&&this.isCapsuleClear(r,e,t)))return r}return null}findRoofSpawn(e,t=.46,n=2.05){for(let r of[Math.max(2,t*3),Math.max(.75,t*1.5),t]){let i=null,a=-1,o=new Set;for(let s of e){if(i&&s.max.y+.1<i.y)break;let e=s.getCenter(new V),c=s.max.x-s.min.x,l=s.max.z-s.min.z;if(c<t*2.1||l<t*2.1)continue;let u=[];for(let e of[!1,!0]){let t=e?Math.max(12,c):c,n=e?Math.max(12,l):l;for(let e of[0,-.18,.18,-.36,.36])for(let r of[0,-.18,.18,-.36,.36])u.push([t*e,n*r])}for(let[c,l]of u){let u=new V(e.x+c,Math.max(this.bounds.max.y,s.max.y)+2,e.z+l),d=`${Math.round(u.x*4)}:${Math.round(u.z*4)}`;if(o.has(d))continue;o.add(d);let f=this.raycast(u,Yu,Math.max(2,u.y-s.min.y),{minNormalY:.85});if(!f||f.point.y<s.min.y+Math.min(2,(s.max.y-s.min.y)*.5)||i&&f.point.y<i.y-.025)continue;let p=f.point.clone(),m=!0;for(let e=0;e<8;e++){let t=e*Math.PI/4,n=this.supportAt({x:p.x+Math.cos(t)*r,y:p.y,z:p.z+Math.sin(t)*r},{maxDrop:.12,maxRise:.12,minNormalY:.85});if(!n||Math.abs(n.point.y-p.y)>.1){m=!1;break}}if(!m||(p.y+=qu,!this.isCapsuleClear(p,t,n)))continue;let h=0,g=p.clone().add(new V(0,n*.8,0));for(let e=0;e<8;e++){let n=e*Math.PI/4,i=this.raycast(g,{x:Math.cos(n),y:0,z:Math.sin(n)},7);if(!i)h++;else if(i.distance<r+(r>t?.4:.05)){m=!1;break}}!m||h<(r>=2?5:r>t?4:2)||(!i||p.y>i.y+.025||h>a)&&(i=p,a=h)}}if(i)return i}return null}},$u=class{constructor(e,t,n){this.query=e,this.width=t,this.depth=n}offsets(e,t=e,n=0){let r=this.query.bounds,i=Math.ceil((Math.min(e.x,t.x)-n-r.max.x)/this.width),a=Math.floor((Math.max(e.x,t.x)+n-r.min.x)/this.width),o=Math.ceil((Math.min(e.z,t.z)-n-r.max.z)/this.depth),s=Math.floor((Math.max(e.z,t.z)+n-r.min.z)/this.depth),c=[];for(let e=i;e<=a;e++)for(let t=o;t<=s;t++)c.push(new V(e*this.width,0,t*this.depth));return c}raycast(e,t,n,r){if(!Number.isFinite(n)||n<=0)return null;let i=new V().copy(e),a=new fe(i,new V().copy(t).normalize()),o=a.at(n,new V),s=new Ut,c=new V,l=null;for(let e of this.offsets(i,o)){if(s.copy(this.query.bounds).translate(e),!a.intersectsBox(s))continue;let t=this.query.raycast(c.copy(i).sub(e),a.direction,l?.distance??n,{minNormalY:r});t&&(t.point.add(e),l=t)}return l}supportAt(e,t=.12,n=.25){return this.raycast({x:e.x,y:e.y+t,z:e.z},{x:0,y:-1,z:0},t+n,.65)}isCapsuleClear(e,t=.46,n=2.05,r=!0){let i=new V;return this.offsets(e,e,t+.01).every(a=>this.query.isCapsuleClear(i.copy(e).sub(a),t,n,r))}sweepCapsule(e,t,n,r=.46,i=2.05){let a=new V().copy(e),o=new V().copy(n),s=new V().copy(t).sub(a),c=this.offsets(e,t,r+.32);if(c.length===1){let e=c[0],o=this.query.sweepCapsule(a.clone().sub(e),new V().copy(t).sub(e),n,r,i);return o.position.add(e),o}let l=Math.max(1,Math.ceil(s.length()/.16)),u=Math.min(l,2048),d=s.multiplyScalar(1/l),f=null,p=!1,m=!1,h=0,g=u<l,_=new V,v=new V,y=new V,b=new V;for(let e=0;e<u;e++){_.copy(a),v.copy(a).add(d),m=!1;for(let e=0;e<4;e++){let e=!1;for(let t of c){let n=this.query.sweepCapsule(y.copy(_).sub(t),b.copy(v).sub(t),o,r,i);n.position.add(t),e||=n.position.distanceToSquared(v)>1e-8,v.copy(n.position),o.copy(n.velocity),m||=n.grounded,h+=n.contacts,g||=n.blocked,n.wallNormal&&(f=n.wallNormal,p||=n.feetTouching)}if(!e)break}if(g&&!this.isCapsuleClear(v,r,i,!1)){o.set(0,0,0),g=!0;break}if(a.copy(v),f){let e=d.dot(f);e<0&&d.addScaledVector(f,-e)}}let x=o.y<=.1?this.supportAt(a,.015,r+.035):null;return m=!!(x&&Math.abs(a.y-Zu(x,r))<=.035),m&&x&&(a.y=Zu(x,r),o.y=Math.max(0,o.y)),{position:a,velocity:o,grounded:m,wallNormal:f,feetTouching:p,blocked:g,contacts:h}}},ed=()=>({x:0,y:0,z:0}),td=(e,t,n)=>Math.max(t,Math.min(n,e)),nd=(e,t)=>{e.x=t.x,e.y=t.y,e.z=t.z};function rd(){return{velocity:ed(),acceleration:ed(),steering:0,groundLift:0,active:!1,probeCount:0,refreshes:0,elapsed:0,nextProbeAt:0,sampledPosition:ed(),sampledForward:ed(),sampledWish:ed(),selectedDirection:ed(),avoidanceNormal:ed(),origin:ed(),direction:ed(),distance:0,clearance:1/0,selectedClearance:1/0,turnSide:0,threatened:!1}}function id(e,t,n){nd(e.velocity,t.velocity),e.acceleration.x=0,e.acceleration.y=0,e.acceleration.z=0,e.steering=0,e.groundLift=0,e.active=!1,e.probeCount=0;let r=td(Number.isFinite(t.dt)?t.dt:0,0,.05);e.elapsed+=r;let i=t.tuning,a=i?.swingAvoidance??1,o=Math.hypot(t.velocity.x,t.velocity.z);if(a<=0||!t.swinging||t.diving||o<6||!Number.isFinite(o+t.velocity.y)||r===0)return e.threatened=!1,e.nextProbeAt=e.elapsed,e.turnSide=0,e;let s=t.velocity.x/o,c=t.velocity.z/o,l=t.desiredDirection,u=l?Math.hypot(l.x,l.z):0,d=l&&u>.1?l.x/u:s,f=l&&u>.1?l.z/u:c,p=t.position.x-e.sampledPosition.x,m=t.position.y-e.sampledPosition.y,h=t.position.z-e.sampledPosition.z,g=Math.hypot(p,m,h),_=s*e.sampledForward.x+c*e.sampledForward.z<.98||d*e.sampledWish.x+f*e.sampledWish.z<.98;if(e.elapsed>=e.nextProbeAt||g>4||_){e.refreshes++,e.nextProbeAt=e.elapsed+(i?.profiledSwing?.075:.1),nd(e.sampledPosition,t.position),e.sampledForward.x=s,e.sampledForward.y=0,e.sampledForward.z=c,e.sampledWish.x=d,e.sampledWish.z=f;let r=t.playerRadius??.46,a=t.playerHeight??2.05,l=td(o*(i?.swingAvoidanceLookAhead??1.7),24,145),u=td(t.velocity.y/o,-1.5,1.5),p=1/Math.hypot(1,u);e.distance=l,e.clearance=l,e.avoidanceNormal.x=0,e.avoidanceNormal.y=0,e.avoidanceNormal.z=0;let m=e.origin,h=e.direction;for(let i=0;i<(t.trajectoryVelocity?8:7);i++){let o=i===3?-r:i===4?r:0,g=i===1?r:i===2?a-r:a*.5;if(m.x=t.position.x-c*o,m.y=t.position.y+g,m.z=t.position.z+s*o,h.x=s*p,h.y=u*p,h.z=c*p,i===5&&(h.x=s,h.y=0,h.z=c),i===6){let e=td(Math.atan2(s*f-c*d,s*d+c*f),-.65,.65);h.x=s*Math.cos(e)-c*Math.sin(e),h.y=0,h.z=s*Math.sin(e)+c*Math.cos(e)}if(i===7&&t.trajectoryVelocity){let e=t.trajectoryVelocity,n=Math.hypot(e.x,e.y,e.z);n>.01&&(h.x=e.x/n,h.y=e.y/n,h.z=e.z/n)}let _=n(m,h,l);if(e.probeCount++,_&&Math.abs(_.normal.y)<.65&&_.distance>=0&&_.distance<e.clearance){e.clearance=_.distance;let t=_.normal.x*h.x+_.normal.z*h.z>0?-1:1;e.avoidanceNormal.x=_.normal.x*t,e.avoidanceNormal.z=_.normal.z*t}}if(e.threatened=e.clearance<l-.05,e.selectedClearance=l,e.selectedDirection.x=s,e.selectedDirection.y=0,e.selectedDirection.z=c,e.threatened){let o=-1/0,u=e.turnSide;for(let p of[-.3,.3,-.65,.65,-1.05,1.05,-1.4,1.4,-1.65,1.65]){let g=Math.cos(p),_=Math.sin(p),v=s*g-c*_,y=s*_+c*g,b=l,x=i?.profiledSwing?[[-r-.35,a*.5],[0,a*.5],[r+.35,a*.5],[0,r],[0,a-r]]:[[-r-.35,a*.5],[0,a*.5],[r+.35,a*.5]];for(let[r,i]of x){m.x=t.position.x-y*r,m.y=t.position.y+i,m.z=t.position.z+v*r,h.x=v,h.y=0,h.z=y;let a=n(m,h,l);e.probeCount++,a&&Math.abs(a.normal.y)<.65&&(b=Math.min(b,a.distance))}let S=Math.sign(p),C=d*v+f*y,w=b/l*1.5-Math.abs(p)*.1+C*.32+(S===e.turnSide?.16:0);w>o&&(o=w,e.selectedDirection.x=v,e.selectedDirection.z=y,e.selectedClearance=b,u=S)}e.turnSide=u}else e.turnSide=0}if(!e.threatened)return e;let v=(t.position.x-e.sampledPosition.x)*e.sampledForward.x+(t.position.z-e.sampledPosition.z)*e.sampledForward.z,y=Math.max(0,e.clearance-v-(t.playerRadius??.46)),b=Math.atan2(s*e.selectedDirection.z-c*e.selectedDirection.x,s*e.selectedDirection.x+c*e.selectedDirection.z),x=td(1-y/Math.max(1,e.distance),0,1),S=Math.min(i?.swingAvoidanceTurnRate??2.6,(i?.swingAvoidanceAcceleration??78)/o)*a*(.8+x*.2)*r,C=td(b,-S,S),w=y/o,T=Math.hypot(e.avoidanceNormal.x,e.avoidanceNormal.z),E=T>.01?Math.max(0,-(s*e.avoidanceNormal.x+c*e.avoidanceNormal.z)/T):0,D=Math.sqrt(2*(i?.swingAvoidanceBraking??54)*Math.max(0,y-1)),O=w<.65&&E>.55?Math.min((i?.swingAvoidanceBraking??54)*a*r,Math.max(0,o-D)):0,k=Math.max(0,o-O),A=Math.cos(C),ee=Math.sin(C),j=s*A-c*ee,te=s*ee+c*A;return e.velocity.x=j*k,e.velocity.z=te*k,e.acceleration.x=(e.velocity.x-t.velocity.x)/r,e.acceleration.z=(e.velocity.z-t.velocity.z)/r,e.steering=C/r,e.active=Math.abs(C)>1e-6||O>1e-6,e}var ad=class{constructor(e,t){this.probes=[],this.restored=[],this.footGap=0,this.bodyClearance=0,this.maxFootCorrection=t===`tobey`?.31:1/0,e.traverse(e=>{if(!(e instanceof W)||!e.visible)return;let t=e.geometry.getAttribute(`position`);if(!t)return;let n=e.geometry.getAttribute(`skinIndex`),r=e.geometry.getAttribute(`skinWeight`),i=e instanceof qe?e.skeleton.bones.map(e=>pu(e.name)):[],a=i.map(e=>e.endsWith(`Foot`)),o=new Set,s=[],c=[],l=[],u=new Map;for(let e=0;e<t.count;e++){let o=0,d=0,f=0;if(n&&r)for(let t=0;t<4;t++){let i=r.getComponent(e,t),s=n.getComponent(e,t);i>d&&(d=i,o=s),a[s]&&(f+=i)}f>.35&&(s.push(e),(i[o]===`leftFoot`?c:l).push(e));let p=u.get(o)??{values:[1/0,-1/0,1/0,-1/0,1/0,-1/0],indices:[,,,,,,].fill(e)};for(let n=0;n<3;n++){let r=t.getComponent(e,n);r<p.values[n*2]&&(p.values[n*2]=r,p.indices[n*2]=e),r>p.values[n*2+1]&&(p.values[n*2+1]=r,p.indices[n*2+1]=e)}u.set(o,p)}for(let e of u.values())for(let t of e.indices)o.add(t);for(let e=0;e<256;e++)o.add(Math.floor(e*(t.count-1)/255));this.probes.push({mesh:e,body:[...o],feet:s,left:c,right:l})})}reset(e){for(let{bone:e,rotation:t}of this.restored)e.quaternion.copy(t);this.restored.length=0,e.position.set(0,0,0),e.quaternion.identity()}apply(e,t,n,r){let i=e.parent;if(!i)return;i.updateMatrixWorld(!0);let a=e=>t.find(t=>t.role===e)?.bone.getWorldPosition(new V),o=a(`head`),s=a(`leftFoot`),c=a(`rightFoot`),l=a(`leftArm`),u=a(`rightArm`);if(!o||!s||!c||!l||!u)return;let d=o.clone().sub(s.clone().add(c).multiplyScalar(.5)).normalize(),f=u.sub(l);f.addScaledVector(d,-f.dot(d)).normalize();let m=new V().crossVectors(f,d).normalize(),h=new V(n.normal.x,0,n.normal.z).normalize(),g=new V(0,1,0),_=new V().crossVectors(g,h).normalize(),v=new D().setFromRotationMatrix(new p().makeBasis(f,d,m)),y=new p().makeBasis(_,g,h);if(r?.mode===`wallRun`){let e=r.velocity.clone().addScaledVector(h,-r.velocity.dot(h)).normalize();if(e.lengthSq()>.1){let t=e.negate(),n=new V().crossVectors(h,t).normalize();y=new p().makeBasis(n,h,t)}}let b=new D().setFromRotationMatrix(y),x=i.getWorldQuaternion(new D);e.quaternion.copy(x).invert().multiply(b.multiply(v.invert())).multiply(x),i.updateMatrixWorld(!0);let S=new V,C=new V().copy(n.point),w=1/0,T=1/0,E=-1/0,O=1/0,k=1/0;for(let e of this.probes){for(let t of e.body)e.mesh.getVertexPosition(t,S).applyMatrix4(e.mesh.matrixWorld),k=Math.min(k,S.dot(h)-C.dot(h));for(let t of e.feet)e.mesh.getVertexPosition(t,S).applyMatrix4(e.mesh.matrixWorld),w=Math.min(w,S.y),T=Math.min(T,S.dot(_)),E=Math.max(E,S.dot(_)),O=Math.min(O,S.dot(h)-C.dot(h))}if(!Number.isFinite(w+O+k))return;let A=i.getWorldPosition(new V),ee=Math.max(.015-O,.035-k),j=g.multiplyScalar(A.y-w).addScaledVector(_,A.dot(_)-(T+E)*.5).addScaledVector(h,ee);e.position.copy(j.applyQuaternion(x.invert())),this.footGap=O+ee,this.bodyClearance=k+ee,i.updateMatrixWorld(!0);for(let e of[`left`,`right`]){if(r?.mode===`wallRun`&&!n.feetTouching)break;let a=t.find(t=>t.role===`${e}UpLeg`)?.bone,o=t.find(t=>t.role===`${e}Leg`)?.bone,s=t.find(t=>t.role===`${e}Foot`)?.bone;if(!a||!o||!s)continue;for(let e of[a,o,s])this.restored.push({bone:e,rotation:e.quaternion.clone()});let c=1/0;for(let t of this.probes)for(let n of t[e])t.mesh.getVertexPosition(n,S).applyMatrix4(t.mesh.matrixWorld),c=Math.min(c,S.dot(h)-C.dot(h));if(!Number.isFinite(c)||r?.mode===`wallRun`&&c>.08)continue;let l=a.getWorldPosition(new V),u=o.getWorldPosition(new V),d=s.getWorldPosition(new V),f=s.getWorldQuaternion(new D),p=G.clamp(.02-c,-this.maxFootCorrection,this.maxFootCorrection),m=d.clone().addScaledVector(h,p),g=l.distanceTo(u),_=u.distanceTo(d),v=m.clone().sub(l).normalize(),y=G.clamp(l.distanceTo(m),Math.abs(g-_)+.001,g+_-.001),b=(g**2-_**2+y**2)/(2*y),x=u.clone().sub(l).addScaledVector(v,-u.clone().sub(l).dot(v));x.lengthSq()<1e-6&&x.copy(h).addScaledVector(v,-h.dot(v)),x.normalize();let w=l.clone().addScaledVector(v,b).addScaledVector(x,Math.sqrt(Math.max(0,g**2-b**2))),T=(e,t,n)=>{let r=e.parent.getWorldQuaternion(new D),a=new D().setFromUnitVectors(t.normalize(),n.normalize());e.quaternion.premultiply(r.clone().invert().multiply(a).multiply(r)).normalize(),i.updateMatrixWorld(!0)};T(a,u.clone().sub(l),w.clone().sub(l));let E=o.getWorldPosition(new V);T(o,s.getWorldPosition(new V).sub(E),m.clone().sub(E)),s.quaternion.copy(s.parent.getWorldQuaternion(new D).invert().multiply(f)),i.updateMatrixWorld(!0)}O=1/0,k=1/0,w=1/0;for(let e of this.probes){for(let t of e.body)e.mesh.getVertexPosition(t,S).applyMatrix4(e.mesh.matrixWorld),k=Math.min(k,S.dot(h)-C.dot(h));for(let t of e.feet)e.mesh.getVertexPosition(t,S).applyMatrix4(e.mesh.matrixWorld),O=Math.min(O,S.dot(h)-C.dot(h)),w=Math.min(w,S.y)}Number.isFinite(w)&&(e.position.add(new V(0,A.y-w,0).applyQuaternion(i.getWorldQuaternion(new D).invert())),i.updateMatrixWorld(!0)),this.footGap=O,this.bodyClearance=k}};function od(e,t,n){let r=new V(t.x,0,t.z).normalize().negate();if(r.lengthSq()<1e-8)return null;let i=new V(-r.z,0,r.x);for(let t of[0,-.18,.18]){let a=n(new V(e.x,e.y+.18,e.z).addScaledVector(i,t),r,.59);if(!(!a||Math.abs(a.normal.y)>.35||a.normal.dot(r)>-.75))return{point:a.point,normal:a.normal,feetTouching:!0,colliderId:`rendered-facade`}}return null}function sd(e,t,n,r){let i=new V(t.x,0,t.z).normalize().negate(),a=n(new V(e.x,e.y+1.8,e.z).addScaledVector(i,1.2),new V(0,-1,0),2,.85);if(!a||a.point.y<e.y-.12||a.point.y>e.y+1.5)return null;let o=a.point.clone().add(new V(0,.025,0));if(!r(o))return null;for(let e of[new V(.42,0,0),new V(-.42,0,0),new V(0,0,.42),new V(0,0,-.42)]){let t=n(o.clone().add(e).add(new V(0,.08,0)),new V(0,-1,0),.18,.85);if(!t||Math.abs(t.point.y-a.point.y)>.08)return null}return r(new V(e.x,o.y,e.z))?o:null}var cd=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r));function ld(e,t,n,r){t.grounded&&!n.ascend&&(e=`grounded`);let i=t.grounded;n.hoverToggle&&(e=e===`hover`||e===`cruise`?`freefall`:`hover`),n.cruiseToggle&&(e=e===`cruise`?`freefall`:`cruise`);let a=(n.hoverToggle||n.cruiseToggle)&&e===`freefall`;if(n.ascend&&!a&&e!==`cruise`&&(e!==`freefall`||n.ascendPressed)&&(e=`hover`),e===`grounded`&&!t.grounded&&(e=`freefall`),e===`hover`||e===`cruise`){if(t.grounded=!1,i&&(t.velocity.y=Math.max(t.velocity.y,e===`cruise`?12:10)),e===`hover`){let e=n.ascend?18:n.descend?-13:0;t.velocity.y=cd(t.velocity.y,e,n.ascend||n.descend?6:8,r)}else{let e=n.boost?72:52;t.velocity.x=cd(t.velocity.x,n.aim.x*e,4.8,r),t.velocity.z=cd(t.velocity.z,n.aim.z*e,4.8,r);let a=n.ascend?18:n.descend?-15:0,o=i?12:n.aim.y*e+a;t.velocity.y=cd(t.velocity.y,o,4.8,r)}}return e}var ud=class{constructor(e,t){this.emitters=[],this.light=new ze(`#73e7ff`,0,7,2),this.point=new V,this.direction=new V,this.inverse=new p,this.inverseRotation=new D,this.up=new V(0,1,0),this.root=e;let n=new En(.075,1,8).translate(0,.5,0),r=new Xe(.075,8,6),i=new Ne({color:`#e4fcff`,toneMapped:!1}),a=new Ne({color:`#50cfff`,transparent:!0,opacity:.58,blending:2,depthWrite:!1,toneMapped:!1});for(let o of[`left`,`right`])for(let s of[`Hand`,`Foot`]){let c=t.find(e=>e.role===`${o}${s}`)?.bone,l=t.find(e=>e.role===`${o}${s===`Hand`?`ForeArm`:`Leg`}`)?.bone;if(!c||!l)continue;let u=new w;u.name=`${o} ${s} repulsor`,u.visible=!1;let d=new W(n,a);u.add(d,new W(r,i)),e.add(u),this.emitters.push({group:u,bone:c,parentBone:l,plume:d,foot:s===`Foot`})}this.light.name=`Iron Man repulsor light`,e.add(this.light)}update(e,t,n,r){this.root.updateMatrixWorld(!0),this.inverse.copy(this.root.matrixWorld).invert(),this.inverseRotation.copy(this.root.getWorldQuaternion(new D)).invert();for(let i of this.emitters){if(i.group.visible=e,!e)continue;i.bone.getWorldPosition(this.point),i.parentBone.getWorldPosition(this.direction),this.direction.subVectors(this.point,this.direction).normalize(),this.point.addScaledVector(this.direction,i.foot?.12:.07),i.group.position.copy(this.point.applyMatrix4(this.inverse)),i.group.quaternion.setFromUnitVectors(this.up,this.direction.applyQuaternion(this.inverseRotation));let a=1+Math.sin(r*39+ +!!i.foot)*.075;i.plume.scale.set(1,(.32+Math.min(t,75)*.015+(n?.6:0))*a,1)}this.light.position.set(0,.5,0),this.light.intensity=e?n?3:1.5:0}};function dd(e,t,n,r=5.4){let i=e.clone().setY(0).normalize();i.lengthSq()<.5&&i.set(0,0,1);let a=new V(-i.z,0,i.x),o=Math.tanh(t/1.05)*1.08,s=r*(.7+.3*Math.cos(o)),c=r*.82*Math.sin(o);return i.multiplyScalar(s).addScaledVector(a,c).add(new V(0,2.2+Math.sin(n)*r,0))}function fd(e,t,n){let r=new V().copy(t),i=new V().copy(n),a=.12,o=0;for(let t=0;t<20;t++){i.y-=29*a;let t=r.clone().addScaledVector(i,a),n=e.sweepCapsule(r,t,i);if(o+=a,n.grounded||n.blocked)return{time:o,point:n.position,impact:Math.max(0,-i.y),clear:!n.wallNormal};r.copy(n.position)}return{time:o,point:r,impact:Math.max(0,-i.y),clear:!0}}function pd(e,t,n){let r=new V(n.x,0,n.z).normalize();if(r.lengthSq()<.1)return!1;let i=new V().copy(t),a=Math.max(4,Math.hypot(n.x,n.z)*.85),o=i.clone().addScaledVector(r,a),s=e.sweepCapsule(i,o,r);if(s.wallNormal||s.position.distanceTo(o)>.3)return!1;for(let t=1;t<=6;t++){let n=i.clone().lerp(o,t/6),r=e.supportAt(n,.12,.25);if(!r||r.normal.y<.85)return!1}return!0}var md=$e(),hd=e=>e===`glide`?`fly`:e===`iron-hover`?`hover`:e===`iron-cruise`||e===`iron-boost`?`fly`:e===`iron-freefall`?`fall`:e===`swing`?`swing`:e===`webZip`||e===`pointLaunch`?`zip`:e===`wallRun`?`wall`:e===`wallCrawl`?`crawl`:e===`dive`?`dive`:e===`run`?`run`:e===`perch`?`perch`:e===`fall`?`fall`:e===`idle`||e===`land`?`idle`:`jump`,gd=.12,_d=48,vd=e=>{let t=new V(e.spawn?.[0]??0,0,e.spawn?.[1]??0).applyAxisAngle(new V(0,1,0),e.rotation??0);return new V(e.position[0]+t.x,gd,e.position[2]+t.z)},yd=new Ut,bd=new V,xd=(e,t,n)=>Math.max(t,Math.min(n,e)),Sd=(e,t,n,r)=>G.lerp(e,t,1-Math.exp(-n*r)),Cd=(e,t,n,r)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-n*r)),wd=(e,t)=>`${e}:${t}`;function Td(e,t){let n=Math.floor(t.min.x/_d),r=Math.floor(t.max.x/_d),i=Math.floor(t.min.z/_d),a=Math.floor(t.max.z/_d);for(let o=n;o<=r;o+=1)for(let n=i;n<=a;n+=1){let r=wd(o,n),i=e.get(r)??[];i.push(t),e.set(r,i)}}function Ed(e,t){let n=Math.floor(t.min.x/_d),r=Math.floor(t.max.x/_d),i=Math.floor(t.min.z/_d),a=Math.floor(t.max.z/_d);for(let o=n;o<=r;o+=1)for(let n=i;n<=a;n+=1){let r=e.get(wd(o,n));if(!r)continue;let i=r.indexOf(t);i>=0&&r.splice(i,1),r.length||e.delete(wd(o,n))}}function Dd(e,t,n,r){let i=r.rotation??0,a=new Ut().makeEmpty();for(let o of[e[0],e[3]])for(let s of[e[1],e[4]])for(let c of[e[2],e[5]]){let e=new V(o*t,s*t,c*t).add(n).applyAxisAngle(new V(0,1,0),i).add(new V(...r.position));a.expandByPoint(e)}return a}function Od(e){let t=Math.sin(e*9187.231+41.77)*43758.5453;return t-Math.floor(t)}function kd(){let e=document.createElement(`canvas`);e.width=512,e.height=512;let t=e.getContext(`2d`);if(t){t.fillStyle=`#30363d`,t.fillRect(0,0,512,512);for(let e=0;e<9e3;e+=1){let n=38+Math.floor(Od(e+900)*32);t.fillStyle=`rgba(${n},${n+2},${n+4},${.08+Od(e+77)*.18})`;let r=1+Math.floor(Od(e+101)*3);t.fillRect(Od(e+33)*512,Od(e+61)*512,r,r)}t.strokeStyle=`rgba(12,16,20,.14)`,t.lineWidth=1;for(let e=0;e<4;e+=1){t.beginPath(),t.moveTo(Od(e+400)*512,Od(e+500)*512);for(let n=0;n<3;n+=1)t.lineTo(Od(e*17+n+600)*512,Od(e*23+n+700)*512);t.stroke()}}let n=new An(e);return n.colorSpace=Fe,n.wrapS=n.wrapT=j,n.repeat.set(42,42),n.anisotropy=4,n}function Ad(e){let t=[{wall:`#172a3d`,mortar:`#29445b`,dark:`#07111d`,light:`#a9e5ff`},{wall:`#403431`,mortar:`#685149`,dark:`#130e0d`,light:`#ffd08e`},{wall:`#202b33`,mortar:`#53636c`,dark:`#091014`,light:`#d8f4ff`},{wall:`#26314b`,mortar:`#3d4f75`,dark:`#080d1d`,light:`#88cfff`}][e%4],n=document.createElement(`canvas`);n.width=256,n.height=512;let r=n.getContext(`2d`);if(r){r.fillStyle=t.wall,r.fillRect(0,0,n.width,n.height);for(let n=0;n<18;n+=1)for(let i=0;i<7;i+=1){let a=10+i*35,o=8+n*28,s=Od(e*1e3+n*19+i*7)>.68;r.fillStyle=s?t.light:t.dark,r.fillRect(a,o,20,16),r.fillStyle=s?`rgba(255,255,255,.24)`:`rgba(95,170,205,.09)`,r.fillRect(a+2,o+2,3,12)}r.strokeStyle=t.mortar,r.lineWidth=3;for(let e=0;e<=18;e+=1){let t=e*28;r.beginPath(),r.moveTo(0,t),r.lineTo(256,t),r.stroke()}}let i=new An(n);return i.colorSpace=Fe,i.wrapS=i.wrapT=j,i.anisotropy=4,i}var jd=[[-196,-224],[-84,-224],[84,-224],[196,-224],[-252,-96],[-140,-96],[140,-96],[252,-96],[-196,32],[-84,32],[84,32],[196,32],[-252,160],[-140,160],[0,160],[140,160],[252,160],[-196,224],[-84,224],[84,224],[196,224]];function Md(e,t){let n=e.children.filter(e=>{let t=!1;return e.traverse(e=>{e instanceof W&&(t=!0)}),t});e.updateWorldMatrix(!0,!0);let r=n.map(e=>({object:e,height:new Ut().setFromObject(e).getSize(new V).y})).sort((e,t)=>e.height-t.height),i=new Map(r.map((e,t)=>[e.object,t/Math.max(1,r.length-1)])),a=[];return n.forEach((n,r)=>{let o=new Ut().setFromObject(n),s=o.getSize(new V),c=62+(i.get(n)??0)*96+Od(r+1300)*12,l=xd((20+Od(r+1500)*12)/Math.max(s.x,s.z,.1),.62,2.15);n.scale.x*=l,n.scale.z*=l,n.scale.y*=c/Math.max(s.y,.1),n.updateWorldMatrix(!0,!0),o=new Ut().setFromObject(n),s=o.getSize(new V);let u=o.getCenter(new V),d=jd[r%jd.length],f=t.localToWorld(new V(d[0],0,d[1])),p=new V(f.x-u.x,f.y-o.min.y,f.z-u.z),m=e.matrixWorld.clone().invert(),h=new V().applyMatrix4(m),g=p.clone().applyMatrix4(m).sub(h);n.position.add(g),n.updateWorldMatrix(!0,!0),o=new Ut().setFromObject(n),a.push(o)}),e.updateWorldMatrix(!0,!0),a}function Nd(e,t,n){let r=new D,i=[],a=n.map(e=>e.clone().expandByScalar(12)),o=0;for(let e=-5;e<5;e+=1)for(let n=-4;n<4;n+=1){let s=(e+.5)*56,c=(n+.5)*64,l=26-Od(o+20)*5,u=36-Od(o+40)*6,d=1-Math.min(1,Math.hypot(s,c)/280),f=34+Od(o+60)*50+d*34,m=new V(s,f/2,c).applyAxisAngle(new V(0,1,0),t.rotation??0).add(new V(...t.position)),h=new Ut(new V(m.x-l/2,0,m.z-u/2),new V(m.x+l/2,f+.4,m.z+u/2));if(o+=1,a.some(e=>h.intersectsBox(e)))continue;let g=new p().compose(new V(s,f/2,c),r,new V(l,f,u)),_=new p().compose(new V(s,f+.2,c),r,new V(l+.35,.4,u+.35));i.push({collider:h,facadeMatrix:g,roofMatrix:_,variant:Math.floor(Od(o+800)*4)})}let s=new w;s.name=`Collision-safe Manhattan swing grid`;let c=new Dt(1,1,1),l=new Dt(1,1,1);for(let e=0;e<4;e+=1){let t=i.filter(t=>t.variant===e);if(!t.length)continue;let n=new Ye(c,new zt({map:Ad(e),color:`#ffffff`,roughness:.78,metalness:.05}),t.length),r=new Ye(l,new zt({color:[`#243542`,`#4b403b`,`#38444a`,`#303c58`][e],roughness:.9,metalness:.03}),t.length);t.forEach((e,t)=>{n.setMatrixAt(t,e.facadeMatrix),r.setMatrixAt(t,e.roofMatrix)}),n.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,n.name=`Swing tower facades ${e+1}`,r.name=`Clickable rooftop caps ${e+1}`,n.receiveShadow=!0,r.receiveShadow=!0,n.castShadow=!0,r.castShadow=!0,n.material.envMapIntensity=.5,r.material.envMapIntensity=.4,s.add(n,r)}let u=new W(new Dt(36,.035,560),new zt({color:`#2c3844`,roughness:.88,metalness:.02,envMapIntensity:.35}));return u.position.y=.012,u.name=`Central swing avenue`,u.receiveShadow=!0,s.add(u),e.add(s),{colliders:i.map(e=>e.collider),extent:560,buildingCount:i.length}}function Pd(e,t){let n=new Ne({transparent:!0,opacity:0,depthWrite:!1});n.colorWrite=!1;let r=new Ye(new Dt(1,1,1),n,e.length);r.name=t;let i=new p,a=new V,o=new V;return e.forEach((e,t)=>{e.getCenter(a),e.getSize(o),i.compose(a,new D,o),r.setMatrixAt(t,i)}),r.instanceMatrix.needsUpdate=!0,r.frustumCulled=!1,r}function Fd(e,t,n,r){let i=new W(new Dt(Math.max(8,t-.02),.28,Math.max(8,n-.02)),new zt({map:kd(),color:`#c9cfd6`,roughness:.94,metalness:.02,envMapIntensity:.35}));return i.position.y=-.16,i.receiveShadow=!0,i.name=`${r} solid gameplay floor`,i.userData.walkableStreetSurface=!0,e.add(i),i}function Id(e,t,n,r,i,a,o){let s=Math.max(4,Math.min(i,a)),c=xd(s*.18,Math.min(2,s*.2),s*.45),l=Math.max(2,(i-c)/2),u=Math.max(2,(a-c)/2),d=new Ne({transparent:!0,opacity:0,depthWrite:!1});d.colorWrite=!1;for(let i of[-1,1])for(let a of[-1,1]){let s=r.position[0]+i*(c/2+l/2),f=r.position[2]+a*(c/2+u/2),p=new Ut(new V(s-l/2,0,f-u/2),new V(s+l/2,Math.max(12,o),f+u/2));t.push(p);let m=new W(new Dt(l,Math.max(12,o),u),d);m.position.set(s,Math.max(12,o)/2,f),m.name=`${r.name} building collision`,e.add(m),n.add(m)}}function Ld(e,t,n){let r=t.clone().sub(e),i=r.length();if(i<.001)return t;let a=new fe(e,r.normalize()),o=i;for(let t of n){yd.copy(t).expandByScalar(.3);let n=a.intersectBox(yd,bd);n&&(o=Math.min(o,n.distanceTo(e)-.3))}return o<i&&t.copy(e).addScaledVector(r,Math.max(1.4,o)),t.y=Math.max(1.15,t.y),t}function Rd(e,t,n){let r=.46,i=!1;for(let a of n){if(e.y>a.max.y+1.7||e.y+1.8<a.min.y||e.y>=a.max.y-.08)continue;let n=a.min.x-r,o=a.max.x+r,s=a.min.z-r,c=a.max.z+r;if(e.x<=n||e.x>=o||e.z<=s||e.z>=c)continue;let l=[{distance:e.x-n,axis:`x`,value:n,normal:-1},{distance:o-e.x,axis:`x`,value:o,normal:1},{distance:e.z-s,axis:`z`,value:s,normal:-1},{distance:c-e.z,axis:`z`,value:c,normal:1}].sort((e,t)=>e.distance-t.distance)[0];e[l.axis]=l.value,t[l.axis]*l.normal<0&&(t[l.axis]=0),i=!0}return i}function zd(e,t,n,r){let i=r.findHighestRoofSpawn();if(i)return i;let a=n.getCenter(new V),o=n.getSize(new V),s=t.filter(e=>{let t=e.getSize(new V);return e.max.y>4.12&&t.x>1.2&&t.z>1.2}),c=s.filter(e=>{let t=e.getCenter(new V);return Math.abs(t.x-a.x)<Math.max(8,o.x*.34)&&Math.abs(t.z-a.z)<Math.max(8,o.z*.34)}),l=[...c.sort((e,t)=>t.max.y-e.max.y),...s.filter(e=>!c.includes(e)).sort((e,t)=>t.max.y-e.max.y)],u=r.findRoofSpawn(l);if(!u)throw Error(`${e.name} has no verified clear, rendered rooftop spawn`);return u}var Bd=(0,Vs.forwardRef)(function(e,t){let n=(0,Vs.useRef)(null),r=(0,Vs.useRef)(()=>void 0),i=(0,Vs.useRef)(()=>void 0),a=(0,Vs.useRef)(()=>void 0),o=(0,Vs.useRef)(()=>void 0),s=(0,Vs.useRef)(e);return(0,Vs.useEffect)(()=>{s.current=e},[e]),(0,Vs.useImperativeHandle)(t,()=>({travelTo:e=>r.current(e),switchSuit:e=>i.current(e),raceAction:e=>a.current(e),activityAction:e=>o.current(e)}),[]),(0,Vs.useEffect)(()=>{let t=n.current;if(!t)return;let c=!1,u=0,d=!1,f=e.suitId,m=0,h=new T;h.fog=new O(`#9acbe3`,240,620);let g=yc(h),_=new Zt(h),v=new xc,y=new Ae(66,1,.08,1200);h.add(y);let x=new Ic;y.add(x.root);let C=new Qa({antialias:!0,powerPreference:`high-performance`});C.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),C.outputColorSpace=Fe,C.toneMapping=4,C.toneMappingExposure=1.12,C.shadowMap.enabled=!0,C.shadowMap.type=1;let A=new Us,ee=matchMedia(`(prefers-reduced-motion: reduce)`).matches;C.domElement.className=`game-canvas`,C.domElement.tabIndex=0,C.domElement.setAttribute(`aria-label`,`Playable 3D SpiderMan city`),t.appendChild(C.domElement),h.add(new Bt(`#9fc6e8`,.24));let j=new on(`#bdd5f2`,`#8a7a66`,1.02);h.add(j);let ne=new b(`#8fb0e8`,.4);ne.position.set(120,65,-120),h.add(ne);let re=new L(`#b8cdf5`),ie=new L(uc),ae=new L(`#bdd5f2`),oe=new L(`#26395e`),se=new L(`#8a7a66`),ce=new L(`#1b2233`),le=new V,N=new b(uc,3);N.position.copy(lc).multiplyScalar(620),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.camera.left=-170,N.shadow.camera.right=170,N.shadow.camera.top=170,N.shadow.camera.bottom=-170,N.shadow.camera.near=20,N.shadow.camera.far=800,N.shadow.bias=-4e-4,N.shadow.normalBias=.9,h.add(N),h.add(N.target);let P=new Map,de=``,F=new or(C),fe=(e,t)=>{let n=`${e}:${t?`n`:`d`}`,r=P.get(n);if(r){h.environment=r;return}let i=bc(e,t),a=F.fromEquirectangular(i).texture;i.dispose(),P.set(n,a),h.environment=a},me=[],he=new Map,ve=new Map,ye=new Map,be=new Set,xe=[],Se=new Map,we=new Map,Te=new Map,Ee=(e,t,n,r)=>Te.get(Cn)?.raycast(e,t,n,r)??null,De=(e,t=.12,n=.25)=>Ee(new V(e.x,e.y+t,e.z),new V(0,-1,0),t+n,.65),Oe=(e,t=0)=>{let n=e.clone().add(new V(0,.65,0)),r=t,i=-1/0;for(let e=0;e<16;e++){let a=t+e*Math.PI/8,o=new V(-Math.sin(a),0,-Math.cos(a)),s=Ee(n,o,100)?.distance??100,c=new V(Math.sin(a)*5.2,2.1,Math.cos(a)*5.2),l=Ee(n,c.clone().normalize(),c.length())?.distance??c.length(),u=(l>=5.2?1e3:0)+s+l*10-e*.01;u>i&&(r=a,i=u)}return r},I=new Map,je=new ge,R=new V,Me=new V(0,-1,0),z=e=>{if(!xe.length)return gd;let t=`${Math.round(e.x*2)}:${Math.round(e.z*2)}`,n=I.get(t);if(n!==void 0)return n;R.set(e.x,4.12,e.z),je.set(R,Me),je.far=8;let r=je.intersectObjects(xe,!1)[0],i=r?r.point.y:gd;return I.size>8e3&&I.clear(),I.set(t,i),i},Pe=0,Ie=(e,t=42)=>{let n=new Set(me),r=Math.floor((e.x-t)/_d),i=Math.floor((e.x+t)/_d),a=Math.floor((e.z-t)/_d),o=Math.floor((e.z+t)/_d);for(let e=r;e<=i;e+=1)for(let t=a;t<=o;t+=1)for(let r of he.get(wd(e,t))??[])n.add(r);return[...n]},Le=e=>{let t=ye.get(e.id);if(t)return t.clone();let n=vd(e),r=e.spawnClearance??2.5,i=e=>{let t=42;for(let n of Ie(e,42)){if(n.max.y<=gd)continue;let r=Math.max(n.min.x-e.x,0,e.x-n.max.x),i=Math.max(n.min.z-e.z,0,e.z-n.max.z);if(r===0&&i===0)return-1;t=Math.min(t,Math.hypot(r,i))}return t},a=n,o=i(n);if(o>=r)return a.y=z(a),a;let s=ve.get(e.id),c=Math.min(120,e.targetWidth*.28),l=Math.max(.75,Math.min(8,c/4)),u=Math.min(4,e.targetWidth*.04);for(let e=l;e<=c;e+=l)for(let t=0;t<32;t+=1){let c=t/32*Math.PI*2,l=n.clone().add(new V(Math.cos(c)*e,0,Math.sin(c)*e));if(s&&(l.x<s.min.x+u||l.x>s.max.x-u||l.z<s.min.z+u||l.z>s.max.z-u))continue;let d=i(l);if(d>=r)return l.y=z(l),l;let f=d-e*.006;d>=0&&f>o&&(a=l,o=f)}return a.y=z(a),a},ze=new Set,Be=[],He=new Set,Ue=new Map,We=new Map,Ge=Uc(new Ro);Ge.setMeshoptDecoder(Gc);let Ke=new uo,Je=Ke.raw.keys,Xe=Re(),Ze=B(Xe),$e=null,et=e=>{Xe=k(e.detail),Ze=B(Xe)};window.addEventListener(`swing-profile-change`,et);let tt=Pn(),rt=null,it=!1,ot=e=>{tt=e.detail};window.addEventListener(`controller-settings`,ot);let st=new mo,ct=new go,lt=1,ut=()=>(h.fog instanceof O?h.fog.far:y.far)*lt,dt=new vo,ft=new bo,pt=new So(h),mt=``,ht=!1,gt=new Io,_t=new Bs(h),vt=[new V,new V],yt=0,bt=!1,xt=!1,St=!1,wt=!1,Tt=!1,Et=!1,Ot=!1,kt=null,jt={groundAt:e=>{let t=Te.get(Cn)?.supportAt(e,1.5,40);return t?Zu(t,.8):null},move:(e,t,n)=>{let r=Te.get(Cn);if(!r)return{...e};let i=hn[gt.snapshot()?.id??`hulk`].height,a=r.sweepCapsule(e,t,{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},n,i);return{x:a.position.x,y:a.position.y,z:a.position.z}},lineOfSight:(e,t)=>{let n=new V().copy(t).sub(e),r=n.length();return r<.1||!Ee(new V().copy(e),n.normalize(),r-.08)}},Mt=At(e.districtId),Nt=vd(Mt),H={position:Nt.clone(),velocity:new V,facing:0,grounded:!0},U=jl(H.position,H.velocity);U.grounded=!0,U.mode=`idle`;let Pt=!1,Ft=0,It={time:0,clear:!1},Lt=0,Rt=0,zt=7,Vt=1/0,Ht=!1,Kt=!1,qt=!1,Jt=new V,Yt=new V,Xt=new V,Qt=new V,$t=new V,tn=new V,nn=Mt.spawnYaw??0,rn=Mt.spawnPitch??.08,an=0,sn=0,cn=nn,ln=!1,un=new V(0,0,1),dn=null,pn=`idle`,mn=null,gn=`connecting`,_n=0,vn=0,yn=-1,bn=new Map,xn=new Map,Sn=new Map,Cn=e.districtId,wn=0,Tn=0,En=new V,Dn=new V,On=new V,kn=0,An=0,jn=60,Mn=0,Nn=0,Fn=performance.now(),In=!1,Ln=0,Rn=0,zn=null,K=null,Bn=!1,Vn=!1,Hn=!1,Un=!1,Wn=!1,Gn=0,Kn={slingshotAnchors:null,cornerTarget:null},qn=!1,Jn=!1,Yn=!1,Xn=!1,Zn=!1,Qn=null,$n=-10,er=[],tr=0,nr={left:100,right:100},rr=0,ir=!1,ar=-1,sr,cr=!1,lr=!1,ur=!1,dr=`grounded`,fr=rd(),pr=-10,mr=[],hr=new V(1/0,1/0,1/0),gr=new Gt(1/0,1/0),_r=null,vr=new Gt(0,0),yr=new ge;yr.far=360;let br=new Float32Array(6),xr=new Qe;xr.setAttribute(`position`,new Ct(br,3));let Sr=new at(xr,new en({color:`#e6fbff`,transparent:!0,opacity:.94}));Sr.visible=!1,Sr.frustumCulled=!1,h.add(Sr);let Cr=null,wr=new V,Tr=new W(new ke(.65,.85,32),new Ne({color:16777215,side:2,depthTest:!1}));Tr.visible=!1,Tr.renderOrder=50,h.add(Tr);let Er=new no(h),Dr=()=>{let e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight);C.setSize(e,n,!1);let r=C.getDrawingBufferSize(new Gt);A.resize(r.x,r.y),y.aspect=e/n,y.updateProjectionMatrix();for(let e of Se.values())e.horizon.invalidate()};Dr();let Or=new ResizeObserver(Dr);Or.observe(t);let kr=()=>s.current.onLoadedDistricts(new Set(He)),Ar=(e,t,n,r,i=!0)=>new Promise((a,o)=>{Ge.load(e,e=>a(e),e=>{let a=e.total>0?e.loaded/e.total:Math.min(.92,e.loaded/2e7);i&&s.current.onStatus(`Streaming ${t}`,n+(r-n)*xd(a,0,1))},o)}),q=null,jr=null,Mr=null,Nr=null,Pr=Promise.resolve(),Fr=0,Ir=-1,Lr=`speed`,Rr=``,zr=null,Br=`Own the skyline`,Vr=0,Hr=!1,Ur=new sc(h),Wr=()=>performance.timeOrigin+performance.now(),Gr=()=>{Fr++,Nr&&=(Nr.root.removeFromParent(),Nr.model.traverse(e=>{e instanceof W&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}),null)},Kr=()=>{if(!q?.course||!dn||q.course.id===Rr)return;let e=q.course,t=Te.get(Cn);if(!t)return;Rr=e.id,$e=e.swingProfile?B(e.swingProfile):null,zr=Qs(e.id),q.bestSplits=$s(e.id)?.splits??[],Ur.setCourse(e,t),Mr=null,Gr();let n=Fr;Pr.then(()=>Zs(e.id)).then(t=>{if(c||n!==Fr||q?.course?.id!==e.id||!t||!dn)return;Mr=t;let r=ro(dn.model);r.traverse(e=>{e instanceof W&&(e.material=new Ne({color:`#8beaff`,transparent:!0,opacity:.24,depthWrite:!1}),e.frustumCulled=!1)});let i=new w,a=new w;a.add(r),i.add(a),h.add(i),i.visible=!1,Nr={root:i,surfaceFrame:a,model:r}}).catch(()=>{Br=`PB ready · ghost storage unavailable`})},qr=e=>{let t=bn.get(e);t&&(h.remove(t.root),t.root.traverse(e=>{e instanceof W&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))}),bn.delete(e))},Jr=()=>{for(let e of bn.keys())qr(e);xn.clear()},Yr=e=>{let t=xn.get(e.playerId);if(t&&e.sequence<=t.sequence)return;xn.set(e.playerId,e);let n=bn.get(e.playerId);if(n&&n.suitId===e.suitId){n.targetPosition.fromArray(e.position),n.targetYaw=e.yaw,n.mode=e.mode,n.velocity.fromArray(e.velocity),n.lastSequence=e.sequence,n.lastUpdate=performance.now();return}if(n&&qr(e.playerId),Sn.has(e.playerId))return;let r=(async()=>{let t=nt(e.suitId),n=await Ar(t.model,`${t.name} network avatar`,0,0,!1);if(c)return;let r=xn.get(e.playerId);if(!r||r.suitId!==t.id||r.districtId!==Cn)return;hu(n.scene,C,`character`),Wc(n.scene);let i=Cu(n.animations,t);if(wu(n.scene,t,i),t.animationSource&&t.animationSource!==t.model){let r=await Ar(t.animationSource,`network traversal library`,0,0,!1);if(c||!xn.has(e.playerId))return;i.push(...bu(r.animations,r.scene,n.scene))}gu(n.scene,t,2.05);let a=new w;a.name=`Network player: ${e.playerId}`,t.traversal===`ironman`&&(a.rotation.order=`YXZ`);let o=new w;o.add(n.scene),a.add(o),a.position.fromArray(r.position),a.rotation.y=r.yaw;let s=new W(new ke(.72,.82,32),new Ne({color:`#44e5ff`,transparent:!0,opacity:.72,side:2}));s.rotation.x=-Math.PI/2,s.position.y=.025,s.name=`Network player marker`,a.add(s),h.add(a);let l=new Ku(n.scene,t,i);bn.set(e.playerId,{root:a,surfaceFrame:o,wallPose:new ad(n.scene,t.id),animator:l,repulsors:t.traversal===`ironman`?new ud(a,l.bones):null,velocity:new V().fromArray(r.velocity),targetPosition:new V().fromArray(r.position),targetYaw:r.yaw,mode:r.mode,suitId:r.suitId,lastSequence:r.sequence,lastUpdate:performance.now(),animationAccumulator:0})})().catch(e=>console.info(`[multiplayer] remote avatar unavailable`,e)).finally(()=>{Sn.delete(e.playerId)});Sn.set(e.playerId,r)},Xr=e=>{let t=performance.now();for(let[n,r]of bn){if(t-r.lastUpdate>5e3){qr(n);continue}r.root.position.lerp(r.targetPosition,1-Math.exp(-12*e)),r.root.rotation.y=Cd(r.root.rotation.y,r.targetYaw,12,e),r.animationAccumulator+=e;let i=r.animationAccumulator>=1/ct.settings.secondaryAnimationHz;i&&r.wallPose.reset(r.surfaceFrame);let a=r.mode===`wallCrawl`,o=r.mode===`iron-cruise`||r.mode===`iron-boost`;if(r.root.rotation.x=Sd(r.root.rotation.x,r.mode===`glide`?-Math.atan2(r.velocity.y,Math.hypot(r.velocity.x,r.velocity.z)):o?-1.1*r.animator.cruiseBlend:0,7,e),i&&r.animator.update(r.animationAccumulator,{pose:hd(r.mode),mode:r.mode,grounded:[`idle`,`land`,`perch`,`run`].includes(r.mode),speed:a?r.velocity.length():Math.hypot(r.velocity.x,r.velocity.z),verticalSpeed:r.velocity.y,boost:r.mode===`iron-boost`,crawlDirection:r.velocity.y<-.1?-1:1}),i&&(r.animationAccumulator=0),r.repulsors?.update(o||r.mode===`iron-hover`,r.velocity.length(),r.mode===`iron-boost`,Ln),a&&i){let e=new V(Math.sin(r.targetYaw),0,Math.cos(r.targetYaw)),t=od(r.root.position,e,Ee);t&&r.wallPose.apply(r.surfaceFrame,r.animator.bones,t)}}},Zr=()=>{s.current.onOnlineCount(gn===`online`?_n+1:1,gn),C.domElement.dataset.multiplayerStatus=gn,C.domElement.dataset.onlinePlayers=String(gn===`online`?_n+1:1)},Qr=()=>{mn=Zc.create(f,Cn,{onPlayerState:Yr,onRacePacket:e=>{let t=Te.get(Cn);e.course&&(!t||!t.isCapsuleClear(new V().fromArray(e.course.start))||!t.isCapsuleClear(new V().fromArray(e.course.finish)))||e.course?.mapId&&e.course.mapId!==Cn||(q?.receive(e,Wr()),q?.course?Kr():(Ur.clear(),Gr(),Mr=null,jr=null,Rr=``))},onPeers:e=>{_n=e.size;for(let t of xn.keys())e.has(t)||xn.delete(t);for(let t of bn.keys())e.has(t)||qr(t);Zr()},onStatus:e=>{gn=e,Zr()}}),Zr(),mn&&mn.join(Cn,f)},$r=(e,t)=>`${e}:${t}`,ei=e=>{let t=[];return e.traverse(e=>{e.userData.walkableStreetSurface&&t.push(e)}),t},ti=e=>{e.updateMatrix(),e.updateMatrixWorld(!0),e.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldNeedsUpdate=!1})},ni=(e,t)=>{let n=new V(t.x*e.tileWidth,0,t.z*e.tileDepth);for(let r of e.baseColliders){let e=r.clone().translate(n);Td(he,e),t.colliders.push(e),Pe+=1}I.clear()},ri=e=>{for(let t of e.colliders)Ed(he,t);Pe-=e.colliders.length,e.colliders.length=0,I.clear()},ii=(e,t,n)=>{let r=$r(t,n);if(e.tiles.has(r))return;let i=t===0&&n===0,a=i?e.template:e.template.clone(!0);a.position.set(e.template.position.x+t*e.tileWidth,e.template.position.y,e.template.position.z+n*e.tileDepth),h.add(a),ti(a);let o=e.anchorTemplate?i?e.anchorTemplate:e.anchorTemplate.clone():null;o&&(o.position.set(t*e.tileWidth,0,n*e.tileDepth),h.add(o),ti(o),ze.add(o),Be=[...ze]);let s=ei(a);for(let e of s)be.add(e);xe=[...be];let c={root:a,anchorProxy:o,walkables:s,colliders:[],x:t,z:n};e.tiles.set(r,c),ni(e,c)},ai=(e,t)=>{h.remove(t.root);for(let e of t.walkables)be.delete(e);t.anchorProxy&&(h.remove(t.anchorProxy),ze.delete(t.anchorProxy),Be=[...ze]),ri(t),e.tiles.delete($r(t.x,t.z)),xe=[...be]},oi=e=>{if(!e.parked){e.parked=!0;for(let t of e.tiles.values()){h.remove(t.root);for(let e of t.walkables)be.delete(e);t.anchorProxy&&(h.remove(t.anchorProxy),ze.delete(t.anchorProxy)),ri(t)}h.remove(e.horizon.root),Be=[...ze],xe=[...be]}},si=e=>{if(e.parked){e.parked=!1;for(let t of e.tiles.values()){h.add(t.root),ti(t.root),t.anchorProxy&&(h.add(t.anchorProxy),ti(t.anchorProxy),ze.add(t.anchorProxy));for(let e of t.walkables)be.add(e);ni(e,t)}h.add(e.horizon.root),Be=[...ze],xe=[...be]}},ci=(e,t,n=!1)=>{let r=Se.get(e);if(!r||r.parked)return;let i=At(e),a=Math.round((t.x-i.position[0])/r.tileWidth),o=Math.round((t.z-i.position[2])/r.tileDepth),s=new Set;for(let e=-1;e<=1;e+=1)for(let t=-1;t<=1;t+=1)s.add($r(a+e,o+t));if(q?.course&&q.course.mapId===e&&[`inviting`,`invited`,`countdown`,`racing`].includes(q.phase)){let e=q.course.finish,t=Math.round((e[0]-i.position[0])/r.tileWidth),n=Math.round((e[2]-i.position[2])/r.tileDepth);s.add($r(t,n))}for(let e of Array.from(r.tiles.values()))s.has($r(e.x,e.z))||ai(r,e);let c=[];for(let e of s){if(r.tiles.has(e))continue;let[t,n]=e.split(`:`).map(Number);c.push({x:t,z:n,distance:Math.hypot(t-a,n-o)})}c.sort((e,t)=>e.distance-t.distance);let l=n?c.length:1;for(let e=0;e<c.length&&e<l;e+=1)ii(r,c[e].x,c[e].z);r.horizon.update(y,t,r.tiles,ut()),C.domElement.dataset.horizonTileCount=String(r.horizon.root.userData.tileCount),r.centerX=a,r.centerZ=o,C.domElement.dataset.streamCenter=`${a}:${o}`,C.domElement.dataset.streamedTileCount=String(r.tiles.size)},li=(e,t=!0)=>{let n=Ue.get(e.id);if(n)return n;let r=We.get(e.model);r||=(async()=>{t&&s.current.onStatus(`Opening route to ${e.name}`,He.size?84:28);let n=await Ar(e.model,e.name,He.size?84:28,He.size?98:78,t);if(c)throw Error(`Game disposed`);let r=n.scene;if(e.id===`city-night`){let e=[];r.traverse(t=>{t instanceof qe&&e.push(t)});for(let t of e)t.parent?.remove(t)}r.traverse(t=>{if(!(t instanceof W))return;let n=(Array.isArray(t.material)?t.material:[t.material]).map(e=>e.name).join(` `),r=new Ut().setFromObject(t);t.userData.walkableStreetSurface=e.id===`new-york-city`&&r.max.y<(e.sourceGroundY??0)+1.5&&/citygen_streets|side_walks|citygen_curb|citygen_grass/i.test(n)}),hu(r,C,`city`),r.updateWorldMatrix(!0,!0);let i=new Ut().setFromObject(r),a=i.getSize(new V),o=Math.max(a.x,a.z,.001),l=e.targetWidth/o;r.scale.setScalar(l),r.updateWorldMatrix(!0,!0),i=new Ut().setFromObject(r);let u=i.getSize(new V),d=i.getCenter(new V);r.position.set(-d.x,-e.sourceGroundY*l,-d.z);let f=new w;f.name=`District: ${e.name}`,f.position.set(...e.position),f.rotation.y=e.rotation??0,f.add(r),e.id!==Cn&&f.traverse(e=>e.layers.set(31)),h.add(f),f.updateWorldMatrix(!0,!0);let m=e.id===`new-york-buildings`?Md(r,f):[new Ut().setFromObject(r)],g=m.reduce((e,t)=>e.union(t),new Ut().makeEmpty());ve.set(e.id,g.clone()),r.traverse(e=>{e.userData.walkableStreetSurface&&be.add(e)});let y=e.id===`new-york-buildings`?560:0,b=Math.abs(Math.cos(f.rotation.y)),x=Math.abs(Math.sin(f.rotation.y)),S=Math.max(8,Math.max(y,b*u.x+x*u.z)+8),T=Math.max(8,Math.max(y,x*u.x+b*u.z)+8);be.add(Fd(f,S,T,e.name)),xe=[...be];let E=[],O=null,k=0,A=!!(e.collisionData&&e.id!==`new-york-buildings`);if(e.collisionData&&A){let t=await fetch(e.collisionData);if(!t.ok)throw Error(`Collision data unavailable: ${t.status}`);let n=await t.json(),i=e.targetWidth/n.sourceWidth,a=new Dt(1,1,1),o=new Ne({transparent:!0,opacity:0,depthWrite:!1});o.colorWrite=!1;let s=new Ye(a,o,n.colliders.length);s.name=`${e.name} collision and web anchors`;let c=new p,l=new V,u=new V,d=0;for(let t of n.colliders){let n=Dd(t,i,r.position,e);n.max.y<=.87||(E.push(n),n.getCenter(l),n.getSize(u),c.compose(l,new D,u),s.setMatrixAt(d,c),d+=1,k+=1)}s.count=d,s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,h.add(s),ze.add(s),Be=[...ze],O=s}r.traverse(t=>{if(!(t instanceof W))return;let n=t.geometry.getAttribute(`position`)?.count??0;if(!A&&n>0&&n<18e4&&ze.add(t),A||n<=0||n>=18e4)return;let r=new Ut().setFromObject(t),i=r.getSize(new V);i.y>2.4&&i.x>1&&i.z>1&&i.x<e.targetWidth*.72&&i.z<e.targetWidth*.72&&(me.push(r),E.push(r),k+=1)});let ee=k,j=0;if(e.id===`new-york-buildings`){let t=Nd(f,e,m);j=t.extent;for(let e of t.colliders)E.push(e),k+=1;let n=Pd(E,`${e.name} landmark facades and clickable rooftops`);if(O){ze.delete(O);let t=new w;t.name=`${e.name} complete web anchor field`,t.add(O,n),h.add(t),ze.add(t),O=t}else h.add(n),ze.add(n),O=n;C.domElement.dataset.proceduralBuildingCount=String(t.buildingCount),C.domElement.dataset.clickableRooftopCount=String(t.buildingCount),C.domElement.dataset.landmarkColliderCount=String(ee)}ve.set(e.id,new Ut().setFromObject(f));let te=Math.max(j,Math.abs(Math.cos(f.rotation.y))*u.x+Math.abs(Math.sin(f.rotation.y))*u.z),ne=Math.max(j,Math.abs(Math.sin(f.rotation.y))*u.x+Math.abs(Math.cos(f.rotation.y))*u.z),re=E.some(e=>{let t=e.getSize(new V);return e.max.y>4.12&&t.x>1.2&&t.z>1.2});if(k<4||!re){let t=me.length;Id(h,me,ze,e,te,ne,u.y),E.push(...me.slice(t))}let ie=ve.get(e.id)??new Ut().setFromObject(f),ae=await Qu.fromObject(f,{onProgress:n=>{t&&!c&&s.current.onStatus(`Building ${e.name} surface collisions`,80+n*15)}});if(c)throw Error(`Game disposed`);we.set(e.id,ae),C.domElement.dataset.meshTriangles=String(ae.triangleCount),C.domElement.dataset.meshCollisionMb=(ae.byteLength/1048576).toFixed(2);let oe=zd(e,E,ie,ae);ye.set(e.id,oe),C.domElement.dataset.spawnSurfaceVerified=String(ae.hasSurface(oe)&&ae.isCapsuleClear(oe)),e.id===Cn&&(C.domElement.dataset.spawnMode=`highest-rooftop`,C.domElement.dataset.rooftopSpawn=oe.toArray().map(e=>e.toFixed(2)).join(`,`)),Be=[...ze];let se=ei(f);_.apply(f),v.apply(f);let ce=await Ar(e.horizonModel,`${e.name} skyline`,95,99,t);if(c)throw Error(`Game disposed`);let M=new cc(ce.scene,r.matrixWorld,f,S,T);_.apply(M.root),v.apply(M.root),e.id!==Cn&&M.root.traverse(e=>e.layers.set(31)),h.add(M.root);let le={root:f,anchorProxy:O,walkables:se,colliders:[],x:0,z:0};return Se.set(e.id,{horizon:M,template:f,anchorTemplate:O,baseColliders:E,tileWidth:S,tileDepth:T,tiles:new Map([[$r(0,0),le]]),centerX:0,centerZ:0,parked:!1}),Te.set(e.id,new $u(ae,S,T)),ti(f),O&&ti(O),ni(Se.get(e.id),le),me.length=0,ci(e.id,oe,!0),e.id!==Cn&&oi(Se.get(e.id)),f})(),We.set(e.model,r);let i=r.then(n=>(He.add(e.id),kr(),t&&e.id===Cn&&s.current.onStatus(`${e.name} online`,100),n)).catch(n=>{throw c?n:(Ue.delete(e.id),We.get(e.model)===r&&We.delete(e.model),console.error(`[city] unable to stream ${e.name}`,n),t&&s.current.onStatus(`${e.name} unavailable — connected street grid remains active`,100),n)});return Ue.set(e.id,i),i},ui=e=>{e&&(e.animator.mixer.stopAllAction(),e.root.removeFromParent(),e.root.traverse(e=>{e instanceof W&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))}))},di=async(e=f)=>{let t=++m,n=nt(e);s.current.onStatus(`Syncing ${n.name} rig`,4);let r=await Ar(n.model,`${n.name} suit`,4,42);if(c||t!==m)return;hu(r.scene,C,`character`),Wc(r.scene);let i=Cu(r.animations,n);wu(r.scene,n,i);let a=[...i];if(n.animationSource&&n.animationSource!==n.model){s.current.onStatus(`Calibrating ${n.name} traversal rig`,43);let e=await Ar(n.animationSource,`${n.name} traversal library`,43,58,!1);a.push(...bu(e.animations,e.scene,r.scene))}if(c||t!==m)return;gu(r.scene,n,2.05);let o=new w;o.name=`Player: ${n.name}`,n.traversal===`ironman`&&(o.rotation.order=`YXZ`);let l=new w;l.name=`Surface-aligned avatar pose`,l.add(r.scene),o.add(l),o.position.copy(H.position),h.add(o);let u=new Ku(r.scene,n,a),d=n.traversal===`ironman`?new ud(o,u.bones):null,p={root:o,model:r.scene,animator:u,surfaceFrame:l,wallPose:new ad(r.scene,n.id),repulsors:d};p.animator.update(.18,{pose:`perch`,grounded:!0,speed:0,verticalSpeed:0});let g=dn;dn=p,f=n.id,x.setSuit(p.model),ui(g),C.domElement.dataset.suit=n.id,C.domElement.dataset.animationClips=u.clips.map(e=>e.name).join(`|`),C.domElement.dataset.rigRoles=[...new Set(u.bones.map(e=>e.role))].join(`|`),s.current.onStatus(`${n.name} ready`,100)};i.current=e=>{e!==f&&di(e).then(()=>{c||f!==e||(Jr(),mn&&mn.join(Cn,f))})};let fi=async()=>{let e=await Ar(Lc,`authored Spider-Man web`,0,0,!1);c||(Cr=new Hc(e.scene),h.add(Cr.group),C.domElement.dataset.webVisual=`downloaded-spiderman-web`)},pi=e=>{let t=C.domElement.getBoundingClientRect();document.pointerLockElement===C.domElement?vr.set(0,0):vr.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);let n=`pressure`in e&&typeof e.pressure==`number`?e.pressure:0;n>0&&Math.abs(n-.5)>.015&&(cr=!0),cr&&n>0&&(sr=xd(n,.1,1)),Ke.setPressure(sr)},mi=(e,t)=>{if(!t&&Ln-pr<.12&&hr.distanceToSquared(H.position)<100&&gr.distanceToSquared(e)<.002&&!Jn){let e=mr.filter(e=>{let t=e.point.x-H.position.x,n=e.point.y-(H.position.y+1.3),r=e.point.z-H.position.z,i=t*t+n*n+r*r;return i>9&&i<22500});if(e.length)return e}pr=Ln,hr.copy(H.position),gr.copy(e);let n=[];if(mr=n,we.has(Cn)){let r=new V(U.position.x,U.position.y+1.3,U.position.z),i=(e,t)=>{if(!e)return;let i=e.point.clone().sub(r),a=i.length();a<3||a>150||Ee(r,i.normalize(),Math.max(0,a-.08))||n.push({id:`mesh:${e.triangleIndex}:${e.point.x.toFixed(1)}:${e.point.z.toFixed(1)}`,point:e.point.clone(),normal:e.normal.clone(),kind:e.normal.y>.65?`roof`:`facade`,lineOfSight:!0,weight:t})};if(t&&t.lengthSq()>.02){let e=t.clone().normalize(),n=new V(-e.z,0,e.x);for(let t of[.08,.3,.65])for(let a of[0,-.4,.4]){let o=e.clone().addScaledVector(n,a);o.y=t,i(Ee(r,o.normalize(),150),1.3)}}for(let[t,n,r]of[[e.x,e.y,1.35],[e.x-.16,e.y+.15,.95],[e.x+.16,e.y+.15,.95],[e.x-.32,e.y+.32,.8],[e.x+.32,e.y+.32,.8]])yr.setFromCamera(new Gt(t,n),y),i(Ee(yr.ray.origin,yr.ray.direction,150),r);if(hi()){let e=nn,t=De(U.position,.2,180),n=(t?Math.max(0,U.position.y-t.point.y):0)>14||U.velocity.y<-8?[-.16,.1,.34,.62,.92]:[.34,.58,.87,1.13];for(let t of n)for(let n of[-1.65,-1.2,-.6,0,.6,1.2,1.65]){let a=e+n,o=new V(-Math.sin(a)*Math.cos(t),Math.sin(t),-Math.cos(a)*Math.cos(t));i(Ee(r,o,145),1+Math.max(-.04,t*.12))}}if(!n.length||hi())for(let e of Ie(U.position,92)){if(e.max.y<r.y+2)continue;let t=e.clampPoint(r,new V);t.y=xd(r.y+22,e.min.y+2,e.max.y-.1);let a=t.sub(r);if(a.lengthSq()<9||a.lengthSq()>8464)continue;let o=new V(-Math.sin(nn),0,-Math.cos(nn));if(!(a.clone().normalize().dot(o)<-.1)&&(i(Ee(r,a.normalize(),92),.8),n.length>=14))break}return C.domElement.dataset.lastAnchorCandidateCount=String(n.length),C.domElement.dataset.lastAnchorCandidate=n[0]?[n[0].point.x,n[0].point.y,n[0].point.z].map(e=>e.toFixed(2)).join(`,`):``,C.domElement.dataset.anchorValidation=`rendered-mesh-los`,n}let r=[e,new Gt(e.x-.11,e.y+.05),new Gt(e.x+.11,e.y+.05)],i=Ie(U.position,180);for(let e=0;e<r.length;e+=1){yr.setFromCamera(r[e],y);let t=yr.intersectObjects(Be,!0).find(e=>e.distance>5&&e.distance<170),a=t?.point;if(!a){let e=1/0;for(let t of i){let n=new Ut(new V(t.min.x,t.min.y,t.min.z),new V(t.max.x,t.max.y,t.max.z)),r=yr.ray.intersectBox(n,new V);if(!r)continue;let i=r.distanceTo(y.position);i>5&&i<170&&i<e&&(e=i,a=r.clone())}}if(!a){let e=.42,t=new V(U.position.x,U.position.y,U.position.z);for(let n of i){if(n.max.y<=U.position.y+4)continue;let r=n.clampPoint(t,new V);r.y=xd(U.position.y+Math.min(18,Math.max(6,(n.max.y-U.position.y)*.58)),n.min.y+.4,n.max.y-.4);let i=r.clone().sub(y.position),o=i.length();if(o<=5||o>=170)continue;let s=yr.ray.direction.dot(i.normalize())-Math.abs(o-42)*.0015;s>e&&(e=s,a=r)}}if(!a)continue;let o=!!(t?.face&&t.face.normal.y>.65);n.push({id:t?`${t.object.uuid}:${t.instanceId??`mesh`}`:`facade:${a.x.toFixed(1)}:${a.z.toFixed(1)}`,point:{x:a.x,y:a.y,z:a.z},kind:o?`roof`:a.y>U.position.y+20?`facade`:`ledge`,lineOfSight:!0,weight:e===0?1.2:.86})}return C.domElement.dataset.lastAnchorCandidateCount=String(n.length),C.domElement.dataset.lastAnchorCandidate=n[0]?[n[0].point.x,n[0].point.y,n[0].point.z].map(e=>e.toFixed(2)).join(`,`):``,n},hi=()=>Yn||!!Di?.phase,gi=!1,_i=()=>{gi=!1,C.domElement.title=`Mouse capture was unavailable. Click the game to retry.`},vi=e=>{if(!(![0,2].includes(e.button)||!d)&&(e.preventDefault(),Ke.gainFocus(),Ke.setButton(e.button,!0),C.domElement.focus({preventScroll:!0}),pi(e),e.button===0&&U.zip&&(U.zip=null),document.pointerLockElement!==C.domElement&&!gi)){gi=!0;try{C.domElement.requestPointerLock()?.catch(_i)}catch{_i()}}},yi=e=>{pi(e)},bi=e=>{document.pointerLockElement===C.domElement&&(nn-=(e.movementX||0)*.003,nn=Math.atan2(Math.sin(nn),Math.cos(nn)),rn=xd(rn+(e.movementY||0)*.003,-1.12,1.22),vr.set(0,0))},xi=e=>e.preventDefault(),Si=e=>{[0,2].includes(e.button)&&(pi(e),Ke.setButton(e.button,!1))},Ci=e=>{if(e.code===`Escape`){Ti(),document.pointerLockElement===C.domElement&&document.exitPointerLock();return}let t=!Je.has(e.code);Ke.gainFocus(),Ke.setKey(e.code,!0),[`Space`,`KeyE`,`KeyF`,`ShiftLeft`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),e.code===`KeyN`&&t&&(ht=!0),e.code===`KeyK`&&t&&(bt=!0),e.code===`KeyL`&&t&&(xt=!0),e.code===`KeyI`&&t&&(St=!0),e.code===`KeyU`&&t&&(wt=!0),e.code===`KeyJ`&&t&&(Tt=!0),e.code===`KeyH`&&t&&(Et=!0),e.code===`KeyY`&&t&&(Ot=!0),e.code===`Space`&&t&&(Bn=!0),e.code===`KeyR`&&t&&(Pt=!0),e.code===`KeyG`&&t&&(Vn=!0),e.code===`KeyV`&&t&&!e.metaKey&&!e.ctrlKey&&(Ht=!Ht,s.current.onFirstPersonChange?.(Ht)),t&&[`KeyG`,`KeyC`,`KeyX`,`KeyZ`,`KeyL`].includes(e.code)&&!e.metaKey&&!e.ctrlKey&&e.preventDefault(),e.code===`KeyF`&&t&&Ft++,e.code===`KeyQ`&&t&&(qn=!0),e.code===`KeyE`&&t&&(Jn=!0),e.code===`KeyF`&&t&&(lr=!0),e.code===`KeyE`&&t&&(ur=!0)},wi=e=>{Ke.setKey(e.code,!1),e.code===`KeyC`&&(Hn=!0),e.code===`KeyX`&&(Un=!0)},Ti=()=>{Ke.loseFocus(),bt=xt=St=wt=!1,Tt=Et=Ot=ht=!1,Vn=!1,Hn=!1,Un=!1,Wn=!0,Bn=!1,Pt=!1,Yn=!1,Xn=!1,Jn=!1,Zn=!0,ir=!1,lr=!1,ur=!1,qn=!1},Ei=()=>{gi=!1;let e=document.pointerLockElement===C.domElement;C.domElement.dataset.pointerLocked=String(e),C.domElement.title=e?`Esc releases the mouse`:`Click to capture the mouse`,vr.set(0,0),e||Ti()},Di=null,Oi=null,ki=document.createElement(`output`);C.domElement.addEventListener(`mousedown`,vi),C.domElement.addEventListener(`pointermove`,yi),document.addEventListener(`mousemove`,bi),document.addEventListener(`pointerlockchange`,Ei),document.addEventListener(`pointerlockerror`,_i),C.domElement.addEventListener(`contextmenu`,xi),window.addEventListener(`mouseup`,Si),window.addEventListener(`keydown`,Ci,{passive:!1}),window.addEventListener(`keyup`,wi),window.addEventListener(`blur`,Ti);let Ai=()=>{let e=Te.get(Cn);if(!e)return[];let t=[];for(let n of[60,145,230]){let r=!1;for(let i=0;i<Math.PI*2&&!r;i+=Math.PI/6){let a=new V(H.position.x+Math.cos(i)*n,600,H.position.z+Math.sin(i)*n),o=e.raycast(a,{x:0,y:-1,z:0},800,.85);if(!o)continue;let s=o.point.clone();s.y=Zu(o),e.isCapsuleClear(s,.46,2.05,!1)&&(t.push({x:s.x,y:s.y,z:s.z}),r=!0)}}return t};o.current=e=>{if(e===`stop`){yt++,gt.stop(),ft.stop(),mt=``;return}if(e===`retry`){if(gt.snapshot()){if(gt.retry(),kt){let e=kt.clone();H.position.copy(e),H.velocity.set(0,0,0),Object.assign(U,jl(e)),U.grounded=!0,_r=null,Ke.resetActions()}mt=`Fight restarted · K strike · J dodge · H restrain`}else ft.retry(dt.score);return}if([`hulk`,`venom`,`ironman`].includes(e)){if(q&&[`countdown`,`racing`].includes(q.phase)){mt=`Finish or leave the race first`;return}ft.stop(),gt.stop();let t=e,n=Te.get(Cn);if(!n)return;let r=null,i=hn[t].height;for(let e of[0,12,24,36]){for(let t=0;t<Math.PI*2;t+=Math.PI/6){let a={x:H.position.x+Math.cos(t)*e,y:H.position.y+8,z:H.position.z+Math.sin(t)*e},o=n.supportAt(a,2,55);if(!o)continue;let s=o.point.clone();if(s.y=Zu(o),!n.isCapsuleClear(s,.55,2.05,!1)||Math.abs(s.y-H.position.y)>20)continue;let c=!0;for(let e=0;e<8;e++){let t=e*Math.PI/4,r={x:s.x+Math.cos(t)*7,y:s.y+5,z:s.z+Math.sin(t)*7},a=n.supportAt(r,2,18);if(!a){c=!1;break}let o=a.point.clone();if(o.y=Zu(a,.8),Math.abs(o.y-s.y)>1||!n.isCapsuleClear(o,1.15,i,!1)){c=!1;break}}if(c){r=s;break}}if(r)break}if(!r){mt=`Move to an open street or rooftop to begin the fight`;return}let a=y.getWorldDirection(new V).setY(0).normalize(),o={x:r.x+a.x*7,y:r.y+5,z:r.z+a.z*7},s=n.supportAt(o,2,18);if(!s){mt=`Move to a wider rooftop or street to begin the fight`;return}let l=s.point.clone();l.y=Zu(s,.8),kt=r.clone();let u=++yt;mt=`Loading ${hn[t].name} encounter…`,_t.load(t).then(()=>{c||u!==yt||(H.position.copy(r),H.velocity.set(0,0,0),Object.assign(U,jl(r)),U.grounded=!0,_r=null,Ke.resetActions(),nn=Math.atan2(-a.x,-a.z),y.position.copy(r).addScaledVector(a,-7).add(new V(0,3,0)),gt.start(t,l,jt),mt=`K strike · J dodge · Hold H to restrain · keep moving`)}).catch(e=>{!c&&u===yt&&(mt=`Encounter unavailable: ${e instanceof Error?e.message:String(e)}`)});return}if([`courier`,`rescue`,`style`].includes(e)){if(q&&[`countdown`,`racing`].includes(q.phase)){mt=`Finish or leave the race first`;return}yt++,gt.stop();let t=Ai();if(t.length<3){mt=`Move toward the city to find a clear route`;return}ft.start(xo(e,t),dt.score),mt=`Follow the cyan objective beacon`}};let ji=()=>{q=new pe(mn?.id??crypto.randomUUID(),{send:e=>mn?.publishRace(e),teleport:e=>{Ke.resetActions(),_r=null,H.position.fromArray(e),H.velocity.set(0,0,0),H.grounded=!0,Object.assign(U,jl(H.position)),U.grounded=!0,nn=Oe(H.position,0),U.heading=nn,y.position.copy(H.position).add(new V(Math.sin(nn)*7,3,Math.cos(nn)*7)),Kr()},started:()=>{dn&&(jr=new Ws(dn)),Br=`GO · reach the finish beacon`},finished:(e,t)=>{jr?.capture(t);let n=$s(e.id),r={score:q?.styleScore??0,splits:q?.splits??[]};if(ec(e,t,r.score,n)){let n=tc(e,t,r);zr=t,Br=n?`NEW PERSONAL BEST`:`PB set · browser storage unavailable`,jr&&(Pr=Xs(jr.record(e,t,r)).catch(()=>{Br=`PB saved · ghost storage unavailable`}))}else Br=`FINISH · challenge your ghost`;jr=null}}),a.current=e=>{if(q){if(e.startsWith(`mode-`)){Lr=e.slice(5);return}if(e===`restart`){Rr=``,q.restart(Wr()),Kr(),jr=null,Ur.setProgress(q.activeGateIds,q.completedGateIds);return}if(e===`accept`)yt++,gt.stop(),ft.stop(),q.accept(Wr()),Br=`Accepted · waiting for launch`;else if(e===`decline`)q.decline(Wr()),Ur.clear(),Gr();else if(e===`cancel`)q.cancel(Wr()),jr=null,Gr(),Ur.clear(),Rr=``;else{let t=Te.get(Cn);if(!t)return;let n=null;try{let e=JSON.parse(localStorage.getItem(`2099-last-course`)??`null`);ue(e)&&!e.gates?.length&&e.mapId===Cn&&(n=e)}catch{}let r=gn===`online`?_n:0,i=Le(At(Cn)).toArray(),a;try{a=n&&e===`pb`?n:_e(i,t.width,t.depth,e===`daily`?Ce(Cn):crypto.getRandomValues(new Uint32Array(1))[0],e===`daily`?-1:Ir>=0?Ir:n?.side??-1,{sample:nc(t),mode:`speed`,mapId:Cn})}catch{Br=`No clear course here · move to another rooftop and retry`,mt=Br;return}yt++,gt.stop(),ft.stop();let o=e===`pb`&&a.swingProfile?k(a.swingProfile):k(Xe),s=a.id.split(`:physics-`)[0];a={...a,id:`${s}:physics-${Ve(o)}`,mode:`speed`,swingProfile:o},q.invite(a,Wr(),r,crypto.randomUUID())&&(Ir=a.side,Rr=``,Br=r?`Inviting the lobby · accept to join`:`Solo time trial`,Kr())}}}};r.current=e=>{q?.cancel(Wr()),Ur.clear(),Gr(),Mr=null,jr=null,Rr=``,yt++,gt.stop(),ft.stop(),mt=``;let t=At(e);li(t).then(()=>{if(c)return;Cn=e;for(let[t,n]of Se){let r=t===e;r?si(n):oi(n),n.horizon.root.traverse(e=>e.layers.set(r?0:31));for(let e of n.tiles.values())e.root.traverse(e=>e.layers.set(r?0:31))}rn=t.spawnPitch??.08,H.position.copy(Le(t)),nn=Oe(H.position,t.spawnYaw??0),U.heading=nn,H.facing=nn,H.velocity.set(0,0,0),H.grounded=!0,dn?.root.position.copy(H.position),Ml(U,H.position,H.velocity),U.grounded=!0,U.mode=`idle`,U.advanced=jl().advanced,U.swing=null,U.zip=null,U.wall=null,U.wallCrawlActive=!1,U.mantle=null,U.swingNeedsRelease=!1,dr=`grounded`,pr=-10,mr=[],_r=null,an=0,y.up.set(0,1,0);let n=new V(Math.sin(nn)*10,4.4,Math.cos(nn)*10);y.position.copy(H.position).add(n),y.lookAt(H.position.clone().add(new V(0,1.4,0))),C.domElement.dataset.spawnMode=`highest-rooftop`,C.domElement.dataset.rooftopSpawn=H.position.toArray().map(e=>e.toFixed(2)).join(`,`),Jr(),_n=0,mn&&mn.join(e,f),s.current.onDistrictChange(e),s.current.onStatus(`${t.name} ready`,100)}).catch(()=>void 0)};let Mi=(e,t,n)=>{if(!dn)return;dn.wallPose.reset(dn.surfaceFrame),dn.root.position.copy(H.position);let r=gt.snapshot(),i=r?new V().copy(r.position).sub(H.position):null,a=i&&i.lengthSq()>.01?Math.atan2(-i.x,-i.z):n.animation.bodyYaw;dn.root.rotation.y=Cd(dn.root.rotation.y,r?.status===`active`?a:n.animation.bodyYaw,13,e),dn.root.rotation.z=Sd(dn.root.rotation.z,n.animation.bodyRoll,8,e);let o=nt(f).traversal===`ironman`,s=dr===`cruise`?-1.1*dn.animator.cruiseBlend:dr===`freefall`?n.animation.bodyPitch:0;dn.root.rotation.x=Sd(dn.root.rotation.x,H.grounded?0:o?s:n.animation.bodyPitch,8,e);let c=n.animation.state,l=o?dr===`cruise`?`fly`:dr===`hover`?`hover`:c===`run`?`run`:H.grounded?`idle`:H.velocity.y<-1?`fall`:`jump`:c===`glide`?`fly`:c===`slingshot`||c===`chargeJump`?`perch`:c===`cornerTether`?`zip`:c===`swing`?`swing`:c===`webZip`||c===`pointLaunch`?`zip`:c===`wallRun`?`wall`:c===`wallCrawl`?`crawl`:c===`mantle`?`perch`:c===`dive`?`dive`:c===`run`?`run`:H.grounded&&(c===`idle`||c===`perch`)&&H.position.y>z(H.position)+4?`perch`:c===`idle`||c===`land`||c===`perch`?`idle`:H.velocity.y<-1?`fall`:`jump`;C.domElement.dataset.animationState=c,pn=l;let u=n.webAnchor??(U.zip?.targetId===`air-zip-no-anchor`?null:U.zip?.surfacePoint??U.zip?.target);dn.animator.update(e,{pose:l,mode:U.mantle?.lowObstacle?`vault`:l===`perch`&&H.grounded&&![`slingshot`,`chargeJump`,`mantle`].includes(c)?`perch`:c,charge:U.advanced?.sling?U.advanced.sling.seconds/1.1:0,actionSequence:U.actionSequence,combat:gt.snapshot()?.player,timeToLanding:It.time,trickClearance:It.clear,trickRequest:Ft,moveForward:(Je.has(`KeyW`)?1:Je.has(`KeyS`)?-1:0)+Ke.controllerMove.y,moveStrafe:(Je.has(`KeyD`)?1:Je.has(`KeyA`)?-1:0)+Ke.controllerMove.x,grounded:H.grounded,speed:c===`wallCrawl`||c===`wallRun`?H.velocity.length():n.horizontalSpeed,verticalSpeed:H.velocity.y,tension:n.webTension,crawlDirection:H.velocity.y<-.1?-1:1,boost:o&&dr===`cruise`&&Yn,anchor:u?new V(u.x,u.y,u.z):null}),(c===`wallCrawl`&&U.wall?.feetTouching||c===`wallRun`&&U.wall&&Wt(U.wall))&&U.wall&&dn.wallPose.apply(dn.surfaceFrame,dn.animator.bones,U.wall,{mode:c,velocity:H.velocity}),C.domElement.dataset.wallCrawlActive=String(U.wallCrawlActive),C.domElement.dataset.wallFootGap=c===`wallCrawl`||c===`wallRun`?dn.wallPose.footGap.toFixed(3):``,C.domElement.dataset.wallBodyClearance=c===`wallCrawl`||c===`wallRun`?dn.wallPose.bodyClearance.toFixed(3):``,C.domElement.dataset.activeAnimation=dn.animator.activeClip,C.domElement.dataset.soleError=dn.animator.contactError.toFixed(4);let d=o&&(dr===`hover`||dr===`cruise`);dn.repulsors?.update(d,n.speed,Yn,t),C.domElement.dataset.ironFlightMode=o?dr:``},Ni=(e=performance.now())=>{if(c)return;u=requestAnimationFrame(Ni);let t=Math.max(0,e-Fn),n=Math.min(Math.max(t/1e3,0),.1);Rn+=n;let r=Array.from(navigator.getGamepads?.()??[]),i=r.find(e=>e?.connected&&e.index===rt)??null,a=r.find(e=>e?.connected&&(e.buttons.some(e=>e.pressed||e.value>.55)||e.axes.some(e=>Math.abs(e)>.3)));a&&(i=a),!i&&rt!==null&&Ke.disconnectController(),rt=i?.index??null;let o=!!i?.buttons[9]?.pressed;o&&!it&&document.hasFocus()&&window.dispatchEvent(new Event(`controller-pause`)),it=o;let p=s.current.paused===!0,m=l(document.hasFocus()&&!p?i:null,tt,gt.snapshot()?.status===`active`,U.grounded);Ke.setController(m.held,m.moveX,m.moveY),i&&!p&&document.hasFocus()&&(Ke.gainFocus(),nn-=m.lookX*tt.sensitivity*n,nn=Math.atan2(Math.sin(nn),Math.cos(nn)),rn=xd(rn+m.lookY*tt.sensitivity*n,-1.12,1.22),(m.held.size||Math.abs(m.lookX)+Math.abs(m.lookY)>0)&&vr.set(0,0));let b=s.current.sky??`golden`,w=Cn===`cyberpunk-city`?`blizzard`:b;Fn=e;{let e=Se.get(Cn);e&&g.setViewRange(e.tileWidth*1.42*(ct.settings.level>=4?.72:1));let t=Math.min(1600,Math.max(760,g.viewRange+420));Math.abs(y.far-t)>40&&(y.far=t,y.updateProjectionMatrix())}let T=s.current.timeOfDay??`cycle`,D=T===`night`?1:T===`day`?0:pc(Ln);if(p){In||(In=!0,Ti(),document.pointerLockElement===C.domElement&&document.exitPointerLock(),C.domElement.dataset.paused=`true`);let e=zn!==w||K!==D;zn=w,K=D;let t=e?4:n;g.update(Rn,H.position,D,t,w),_.update(Rn,H.position,w,D>.5,t),v.update(g.night,Rn);let r=g.night;N.intensity=G.lerp(3,.6,r),N.color.lerpColors(ie,re,r),j.intensity=G.lerp(1.02,.5,r),j.color.lerpColors(ae,oe,r),j.groundColor.lerpColors(se,ce,r),ne.intensity=G.lerp(.4,1,r),N.position.copy(H.position).addScaledVector(le.copy(lc).lerp(dc,r).normalize(),620),N.target.position.copy(H.position);let i=`${w}:${D>.5?`n`:`d`}`;i!==de&&(de=i,fe(w,D>.5)),A.render(C,h,y);return}In&&(In=!1,zn=null,K=null,Ke.gainFocus(),C.domElement.dataset.paused=`false`),d&&document.visibilityState===`visible`&&st.record(`frame`,t);let O=Math.min(Math.max(t/1e3,0),.1),k=Ke.raw.focused&&(Je.has(`AltLeft`)||Je.has(`AltRight`)||m.held.has(`aim`))&&_n===0&&(!q||[`free`,`finished`].includes(q.phase))&&!gt.snapshot()?Ze.traversalAimTimeScale??.35:1,P=O*(gt.snapshot()?.timeScale??1)*k;C.domElement.dataset.aimTimeScale=String(k),Ln+=P,g.update(Rn,H.position,D,P,w),_.update(Rn,H.position,w,D>.5,P),v.update(g.night,Rn);{let e=g.night;N.intensity=G.lerp(3,.6,e),N.color.lerpColors(ie,re,e),j.intensity=G.lerp(1.02,.5,e),j.color.lerpColors(ae,oe,e),j.groundColor.lerpColors(se,ce,e),ne.intensity=G.lerp(.4,1,e),N.position.copy(H.position).addScaledVector(le.copy(lc).lerp(dc,e).normalize(),620),N.target.position.copy(H.position)}let ue=`${w}:${D>.5?`n`:`d`}`;if(ue!==de&&(de=ue,fe(w,D>.5)),!d){C.render(h,y);return}if(Di){Di.elapsed+=P;let e=Di.elapsed%3.35<3;e&&!Di.phase&&Ke.setButton(0,!0),!e&&Di.phase&&Ke.setButton(0,!1),Di.phase=e}Oi&&(Oi.elapsed+=P,Oi.kind===`wall`&&Oi.elapsed>1&&Oi.stage===0&&(qn=!0,Oi.stage=1),Oi.kind===`wall`&&Oi.elapsed>2.2&&Oi.stage===1&&(Bn=!0,Oi.stage=2,Je.delete(`KeyW`)),Oi.kind===`wall`&&Oi.elapsed>2.65&&Oi.stage===2&&(Bn=!0,Oi.stage=3),Oi.kind===`wall`&&Oi.elapsed>3.4&&Oi.stage===3&&(Ft++,Oi.stage=4)),q?.tick(Wr(),H.position.toArray(),{styleScore:dt.score});let F=oo(Ke,q?.phase,d&&gt.snapshot()?.status!==`dead`),pe=gt.snapshot(),he=!F.enabled||pe?.cinematic===`intro`;C.domElement.dataset.inputRacePhase=q?.phase??`free`,C.domElement.dataset.rawSwingHeld=String(Ke.raw.buttons.has(0)),C.domElement.dataset.actionSwingHeld=String(F.swing.held),C.domElement.dataset.actionSwingPressed=String(F.swing.pressed),F.swing.pressed&&(C.domElement.dataset.swingInputAt=String(performance.now())),Yn=F.swing.held,Xn=F.swing.pressed,Zn=F.swing.released,Jn=F.zip.pressed||F.pointLaunch.pressed,Bn||=F.jump.pressed,Pt||=F.roll.pressed,Vn||=F.glide.pressed,qn||=F.wallCrawl.pressed,Hn||=F.chargeJump.released,Un||=F.slingshot.released,Wn||=F.cancelAbilities,F.trick.pressed&&m.held.has(`trick`)&&Ft++,bt||=F.attack.pressed,xt||=F.heavy.pressed,St||=F.launcher.pressed,wt||=F.grab.pressed,Tt||=F.dodge.pressed,Et||=F.web.pressed,Ot||=F.taunt.pressed,ht||=F.interact.pressed,lr||=F.trick.pressed,ur||=F.pointLaunch.pressed;let ge=pe?.status===`active`&&pe.cinematic!==`intro`?y.getWorldDirection(new V).setY(0).normalize():new V(-Math.sin(nn),0,-Math.cos(nn)),_e=new V(-ge.z,0,ge.x),ve=new V;he||(ve.addScaledVector(ge,F.moveY),ve.addScaledVector(_e,F.moveX)),ve.lengthSq()>1&&ve.normalize();let ye=nt(f),xe=y.getWorldDirection(new V);(Yn||ir)&&(yr.setFromCamera(vr,y),xe.copy(yr.ray.direction));let Ce=!he&&Yn,we=ye.traversal===`spider`&&Ce,Oe=Yn||Xn||ir?vr:new Gt(0,.08),ke=ye.traversal===`spider`&&!he&&(!U.swing&&!U.zip&&we&&!U.swingNeedsRelease&&(!U.advanced?.gliding||Xn)||Jn||F.aim.held),I=performance.now(),Ae=ke?mi(Oe,Jn&&!U.grounded&&!U.swing&&!we?ve:void 0):[];ke&&st.record(`anchor`,performance.now()-I);let L=F.aim.held?Il(U,{aimDirection:xe,zipStyle:`point`},{anchorCandidates:Ae},{...E,...Ze}):void 0;if(Tr.visible=!!L,L&&(Tr.position.copy(L.point),Tr.quaternion.copy(y.quaternion),Tr.scale.setScalar(Math.max(1,H.position.distanceTo(L.point)*.025))),C.domElement.dataset.aimTarget=L?.id??``,ke&&we&&!Jn&&E.allowSkyFallback&&!Ae.length){let e=xe.clone();e.y=Math.max(.3,e.y),e.normalize(),Ae.push({id:`sky-fallback`,point:H.position.clone().addScaledVector(e,78),kind:`facade`,lineOfSight:!0})}ye.traversal===`ironman`&&(U.swing=null,U.zip=null,dr=ld(dr,U,{hoverToggle:lr,cruiseToggle:ur,ascend:!he&&F.jump.held,ascendPressed:!he&&Bn,descend:!he&&F.dive.held,boost:!he&&Yn,aim:xe},P));let je=performance.now();ci(Cn,H.position),st.record(`streaming`,performance.now()-je);let R=Ie(H.position,Math.max(42,H.velocity.length()*.12)),Me=ye.traversal===`ironman`&&(dr===`hover`||dr===`cruise`),Ne=z(U.position),Fe=ye.traversal===`ironman`?{gravity:Me?0:29,groundAcceleration:40,airAcceleration:Me?30:10,runSpeed:11,maximumSpeed:92}:{...E,zipAcceleration:140,zipDamping:4,zipMaximumSpeed:64};ye.traversal===`spider`&&Object.assign(Fe,$e&&q&&[`inviting`,`invited`,`countdown`,`racing`].includes(q.phase)?$e:Ze),ye.traversal===`spider`&&ir&&Object.assign(Fe,{zipAcceleration:200,zipDamping:3.1,zipMaximumSpeed:92,anchorMaximumDistance:150}),Fe.cameraMotionScale=ee?0:Fe.cameraMotionScale??1,C.domElement.dataset.swingProfile=Xe.name;let B={...fo(F,ge,xe),move:ve,jumpPressed:ye.traversal===`spider`&&!he&&Bn,rollPressed:!he&&Pt,glidePressed:!he&&Vn,wallCrawlPressed:!he&&qn,swingHeld:we,swingPressed:ye.traversal===`spider`&&Xn&&!U.swingNeedsRelease,swingReleased:ye.traversal===`spider`&&Zn,zipPressed:ye.traversal===`spider`&&Jn,diveHeld:ye.traversal===`spider`&&F.dive.held,cancelAbilities:Wn};pe&&(B.loopHeld=!1);let Re=Te.get(Cn),Be=gt.step(P,{position:U.position,velocity:U.velocity,grounded:U.grounded,traversalMode:U.mode,attackPressed:!he&&bt,heavyPressed:!he&&xt,launcherPressed:!he&&St,grabPressed:!he&&wt,dodgePressed:!he&&Tt,blockHeld:!he&&F.block.held,webPressed:!he&&Et,webHeld:!he&&F.web.held,tauntPressed:!he&&Ot},jt);bt=xt=St=wt=!1,Tt=Et=Ot=!1,U.velocity.x+=Be.playerImpulse.x,U.velocity.y+=Be.playerImpulse.y,U.velocity.z+=Be.playerImpulse.z,Be.events.some(e=>e.type===`death`)&&(U.velocity={x:0,y:0,z:0},U.swing=null,U.zip=null,Ke.resetActions());let Ve=gt.snapshot();if(_t.update(Ve,P,dn?.animator.webHands(vt)??[H.position.clone().add(new V(-.25,1.3,0)),H.position.clone().add(new V(.25,1.3,0))]),C.domElement.dataset.boss=Ve?JSON.stringify(Ve):``,Re&&U.grounded&&!U.mantle&&!U.swing&&!U.zip&&!F.chargeJump.held&&!F.slingshot.held){let e=eo(Re,U.position,ve);e&&(U.mantle={target:e,elapsed:0,lowObstacle:!0,exitVelocity:Fe.profiledSwing?{x:U.velocity.x,y:2,z:U.velocity.z}:void 0},U.wall=null,U.wallRunActive=!1,U.wallCrawlActive=!1,U.grounded=!1,U.actionSequence=(U.actionSequence??0)+1)}Re&&(F.slingshot.held||F.corner.held)?Ln>=Gn&&(Gn=Ln+.08,Kn=$a(Re,U.position,U.velocity,ge,F.slingshot.held,F.corner.held?F.moveX>.15?1:F.moveX<-.15?-1:0:0)):(Kn={slingshotAnchors:null,cornerTarget:null},Gn=0);let He;if(ye.traversal===`spider`&&Re){let e=id(fr,{position:U.position,velocity:U.velocity,tuning:Fe,trajectoryVelocity:U.swing?{x:U.velocity.x+(U.swing.anchor.x-U.position.x)*.12,y:U.velocity.y-(Fe.gravity??29)*.18,z:U.velocity.z+(U.swing.anchor.z-U.position.z)*.12}:void 0,dt:P,swinging:!!(U.swing&&we&&!U.advanced?.loop),diving:F.dive.held,desiredDirection:ve.lengthSq()>.01?ve:ge},(e,t,n)=>Re.raycast(e,t,n));He={x:(e.velocity.x-U.velocity.x)/Math.max(P,.001),y:(e.velocity.y-U.velocity.y)/Math.max(P,.001),z:(e.velocity.z-U.velocity.z)/Math.max(P,.001)},C.domElement.dataset.swingAssistance=e.active?`steering`:`clear`,C.domElement.dataset.assistanceProbes=String(e.probeCount)}if(Re&&qn&&!_r){for(let e of[ge.clone().negate(),_e,_e.clone().negate(),ge])if(_r=od(U.position,e,Ee),_r)break}if(Re&&(U.wallCrawlActive||U.wallRunActive)&&U.wall&&(B.wallClimb>0||we&&U.velocity.y>1)&&(U.wallRunActive||!we||U.swingNeedsRelease)&&!Jn){let e=sd(U.position,U.wall.normal,Ee,e=>Re.isCapsuleClear(e));if(e){let t=new V().copy(U.wall.normal).negate();if(Bn&&Fe.profiledSwing)B.roofExitDirection=t;else{let n=Math.max(12,Math.min(Fe.maximumSpeed??78,Math.hypot(U.velocity.x,U.velocity.y,U.velocity.z)*(Fe.traversalFlowRetention??.9)));U.mantle={target:e,elapsed:0,exitVelocity:Fe.profiledSwing&&U.wallRunActive?{x:t.x*n,y:7,z:t.z*n}:void 0},U.wallCrawlActive=!1,U.wallRunActive=!1}}}let Ue=ic(U,Ur.lanes,P);Hr=Ue.active;let We=performance.now(),Ge=0,qe=Math.max(1,Math.ceil(P/(1/120))),Ye=P/qe,Qe=[],et=au(U,B,Fe);for(let e=0;e<qe;e++){let t=e===0?B:{...B,jumpPressed:!1,rollPressed:!1,trickPressed:!1,swingPressed:!1,swingReleased:!1,zipPressed:!1,zipReleased:!1,wallCrawlPressed:!1,glidePressed:!1,chargeJumpReleased:!1,slingshotReleased:!1},n=new V().copy(U.position),r=U.grounded,i=new V().copy(U.velocity),a=ou(U,t,{...Kn,predictiveAssistAcceleration:He,windAcceleration:Ue.acceleration??void 0,externalCollision:!!Re,swingPathClear:Re&&Fe.profiledSwing?(e,t)=>{let n=new V(e.x,e.y+.9,e.z),r=new V(t.x,t.y+.9,t.z).sub(n),i=r.length();return i<.01||!Re.raycast(n,r.normalize(),i)}:void 0,hasLineOfSight:Re?(e,t)=>{let n=new V().copy(t).sub(e),r=n.length()-.1;return r>0&&!Ee(new V().copy(e),n.normalize(),r)}:void 0,groundY:Re?-1e4:Ne,canRoll:Re?(e,t)=>pd(Re,e,t):void 0,sampleGround:Re?(e,t,n)=>De(e,t,n??.1)?.point.y??null:void 0,wallContact:Re?_r:void 0,colliders:Re?[]:R,anchorColliders:Re?[]:Ie(H.position,110),anchorCandidates:Ae,zipTargets:ir?Ae.slice(0,1):Ae},Ye,Fe);if(Re){i.copy(U.velocity);let e=performance.now(),o=Re.sweepCapsule(n,U.position,U.velocity);Ge+=performance.now()-e;let s=o.position,c=o.velocity;_r=null;let l=!!o.wallNormal||o.blocked&&!o.grounded;o.wallNormal&&(_r={point:s.clone(),normal:o.wallNormal,feetTouching:o.feetTouching,colliderId:`rendered-facade`});let u=U.wall,d=_r?.normal??u?.normal;d&&(_r=od(s,d,Ee));let f=c.y<=.1?De(s,.015,.51):null,p=f?Zu(f):null;if(U.grounded=p!==null&&Math.abs(s.y-p)<.045,p!==null&&U.grounded){let e=s.y;s.y=p,Re.isCapsuleClear(s,.46,2.05,!1)?c.y=Math.max(0,c.y):(s.y=e,U.grounded=!1)}let m=!!(U.swing&&t.swingHeld&&!t.diveHeld&&Math.hypot(c.x,c.z)>=7.5&&(U.swing.groundSkimSeconds??0)<.48);if(!r&&U.grounded&&!m){U.landingSeconds=.25,U.landingImpact=Math.max(0,-i.y);let e={...U,position:s,velocity:c};Hl(e,t,U.landingImpact,(e,t)=>pd(Re,e,t)),U.rollSeconds=e.rollSeconds,U.groundJump=!1,c.copy(e.velocity),a.events.push({type:`land`,position:{...U.position},strength:U.landingImpact/30})}U.grounded&&(U.airSeconds=0),Ml(U,s,c),_r?U.wall={...u,..._r,feetTouching:_r.feetTouching===!0,contactSeconds:u?.contactSeconds??0,graceSeconds:E.wallContactGrace}:U.wall&&(U.wall.feetTouching=!1),_r?.feetTouching?Ql(U,_r,i,t,Fe):(U.wallCrawlActive=!1,Wt(U.wall)||(U.wallRunActive&&we&&(U.swingNeedsRelease=!1),U.wallRunActive=!1,U.wall=null));let h=U.swing;if(h){let e=new V().copy(h.visualAnchor??h.anchor).clone().sub(s.clone().add(new V(0,1.3,0))),n=Ee(s.clone().add(new V(0,1.3,0)),e.clone().normalize(),Math.max(0,e.length()-.1)),r=s.distanceTo(new V().copy(h.simulationPivot??h.pivot??h.anchor))-h.ropeLength,i=Math.max(.25,h.ropeLength*.01),o=l&&r>i;if(!n&&!U.grounded&&!o&&Jl(U,{},t,Fe),n||U.grounded||o){let e=Jl(U,{obstruction:n?{point:n.point,normal:n.normal,id:`mesh-corner`}:null,constraintBlocked:o,contact:_r,candidates:Ae.length?Ae:mi(vr),hasLineOfSight:(e,t)=>{let n=new V().copy(t).sub(e),r=n.length();return!Ee(new V().copy(e),n.normalize(),Math.max(0,r-.15))},dt:Ye},t,Fe,a.events);C.domElement.dataset.swingTransition=e,e===`detach`&&(C.domElement.dataset.swingDetachReason=`no-valid-continuation`)}else r>0&&r<=.5&&h.ropeLength+r<=h.maximumLength&&(h.ropeLength+=r)}if(U.zip&&!U.zip.airDash&&l){let e=new V().copy(U.zip.target).sub(s);(_r&&c.dot(e.clone().normalize())<.5||U.grounded&&e.length()<1.2)&&(U.zip=null,ir=!1)}l&&Mn++,lu(U,t,Fe,Ye,a.events),a.context=au(U,t,Fe),C.domElement.dataset.meshContacts=String(Mn),C.domElement.dataset.spawnSurfaceVerified=String(!!f)}else Rd(U.position,U.velocity,R)&&(Mn+=1,C.domElement.dataset.buildingCorrectionCount=String(Mn));Qe.push(...a.events),et=a.context}let at={state:U,context:et,events:Qe};if(H.position.set(U.position.x,U.position.y,U.position.z),H.velocity.set(U.velocity.x,U.velocity.y,U.velocity.z),st.record(`physics`,performance.now()-We-Ge),st.record(`collision`,Ge),H.grounded=U.grounded,Di){if(Di.distance+=H.position.distanceTo(Di.previous),Di.previous.copy(H.position),Di.peakSpeed=Math.max(Di.peakSpeed,H.velocity.length()),Di.peakHeight=Math.max(Di.peakHeight,H.position.y-Di.startY),H.grounded||(Di.air+=P),Di.attaches+=at.events.filter(e=>e.type===`web-attached`).length,_r&&Di.contacts++,Di.elapsed>=Di.nextCheck&&Re&&(Di.nextCheck=Di.elapsed+.2,Di.penetrationChecks++,!Re.isCapsuleClear(H.position,.46,2.05,!1)&&(Di.penetrations++,Di.penetrationDetails.length<4))){let e=Re.supportAt(H.position,.02,.6);Di.penetrationDetails.push({position:H.position.toArray(),velocity:H.velocity.toArray(),surfaceClear:Re.isCapsuleClear(H.position,.46,2.05,!1),support:e?{point:e.point.toArray(),normal:e.normal.toArray()}:null})}let e={map:Cn,seconds:+Di.elapsed.toFixed(1),distance:+Di.distance.toFixed(1),peakSpeed:+Di.peakSpeed.toFixed(1),peakHeight:+Di.peakHeight.toFixed(1),airbornePercent:Math.round(100*Di.air/Di.elapsed),attachments:Di.attaches,contactFrames:Di.contacts,penetrationChecks:Di.penetrationChecks,penetrations:Di.penetrations,penetrationDetails:Di.penetrationDetails};ki.textContent=`${Di.elapsed<16?`Running`:`Complete`}: ${JSON.stringify(e)}`,Di.elapsed>=16&&(Di=null,Ti())}ye.traversal===`ironman`&&H.grounded&&(dr=`grounded`),H.facing=at.context.animation.bodyYaw;for(let e of at.events){if(e.type===`web-attached`&&U.swing){s.current.onSwingAttached();let e=U.swing.anchor;C.domElement.dataset.lastSwingAnchor=[e.x,e.y,e.z].map(e=>e.toFixed(2)).join(`,`),C.domElement.dataset.lastSwingSource=`pointer`}e.type===`zip-started`&&U.zip&&(ar=Ln+(ir?.16:.28),C.domElement.dataset.lastGrappleTarget=[U.zip.target.x,U.zip.target.y,U.zip.target.z].map(e=>e.toFixed(2)).join(`,`),C.domElement.dataset.lastGrappleSource=ir?`click`:`keyboard`)}if(ir&&!U.zip&&(ir=!1),Bn=!1,Pt=!1,qn=!1,Jn=!1,Xn=!1,Zn=!1,Vn=!1,Hn=!1,Un=!1,Wn=!1,lr=!1,ur=!1,H.position.y<-20){let e=At(Cn);H.position.copy(Le(e)),H.velocity.set(0,0,0),H.grounded=!0,dn?.root.position.copy(H.position),Ml(U,H.position,H.velocity),U.grounded=!0,U.mode=`idle`,U.advanced=jl().advanced,U.swing=null,U.zip=null,U.wall=null,U.wallCrawlActive=!1,U.mantle=null,_r=null,at.context=au(U,B,Fe)}if(Re&&!H.grounded&&Ln>=Lt){Lt=Ln+.12;let e=fd(Re,H.position,H.velocity),t=H.position.clone().add(new V(0,.2,0));It={time:e.time,clear:e.clear&&Re.isCapsuleClear(t,1.15,3.1,!1)}}else H.grounded&&(It={time:0,clear:!1});let ot=performance.now();if(Mi(P,Ln,at.context),st.record(`animation`,performance.now()-ot),Re&&Ln>=tr&&H.velocity.length()>20){tr=Ln+.12;let e=H.velocity.clone().setY(0).normalize(),t=new V(-e.z,0,e.x),n=H.position.clone().add(new V(0,1.1,0));nr={left:Ee(n,t,8)?.distance??8,right:Ee(n,t.clone().negate(),8)?.distance??8}}let ut=dt.update({dt:P,state:U,events:at.events,groundY:Ne,contact:!!_r,impactSpeed:Math.max(0,rr-H.velocity.length()),clearance:nr,animation:dn?.animator.animationSample});rr=H.velocity.length(),er.push(...ut),er.length>5&&er.splice(0,er.length-5),er.length&&Ln-$n>1.1&&(Qn=er.shift(),$n=Ln);let yt=ft.step(P,{position:U.position,interact:ht,score:dt.score,alive:H.position.y>-20});if(ht=!1,pt.update(yt,Ln),C.domElement.dataset.mission=yt?JSON.stringify(yt):``,C.domElement.dataset.trickScore=String(dt.score),C.domElement.dataset.trickChain=String(dt.chain),C.domElement.dataset.flowMultiplier=dt.multiplier.toFixed(1),q){let e=H.position.toArray();if(q.tick(Wr(),e,{mode:U.mode,speed:H.velocity.length(),verticalSpeed:H.velocity.y,events:at.events.map(e=>e.type),styleScore:dt.score,wind:Hr}),Kr(),q.phase===`racing`&&jr?.capture(q.time),Nr&&Mr&&(Nr.root.visible=q.phase===`racing`&&q.time<=Mr.time,Nr.root.visible&&Js(Nr,Mr,q.time)),Ur.setProgress(q.activeGateIds,q.completedGateIds),Ur.update(e,Ln),Ln>=Vr){Vr=Ln+.1;let t=q.currentGate?.position??q.course?.finish,n=t?new V().fromArray(t).sub(H.position).setY(0).normalize():null,r=H.velocity.clone().setY(0).normalize(),i=n&&H.velocity.length()>3?r.dot(n)>.6?`ON COURSE`:new V().crossVectors(r,n).y>0?`TURN LEFT`:`TURN RIGHT`:Br,a=q;s.current.onRaceView?.({phase:q.phase,target:q.currentGate?.position??q.course?.finish,route:q.course?ac(q.course,q.activeGateIds):[],gateIndex:q.splits.length,gateCount:q.gateCount,gateType:q.currentGate?.type,missedGate:q.missedGate,splits:q.splits,splitDelta:q.splitDelta,medal:q.medal,styleScore:q.styleScore,mode:[`countdown`,`racing`,`inviting`].includes(q.phase)?q.course?.mode??Lr:Lr,time:q.time,countdown:Math.max(0,Math.ceil(((q.phase===`inviting`||q.phase===`invited`?q.until:q.startAt)-Wr())/1e3)),best:zr,distance:t?Math.round(S(e,t)):0,participants:Math.max(1,q.participants.size),course:q.course,standings:[...a.participants].map(t=>{let n=t===a.id?e:xn.get(t)?.position;return{id:t,self:t===a.id,distance:n&&a.course?Math.round(S(n,a.course.finish)):null,time:a.results.get(t)??null}}).sort((e,t)=>e.time!==null&&t.time!==null?e.time-t.time:e.time===null?t.time===null?(e.distance??1/0)-(t.distance??1/0):1:-1),results:[...q.results].map(([e,t])=>({id:e,time:t,score:q?.scores.get(e)??0})).sort((e,t)=>te(q?.course?.mode??`speed`,e.time,e.score)-te(q?.course?.mode??`speed`,t.time,t.score)),ghost:!!Mr,wind:Hr,message:q.phase===`racing`?i:Br}),s.current.onMapPlayers?.([{id:q.id,position:e,self:!0},...Array.from(xn.values()).map(e=>({id:e.playerId,position:e.position,self:!1}))]),C.domElement.dataset.racePhase=q.phase,C.domElement.dataset.raceId=q.raceId,C.domElement.dataset.raceFinish=t?.join(`,`)??``,C.domElement.dataset.ghostLoaded=String(!!Mr),C.domElement.dataset.windActive=String(Hr)}}Oi&&Re&&(Oi.frames++,Oi.modes.add(U.mode),Oi.clips.add(dn?.animator.activeClip??`missing`),Re.isCapsuleClear(H.position,.46,2.05,!1)||Oi.penetrations++,U.mode===`wallJump`&&(Oi.wallJumpSpeed=Math.max(Oi.wallJumpSpeed,H.velocity.length())),ki.textContent=`${Oi.elapsed<7?`Running`:`Complete`}: ${JSON.stringify({seconds:+Oi.elapsed.toFixed(2),modes:[...Oi.modes],clips:[...Oi.clips],frames:Oi.frames,penetrations:Oi.penetrations,wallJumpSpeed:+Oi.wallJumpSpeed.toFixed(2)})}`,Oi.elapsed>=7&&(Oi=null,Ti())),Xr(P),mn&&Ln-yn>=.125&&(yn=Ln,mn.publish({suitId:f,position:[H.position.x,H.position.y,H.position.z],velocity:[H.velocity.x,H.velocity.y,H.velocity.z],yaw:H.facing,mode:ye.traversal===`ironman`&&!H.grounded?`iron-${dr===`cruise`&&Yn?`boost`:dr}`:pn===`perch`?`perch`:at.context.animation.state,sequence:++vn,sentAt:Date.now()}));let Ct=s.current.firstPerson===!0;Ct!==Ht&&(Ht=Ct);let Dt=at.context.speed,kt=Ht&&d;if(kt){let e=pn===`perch`?1.38:1.66,t=ee?0:Math.min(Dt/46,1),n=Math.sin(Ln*(7+Math.min(Dt,18)*.5))*.014*t;Jt.set(H.position.x,H.position.y+e+n,H.position.z),y.position.lerp(Jt,1-Math.exp(-26*P)),Xt.set(Math.sin(nn)*Math.cos(rn),Math.sin(rn),Math.cos(nn)*Math.cos(rn)),Yt.copy(y.position).add(Xt),y.up.set(0,1,0),y.lookAt(Yt),Rt=Sd(Rt,ee?0:Math.max(-.05,Math.min(.05,at.context.camera.roll)),5,P),y.rotateZ(Rt),y.fov=Sd(y.fov,80,7,P),y.updateProjectionMatrix(),y.updateMatrixWorld(),x.root.visible=!0;let r=!!U.swing,i=!!U.zip;(r&&!Kt||i&&!qt)&&x.thwip(),Kt=r,qt=i,x.update(y,{delta:P,time:Rn,speed:Dt,grounded:U.grounded,swingTargetWorld:U.swing?.anchor?$t.set(U.swing.anchor.x,U.swing.anchor.y,U.swing.anchor.z):null,zipTargetWorld:U.zip?tn.set((U.zip.surfacePoint??U.zip.target)?.x??0,(U.zip.surfacePoint??U.zip.target)?.y??0,(U.zip.surfacePoint??U.zip.target)?.z??0):null,wallCrawl:U.wallCrawlActive||!!U.wallRunActive,gliding:U.mode===`glide`}),dn&&(dn.root.visible=!1)}else x.root.visible=!1,dn&&(dn.root.visible=!0),Kt=!!U.swing,qt=!!U.zip;let Mt=!!(U.zip&&U.zip.targetId!==`air-zip-no-anchor`&&Ln<ar),Nt=!!(U.swing||Mt);if(Sr.visible=Nt&&!Cr,Nt){let e=kt?x.palmWorld(1,Qt):dn?dn.animator.webHand(new V):H.position.clone().add(new V(0,1.58,0)),t=U.swing?.anchor??U.zip?.surfacePoint??U.zip?.target;t&&(Cr?Cr.update(e,wr.set(t.x,t.y,t.z),!0,at.context.webTension):br.set([e.x,e.y,e.z,t.x,t.y,t.z]),xr.getAttribute(`position`).needsUpdate=!0)}else Cr?.update(H.position,H.position,!1);let Bt=dn?[`leftHand`,`rightHand`].map(e=>dn?.animator.bones.find(t=>t.role===e)?.bone.getWorldPosition(new V)??H.position.clone()):[H.position,H.position];Er.update(Bt,U.advanced);let Ut=U.advanced;C.domElement.dataset.swingPhase=Ut?.phase??`air`,C.domElement.dataset.glideActive=String(!!Ut?.gliding),C.domElement.dataset.flowChain=String(Ut?.flow??0);let Zt=at.context.speed,en=s.current.experimentalCamera===!0,on=xd(s.current.cameraZoom??1,1,10),gn=en?(on-1)/9:0;if(!kt){let e=pn===`perch`&&H.grounded,t=ye.traversal===`ironman`,n=e?5.2:t?5.4+Math.min(Zt/72,1)*1.8:Math.min(14,at.context.camera.followDistance),r=Math.max(3.15,n*.82*G.lerp(1,.42,gn)),i=Math.cos(rn)*r,a=at.context.wallNormal?new V(at.context.wallNormal.x,at.context.wallNormal.y,at.context.wallNormal.z).normalize():null;if(Vt=1/0,a)for(let e of R){let t=H.position.x>e.min.x-.75&&H.position.x<e.max.x+.75,n=H.position.z>e.min.z-.75&&H.position.z<e.max.z+.75;!t||!n||H.position.y<e.min.y-.2||H.position.y>e.max.y+.2||(Vt=Math.min(Vt,e.max.y-H.position.y))}let o=(U.mode===`wallCrawl`||U.mode===`wallRun`)&&(U.wallCrawlActive||!!U.wallRunActive)&&!!a;o&&a&&!ln&&(un.copy(a),cn=nn),ln=o,an=Sd(an,+!!o,o?5.5:11,P),a&&un.lerp(a,1-Math.exp(-10*P)).normalize();let s=en?H.position.clone().add(new V(0,1.15,0)):H.position.clone().add(new V(at.context.camera.lookAhead.x*(t?.08:.28),1.35+at.context.camera.lookAhead.y*(ee?.16:.38),at.context.camera.lookAhead.z*(t?.08:.28)));if(e&&dn){let e=dn.animator.bones.find(e=>e.role===`head`)?.bone;e?(dn.root.updateMatrixWorld(!0),e.getWorldPosition(s)):s.copy(H.position).add(new V(0,.7,0))}let c=H.position.clone().add(new V(Math.sin(nn)*i,at.context.camera.heightOffset+Math.sin(rn)*r,Math.cos(nn)*i));if(an>.001){let e=H.position.clone().add(new V(0,1.2,0)),t=H.position.clone().add(dd(un,nn-cn,rn));s.lerp(e,an),c.lerp(t,an)}let l=gt.snapshot(),u=H.position.clone().add(new V(0,1.35,0)),d=l?new V().copy(l.position).add(new V(0,hn[l.id].height*.48,0)):null,f=d?d.distanceTo(u):1/0,p=d?d.clone().sub(u):new V,m=!d||!Re||f<1||!Ee(u,p.clone().normalize(),f-.65);if(sn=Sd(sn,l?.status===`active`&&f<58&&m?1:0,l?.cinematic?5.5:7,P),d&&sn>.001){let e=d.clone().sub(u).normalize(),t=new V(-e.z,0,e.x),n=l?.cinematic?d.clone():u.clone().addScaledVector(e,Math.min(1.4,f*.1)),r=l?.cinematic?d.clone().addScaledVector(e,-8).addScaledVector(t,3).add(new V(0,2.8,0)):u.clone().addScaledVector(e,-6.4).addScaledVector(t,1.55).add(new V(0,2.35,0));Re&&(Hs(u,n,Ee,.3),Hs(n,r,Ee,.42)),s.lerp(n,sn),c.lerp(r,sn)}if(Re){let t=H.position.clone().add(new V(0,e?.85:1.25,0));if(Hs(t,s,Ee,.18),Hs(s,c,Ee),c.distanceTo(s)<2.4){s.copy(t);let e=c.clone(),n=-1/0,i=Math.max(2.8,r);for(let r of[0,.55,-.55,1.1,-1.1,1.65,-1.65,Math.PI]){let a=nn+r,o=t.clone().add(new V(Math.sin(a)*i,Math.max(1.55,i*.37),Math.cos(a)*i));Hs(t,o,Ee);let s=o.distanceTo(t),c=Math.min(i,s)-Math.abs(r)*.45;c>n&&(n=c,e=o)}c.copy(e)}}else Ld(s,c,R);let h=c.clone().sub(s),g=h.length();zt=g<zt?g:Math.min(g,zt+P*5),c.copy(s).addScaledVector(h.normalize(),zt),y.position.lerp(c,1-Math.exp(-14*P)),Re&&Hs(s,y.position,Ee),y.position.distanceTo(s)<1.8&&c.distanceTo(s)>2.4&&y.position.copy(c);let _=t?Math.min(68,at.context.camera.fov):at.context.camera.fov,v=en&&sn<=.01?G.lerp(_,Math.max(48,_-10),gn):_;y.fov=Sd(y.fov,sn>.01?l?.cinematic?52:59+Math.min(5,f/20):v,7,P),y.updateProjectionMatrix(),Rt=Sd(Rt,ee?0:Math.max(-.065,Math.min(.065,at.context.camera.roll))*(1-an)*(1-sn),5,P),y.up.set(0,1,0),y.lookAt(s),y.rotateZ(Rt)}if(A.update(P,Zt,at.events.some(e=>[`jump`,`double-jump`,`point-launch`,`web-released`,`slingshot-launch`,`loop-completed`].includes(e.type)),ee,U.mode===`glide`),C.domElement.dataset.motionBlur=A.strength.toFixed(4),y.updateMatrixWorld(),En.copy(H.position).addScaledVector(lc,2400),Dn.copy(En).applyMatrix4(y.matrixWorldInverse),Dn.z<-1){On.copy(En).project(y);let e=Math.max(Math.abs(On.x),Math.abs(On.y)),t=G.clamp(1.35-e*.55,0,1),n=fn[w],r=(1-g.night)*(1-n.clouds*.55)*t*.5*(ee||ct.settings.level>=2?0:1);kn=Sd(kn,r,3,P),A.setSunRays(On.x*.5+.5,On.y*.5+.5,kn)}else kn=Sd(kn,0,6,P),A.setSunRays(.5,.5,kn);if(C.domElement.dataset.sunRays=kn.toFixed(3),wn+=P,Tn+=O,An+=1,Tn>.7&&(jn=Math.round(An/Tn),An=0,Tn=0),wn>.15){let e=z(H.position),t=U.advanced?.sling?Math.min(1,U.advanced.sling.seconds/M.slingChargeSeconds):0,n=Math.min(1,(U.advanced?.chargeJump??0)/M.chargeJumpSeconds),r=U.swing?Math.min(1,U.swing.attachedSeconds/1.35):0,i=Math.max(t,n,r),a=H.position.clone().add(new V(0,1.45,0)).project(y),o=H.velocity.clone();o.y=0,o.lengthSq()<1?o.set(Math.sin(H.facing),0,Math.cos(H.facing)):o.normalize();let c=H.position.clone().add(new V(0,1.45,0)).addScaledVector(o,4).project(y),l=G.clamp((a.x*.5+.5)*100,14,86),u=G.clamp((1-(a.y*.5+.5))*100,28,76),d=c.x>a.x+.015,f=l<35?`right`:l>65||d?`left`:`right`;s.current.onHud({boss:gt.snapshot(),mission:ft.view(),activityMessage:mt,trickScore:dt.score,flowMultiplier:dt.multiplier,speed:Math.round(Zt*3.6),altitude:Math.max(0,Math.round(H.position.y-e)),fps:jn,swinging:!!U.swing,mode:U.mode,charge:i,chargeLabel:t>0?`SLINGSHOT CHARGE`:n>0?`CHARGE JUMP`:r>0?`WEB TENSION`:``,announcement:Ln-$n<2.6?Qn:null,callout:{x:l,y:u,side:f}}),C.domElement.dataset.playerPosition=[H.position.x,H.position.y,H.position.z].map(e=>e.toFixed(2)).join(`,`),C.domElement.dataset.grounded=String(H.grounded),C.domElement.dataset.groundY=e.toFixed(3),C.domElement.dataset.walkableSurfaceCount=String(be.size),C.domElement.dataset.traversalMode=U.mode,C.domElement.dataset.colliderCount=String(me.length+Pe),C.domElement.dataset.anchorTargetCount=String(ze.size+Pe),C.domElement.dataset.ropeLength=U.swing?.ropeLength.toFixed(2)??``,C.domElement.dataset.swingTension=U.swing?.tension.toFixed(2)??``,C.domElement.dataset.grappling=String(!!(ir&&U.zip)),C.domElement.dataset.grappleLineVisible=String(Mt),C.domElement.dataset.wallContact=U.wall?`${U.wall.normal.x.toFixed(2)},${U.wall.normal.y.toFixed(2)},${U.wall.normal.z.toFixed(2)}`:``,C.domElement.dataset.wallCameraBlend=an.toFixed(2),C.domElement.dataset.wallCameraYawDelta=(nn-cn).toFixed(2),C.domElement.dataset.wallTopClearance=Number.isFinite(Vt)?Vt.toFixed(2):``,C.domElement.dataset.cameraDistance=y.position.distanceTo(H.position).toFixed(2),C.domElement.dataset.cameraMode=Ht?`first-person`:en?`experimental`:`default`,C.domElement.dataset.cameraZoom=on.toFixed(0),C.domElement.dataset.cameraPosition=y.position.toArray().map(e=>e.toFixed(2)).join(`,`),wn=0}if(ct.update(P,t,document.visibilityState===`visible`)){let e=ct.settings;_.setDensity(e.weatherDensity),Ur.setParticleDensity(e.particleDensity),A.setResolutionScale(e.postprocessScale),C.setPixelRatio(Math.min(window.devicePixelRatio,e.level>=2?1:1.25)*e.resolutionScale),lt=e.farDetail;let t=e.level>=3?1024:2048;N.shadow.mapSize.x!==t&&(N.shadow.map?.dispose(),N.shadow.map=null,N.shadow.mapSize.set(t,t));let n=e.level<5;N.castShadow!==n&&(N.castShadow=n,C.shadowMap.enabled=n),Dr(),C.domElement.dataset.qualityTier=String(e.level)}C.domElement.dataset.timeMode=T,C.domElement.dataset.nightLevel=g.night.toFixed(2);let bn=performance.now();C.info.autoReset=!1,C.info.reset(),A.render(C,h,y),st.record(`render`,performance.now()-bn),st.setRenderCounters({drawCalls:C.info.render.calls,triangles:C.info.render.triangles,textures:C.info.memory.textures,geometries:C.info.memory.geometries}),Ln>=Nn&&(Nn=Ln+1,C.domElement.dataset.telemetry=JSON.stringify(st.snapshot()))};return(async()=>{try{if(s.current.onStatus(`Booting SpiderMan city`,2),y.position.copy(Nt).add(new V(0,3.68,10)),y.lookAt(Nt.x,1.4,Nt.z),Ni(),await Promise.all([di(),fi(),li(Mt)]),c)return;H.position.copy(Le(Mt)),nn=Oe(H.position,Mt.spawnYaw??0),U.heading=nn,H.facing=nn,H.velocity.set(0,0,0),H.grounded=!0,dn?.root.position.copy(H.position),Ml(U,H.position,H.velocity),U.grounded=!0,U.mode=`idle`,U.advanced=jl().advanced;let e=new V(Math.sin(nn)*10,4.4,Math.cos(nn)*10);y.position.copy(H.position).add(e),y.up.set(0,1,0),y.lookAt(H.position.clone().add(new V(0,1.4,0))),d=!0,Qr(),ji();let t=Te.get(Cn);t&&(Ur.setCourse(_e(H.position.toArray(),t.width,t.depth,0),t),Ur.clear()),s.current.onDistrictChange(Mt.id),s.current.onStatus(`${Mt.name} route online`,100),s.current.onReady()}catch(e){if(c)return;console.error(`[game] unable to start SpiderMan city`,e),s.current.onStatus(`Could not verify safe city surfaces. Reload to retry.`,100),d=!1}})(),()=>{c=!0,_.dispose();for(let e of P.values())e.dispose();P.clear(),h.environment=null,F.dispose(),N.shadow.map?.dispose(),pt.dispose(),_t.dispose(),yt++,o.current=()=>void 0;for(let e of Se.values())e.horizon.dispose();Cr?.dispose(),x.dispose(),Tr.geometry.dispose(),Tr.material.dispose(),xr.dispose(),Sr.material.dispose(),Er.dispose(),cancelAnimationFrame(u),Or.disconnect(),C.domElement.removeEventListener(`mousedown`,vi),C.domElement.removeEventListener(`pointermove`,yi),document.removeEventListener(`mousemove`,bi),document.removeEventListener(`pointerlockchange`,Ei),document.removeEventListener(`pointerlockerror`,_i),document.pointerLockElement===C.domElement&&document.exitPointerLock(),C.domElement.removeEventListener(`contextmenu`,xi),window.removeEventListener(`mouseup`,Si),window.removeEventListener(`swing-profile-change`,et),window.removeEventListener(`controller-settings`,ot),window.removeEventListener(`keydown`,Ci),window.removeEventListener(`keyup`,wi),window.removeEventListener(`blur`,Ti),mn?.dispose(),Jr(),h.traverse(e=>{e instanceof W&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))}),Ur.dispose(),Gr(),a.current=()=>void 0,i.current=()=>void 0,A.dispose(),C.dispose(),C.domElement.remove(),r.current=()=>void 0}},[]),(0,md.jsx)(`div`,{ref:n,className:`game-mount`})});export{Bd as SpiderGame,Bd as default};
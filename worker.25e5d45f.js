parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DUQf":[function(require,module,exports) {
"use strict";function n(n){let e=n;if(!e||"function"!=typeof e.mem_read||"function"!=typeof e.mem_write||"function"!=typeof e.io_read||"function"!=typeof e.io_write)throw"Z80: Core object is missing required functions.";let i=0,t=0,m=0,r=0,f=0,o=0,u=0,c=0,a=0,_=0,d=0,v=0,Z=0,C=0,P=0,w=0,S=0,H=0,N=57328,l=0,s={S:0,Z:0,Y:0,H:0,X:0,P:0,N:0,C:0},p={S:0,Z:0,Y:0,H:0,X:0,P:0,N:0,C:0},g=0,X=0,Y=0,y=!1,h=!1,b=!1,x=0;let j=function(n){var c=function(n){return 0==(7&n)?t:1==(7&n)?m:2==(7&n)?r:3==(7&n)?f:4==(7&n)?o:5==(7&n)?u:6==(7&n)?e.mem_read(u|o<<8):i};if(118===n)y=!0;else if(n>=64&&n<128){var a=c(n);(56&n)>>>3==0?t=a:(56&n)>>>3==1?m=a:(56&n)>>>3==2?r=a:(56&n)>>>3==3?f=a:(56&n)>>>3==4?o=a:(56&n)>>>3==5?u=a:(56&n)>>>3==6?e.mem_write(u|o<<8,a):(56&n)>>>3==7&&(i=a)}else if(n>=128&&n<192){a=c(n);[J,K,L,Q,T,V,U,R][(56&n)>>>3](a)}else{(0,pn[n])()}x+=Yn[n]},q=function(n){return 128&(n&=255)&&(n=-(1+(255&~n))),n},M=function(){return s.S<<7|s.Z<<6|s.Y<<5|s.H<<4|s.X<<3|s.P<<2|s.N<<1|s.C},O=function(n){s.S=(128&n)>>>7,s.Z=(64&n)>>>6,s.Y=(32&n)>>>5,s.H=(16&n)>>>4,s.X=(8&n)>>>3,s.P=(4&n)>>>2,s.N=(2&n)>>>1,s.C=1&n},k=function(n){s.Y=(32&n)>>>5,s.X=(8&n)>>>3},z=function(n){return[1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1][n]},A=function(n){N=N-1&65535,e.mem_write(N,(65280&n)>>>8),N=N-1&65535,e.mem_write(N,255&n)},B=function(){var n=255&e.mem_read(N);return N=N+1&65535,n|=e.mem_read(N)<<8,N=N+1&65535,n},D=function(n){l=n?(l=e.mem_read(l+1&65535)|e.mem_read(l+2&65535)<<8)-1&65535:l+2&65535},E=function(n){if(n){x+=5;var i=q(e.mem_read(l+1&65535));l=l+i+1&65535}else l=l+1&65535},F=function(n){n?(x+=7,A(l+3&65535),l=(l=e.mem_read(l+1&65535)|e.mem_read(l+2&65535)<<8)-1&65535):l=l+2&65535},G=function(n){n&&(x+=6,l=B()-1&65535)},I=function(n){A(l+1&65535),l=n-1&65535},J=function(n){var e=i+n;s.S=128&e?1:0,s.Z=255&e?0:1,s.H=(15&n)+(15&i)&16?1:0,s.P=(128&i)==(128&n)&&(128&i)!=(128&e)?1:0,s.N=0,s.C=256&e?1:0,k(i=255&e)},K=function(n){var e=i+n+s.C;s.S=128&e?1:0,s.Z=255&e?0:1,s.H=(15&n)+(15&i)+s.C&16?1:0,s.P=(128&i)==(128&n)&&(128&i)!=(128&e)?1:0,s.N=0,s.C=256&e?1:0,k(i=255&e)},L=function(n){var e=i-n;s.S=128&e?1:0,s.Z=255&e?0:1,s.H=(15&i)-(15&n)&16?1:0,s.P=(128&i)!=(128&n)&&(128&i)!=(128&e)?1:0,s.N=1,s.C=256&e?1:0,k(i=255&e)},Q=function(n){var e=i-n-s.C;s.S=128&e?1:0,s.Z=255&e?0:1,s.H=(15&i)-(15&n)-s.C&16?1:0,s.P=(128&i)!=(128&n)&&(128&i)!=(128&e)?1:0,s.N=1,s.C=256&e?1:0,k(i=255&e)},R=function(n){var e=i;L(n),i=e,k(n)},T=function(n){i&=255&n,s.S=128&i?1:0,s.Z=i?0:1,s.H=1,s.P=z(i),s.N=0,s.C=0,k(i)},U=function(n){i=255&(n|i),s.S=128&i?1:0,s.Z=i?0:1,s.H=0,s.P=z(i),s.N=0,s.C=0,k(i)},V=function(n){i=255&(n^i),s.S=128&i?1:0,s.Z=i?0:1,s.H=0,s.P=z(i),s.N=0,s.C=0,k(i)},W=function(n){var e=n+1;return s.S=128&e?1:0,s.Z=255&e?0:1,s.H=15==(15&n)?1:0,s.P=127===n?1:0,s.N=0,k(e&=255),e},$=function(n){var e=n-1;return s.S=128&e?1:0,s.Z=255&e?0:1,s.H=0==(15&n)?1:0,s.P=128===n?1:0,s.N=1,k(e&=255),e},nn=function(n){var e=u|o<<8,i=e+n;s.N=0,s.C=65536&i?1:0,s.H=(4095&e)+(4095&n)&4096?1:0,u=255&i,k(o=(65280&i)>>>8)},en=function(n){n+=s.C;var e=u|o<<8,i=e+n;s.S=32768&i?1:0,s.Z=65535&i?0:1,s.H=(4095&e)+(4095&n)&4096?1:0,s.P=(32768&e)==(32768&n)&&(32768&i)!=(32768&e)?1:0,s.N=0,s.C=65536&i?1:0,u=255&i,k(o=i>>>8&255)},tn=function(n){n+=s.C;var e=u|o<<8,i=e-n;s.S=32768&i?1:0,s.Z=65535&i?0:1,s.H=(4095&e)-(4095&n)&4096?1:0,s.P=(32768&e)!=(32768&n)&&(32768&i)!=(32768&e)?1:0,s.N=1,s.C=65536&i?1:0,u=255&i,k(o=i>>>8&255)},mn=function(n){var i=e.io_read(n);return s.S=128&i?1:0,s.Z=i?0:1,s.H=0,s.P=z(i)?1:0,s.N=0,k(i),i},rn=function(){128!==i&&(i=255&-(i=q(i))),s.S=128&i?1:0,s.Z=i?0:1,s.H=(15&-i)>0?1:0,s.P=128===i?1:0,s.N=1,s.C=i?1:0,k(i)},fn=function(){var n=e.mem_read(u|o<<8);e.mem_write(f|r<<8,n);var c=1+(f|r<<8);f=255&c,r=(65280&c)>>>8,u=255&(c=1+(u|o<<8)),o=(65280&c)>>>8,m=255&(c=(m|t<<8)-1),t=(65280&c)>>>8,s.H=0,s.P=m||t?1:0,s.N=0,s.Y=(i+n&2)>>>1,s.X=(i+n&8)>>>3},on=function(){var n=s.C,r=e.mem_read(u|o<<8);R(r),s.C=n,s.Y=(i-r-s.H&2)>>>1,s.X=(i-r-s.H&8)>>>3;var f=1+(u|o<<8);u=255&f,o=(65280&f)>>>8,m=255&(f=(m|t<<8)-1),t=(65280&f)>>>8,s.P=f?1:0},un=function(){t=$(t),e.mem_write(u|o<<8,e.io_read(t<<8|m));var n=1+(u|o<<8);u=255&n,o=(65280&n)>>>8,s.N=1},cn=function(){e.io_write(t<<8|m,e.mem_read(u|o<<8));var n=1+(u|o<<8);u=255&n,o=(65280&n)>>>8,t=$(t),s.N=1},an=function(){s.N=0,s.H=0;var n=e.mem_read(u|o<<8);e.mem_write(f|r<<8,n);var c=(f|r<<8)-1;f=255&c,r=(65280&c)>>>8,u=255&(c=(u|o<<8)-1),o=(65280&c)>>>8,m=255&(c=(m|t<<8)-1),t=(65280&c)>>>8,s.P=m||t?1:0,s.Y=(i+n&2)>>>1,s.X=(i+n&8)>>>3},_n=function(){var n=s.C,r=e.mem_read(u|o<<8);R(r),s.C=n,s.Y=(i-r-s.H&2)>>>1,s.X=(i-r-s.H&8)>>>3;var f=(u|o<<8)-1;u=255&f,o=(65280&f)>>>8,m=255&(f=(m|t<<8)-1),t=(65280&f)>>>8,s.P=f?1:0},dn=function(){t=$(t),e.mem_write(u|o<<8,e.io_read(t<<8|m));var n=(u|o<<8)-1;u=255&n,o=(65280&n)>>>8,s.N=1},vn=function(){e.io_write(t<<8|m,e.mem_read(u|o<<8));var n=(u|o<<8)-1;u=255&n,o=(65280&n)>>>8,t=$(t),s.N=1},Zn=function(n){return s.N=0,s.H=0,s.C=(128&n)>>>7,n=255&(n<<1|s.C),s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},Cn=function(n){return s.N=0,s.H=0,s.C=1&n,n=n>>>1&127|s.C<<7,s.Z=255&n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),255&n},Pn=function(n){s.N=0,s.H=0;var e=s.C;return s.C=(128&n)>>>7,n=255&(n<<1|e),s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},wn=function(n){s.N=0,s.H=0;var e=s.C;return s.C=1&n,n=n>>>1&127|e<<7,s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},Sn=function(n){return s.N=0,s.H=0,s.C=(128&n)>>>7,n=n<<1&255,s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},Hn=function(n){return s.N=0,s.H=0,s.C=1&n,n=n>>>1&127|128&n,s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},Nn=function(n){return s.N=0,s.H=0,s.C=(128&n)>>>7,n=n<<1&255|1,s.Z=n?0:1,s.P=z(n),s.S=128&n?1:0,k(n),n},ln=function(n){return s.N=0,s.H=0,s.C=1&n,n=n>>>1&127,s.Z=n?0:1,s.P=z(n),s.S=0,k(n),n},sn=function(n){s.N=0;var e=P+n;s.C=65536&e?1:0,s.H=(4095&P)+(4095&n)&4096?1:0,k((65280&e)>>>8),P=e},pn=[];pn[0]=function(){},pn[1]=function(){l=l+1&65535,m=e.mem_read(l),l=l+1&65535,t=e.mem_read(l)},pn[2]=function(){e.mem_write(m|t<<8,i)},pn[3]=function(){var n=m|t<<8;m=255&(n+=1),t=(65280&n)>>>8},pn[4]=function(){t=W(t)},pn[5]=function(){t=$(t)},pn[6]=function(){l=l+1&65535,t=e.mem_read(l)},pn[7]=function(){var n=s.S,e=s.Z,t=s.P;i=Zn(i),s.S=n,s.Z=e,s.P=t},pn[8]=function(){var n,e=i;i=c,c=e,e=M(),O(p.S<<7|p.Z<<6|p.Y<<5|p.H<<4|p.X<<3|p.P<<2|p.N<<1|p.C),n=e,p.S=(128&n)>>>7,p.Z=(64&n)>>>6,p.Y=(32&n)>>>5,p.H=(16&n)>>>4,p.X=(8&n)>>>3,p.P=(4&n)>>>2,p.N=(2&n)>>>1,p.C=1&n},pn[9]=function(){nn(m|t<<8)},pn[10]=function(){i=e.mem_read(m|t<<8)},pn[11]=function(){var n=m|t<<8;m=255&(n-=1),t=(65280&n)>>>8},pn[12]=function(){m=W(m)},pn[13]=function(){m=$(m)},pn[14]=function(){l=l+1&65535,m=e.mem_read(l)},pn[15]=function(){var n=s.S,e=s.Z,t=s.P;i=Cn(i),s.S=n,s.Z=e,s.P=t},pn[16]=function(){E(0!==(t=t-1&255))},pn[17]=function(){l=l+1&65535,f=e.mem_read(l),l=l+1&65535,r=e.mem_read(l)},pn[18]=function(){e.mem_write(f|r<<8,i)},pn[19]=function(){var n=f|r<<8;f=255&(n+=1),r=(65280&n)>>>8},pn[20]=function(){r=W(r)},pn[21]=function(){r=$(r)},pn[22]=function(){l=l+1&65535,r=e.mem_read(l)},pn[23]=function(){var n=s.S,e=s.Z,t=s.P;i=Pn(i),s.S=n,s.Z=e,s.P=t},pn[24]=function(){var n=q(e.mem_read(l+1&65535));l=l+n+1&65535},pn[25]=function(){nn(f|r<<8)},pn[26]=function(){i=e.mem_read(f|r<<8)},pn[27]=function(){var n=f|r<<8;f=255&(n-=1),r=(65280&n)>>>8},pn[28]=function(){f=W(f)},pn[29]=function(){f=$(f)},pn[30]=function(){l=l+1&65535,f=e.mem_read(l)},pn[31]=function(){var n=s.S,e=s.Z,t=s.P;i=wn(i),s.S=n,s.Z=e,s.P=t},pn[32]=function(){E(!s.Z)},pn[33]=function(){l=l+1&65535,u=e.mem_read(l),l=l+1&65535,o=e.mem_read(l)},pn[34]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,u),e.mem_write(n+1&65535,o)},pn[35]=function(){var n=u|o<<8;u=255&(n+=1),o=(65280&n)>>>8},pn[36]=function(){o=W(o)},pn[37]=function(){o=$(o)},pn[38]=function(){l=l+1&65535,o=e.mem_read(l)},pn[39]=function(){var n=i;s.N?((s.H||(15&i)>9)&&(n-=6),(s.C||i>153)&&(n-=96)):((s.H||(15&i)>9)&&(n+=6),(s.C||i>153)&&(n+=96)),s.S=128&n?1:0,s.Z=255&n?0:1,s.H=16&i^16&n?1:0,s.P=z(255&n),s.C=s.C||i>153?1:0,k(i=255&n)},pn[40]=function(){E(!!s.Z)},pn[41]=function(){nn(u|o<<8)},pn[42]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,u=e.mem_read(n),o=e.mem_read(n+1&65535)},pn[43]=function(){var n=u|o<<8;u=255&(n-=1),o=(65280&n)>>>8},pn[44]=function(){u=W(u)},pn[45]=function(){u=$(u)},pn[46]=function(){l=l+1&65535,u=e.mem_read(l)},pn[47]=function(){i=255&~i,s.N=1,s.H=1,k(i)},pn[48]=function(){E(!s.C)},pn[49]=function(){N=e.mem_read(l+1&65535)|e.mem_read(l+2&65535)<<8,l=l+2&65535},pn[50]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,i)},pn[51]=function(){N=N+1&65535},pn[52]=function(){var n=u|o<<8;e.mem_write(n,W(e.mem_read(n)))},pn[53]=function(){var n=u|o<<8;e.mem_write(n,$(e.mem_read(n)))},pn[54]=function(){l=l+1&65535,e.mem_write(u|o<<8,e.mem_read(l))},pn[55]=function(){s.N=0,s.H=0,s.C=1,k(i)},pn[56]=function(){E(!!s.C)},pn[57]=function(){nn(N)},pn[58]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,i=e.mem_read(n)},pn[59]=function(){N=N-1&65535},pn[60]=function(){i=W(i)},pn[61]=function(){i=$(i)},pn[62]=function(){i=e.mem_read(l+1&65535),l=l+1&65535},pn[63]=function(){s.N=0,s.H=s.C,s.C=s.C?0:1,k(i)},pn[192]=function(){G(!s.Z)},pn[193]=function(){var n=B();m=255&n,t=(65280&n)>>>8},pn[194]=function(){D(!s.Z)},pn[195]=function(){l=(l=e.mem_read(l+1&65535)|e.mem_read(l+2&65535)<<8)-1&65535},pn[196]=function(){F(!s.Z)},pn[197]=function(){A(m|t<<8)},pn[198]=function(){l=l+1&65535,J(e.mem_read(l))},pn[199]=function(){I(0)},pn[200]=function(){G(!!s.Z)},pn[201]=function(){l=B()-1&65535},pn[202]=function(){D(!!s.Z)},pn[203]=function(){H=128&H|1+(127&H)&127,l=l+1&65535;var n=e.mem_read(l),c=(56&n)>>>3,a=7&n;if(n<64){var _=[Zn,Cn,Pn,wn,Sn,Hn,Nn,ln];0===a?t=_[c](t):1===a?m=_[c](m):2===a?r=_[c](r):3===a?f=_[c](f):4===a?o=_[c](o):5===a?u=_[c](u):6===a?e.mem_write(u|o<<8,_[c](e.mem_read(u|o<<8))):7===a&&(i=_[c](i))}else n<128?(0===a?s.Z=t&1<<c?0:1:1===a?s.Z=m&1<<c?0:1:2===a?s.Z=r&1<<c?0:1:3===a?s.Z=f&1<<c?0:1:4===a?s.Z=o&1<<c?0:1:5===a?s.Z=u&1<<c?0:1:6===a?s.Z=e.mem_read(u|o<<8)&1<<c?0:1:7===a&&(s.Z=i&1<<c?0:1),s.N=0,s.H=1,s.P=s.Z,s.S=7!==c||s.Z?0:1,s.Y=5!==c||s.Z?0:1,s.X=3!==c||s.Z?0:1):n<192?0===a?t&=255&~(1<<c):1===a?m&=255&~(1<<c):2===a?r&=255&~(1<<c):3===a?f&=255&~(1<<c):4===a?o&=255&~(1<<c):5===a?u&=255&~(1<<c):6===a?e.mem_write(u|o<<8,e.mem_read(u|o<<8)&~(1<<c)):7===a&&(i&=255&~(1<<c)):0===a?t|=1<<c:1===a?m|=1<<c:2===a?r|=1<<c:3===a?f|=1<<c:4===a?o|=1<<c:5===a?u|=1<<c:6===a?e.mem_write(u|o<<8,e.mem_read(u|o<<8)|1<<c):7===a&&(i|=1<<c);x+=hn[n]},pn[204]=function(){F(!!s.Z)},pn[205]=function(){A(l+3&65535),l=(l=e.mem_read(l+1&65535)|e.mem_read(l+2&65535)<<8)-1&65535},pn[206]=function(){l=l+1&65535,K(e.mem_read(l))},pn[207]=function(){I(8)},pn[208]=function(){G(!s.C)},pn[209]=function(){var n=B();f=255&n,r=(65280&n)>>>8},pn[210]=function(){D(!s.C)},pn[211]=function(){l=l+1&65535,e.io_write(i<<8|e.mem_read(l),i)},pn[212]=function(){F(!s.C)},pn[213]=function(){A(f|r<<8)},pn[214]=function(){l=l+1&65535,L(e.mem_read(l))},pn[215]=function(){I(16)},pn[216]=function(){G(!!s.C)},pn[217]=function(){var n=t;t=a,a=n,n=m,m=_,_=n,n=r,r=d,d=n,n=f,f=v,v=n,n=o,o=Z,Z=n,n=u,u=C,C=n},pn[218]=function(){D(!!s.C)},pn[219]=function(){l=l+1&65535,i=e.io_read(i<<8|e.mem_read(l))},pn[220]=function(){F(!!s.C)},pn[221]=function(){H=128&H|1+(127&H)&127,l=l+1&65535;var n=e.mem_read(l),i=Xn[n];i?(i(),x+=bn[n]):(l=l-1&65535,x+=Yn[0])},pn[222]=function(){l=l+1&65535,Q(e.mem_read(l))},pn[223]=function(){I(24)},pn[224]=function(){G(!s.P)},pn[225]=function(){var n=B();u=255&n,o=(65280&n)>>>8},pn[226]=function(){D(!s.P)},pn[227]=function(){var n=e.mem_read(N);e.mem_write(N,u),u=n,n=e.mem_read(N+1&65535),e.mem_write(N+1&65535,o),o=n},pn[228]=function(){F(!s.P)},pn[229]=function(){A(u|o<<8)},pn[230]=function(){l=l+1&65535,T(e.mem_read(l))},pn[231]=function(){I(32)},pn[232]=function(){G(!!s.P)},pn[233]=function(){l=(l=u|o<<8)-1&65535},pn[234]=function(){D(!!s.P)},pn[235]=function(){var n=r;r=o,o=n,n=f,f=u,u=n},pn[236]=function(){F(!!s.P)},pn[237]=function(){H=128&H|1+(127&H)&127,l=l+1&65535;var n=e.mem_read(l),i=gn[n];i?(i(),x+=yn[n]):x+=Yn[0]},pn[238]=function(){l=l+1&65535,V(e.mem_read(l))},pn[239]=function(){I(40)},pn[240]=function(){G(!s.S)},pn[241]=function(){var n=B();O(255&n),i=(65280&n)>>>8},pn[242]=function(){D(!s.S)},pn[243]=function(){h=!0},pn[244]=function(){F(!s.S)},pn[245]=function(){A(M()|i<<8)},pn[246]=function(){l=l+1&65535,U(e.mem_read(l))},pn[247]=function(){I(48)},pn[248]=function(){G(!!s.S)},pn[249]=function(){N=u|o<<8},pn[250]=function(){D(!!s.S)},pn[251]=function(){b=!0},pn[252]=function(){F(!!s.S)},pn[253]=function(){H=128&H|1+(127&H)&127,l=l+1&65535;var n=e.mem_read(l),i=Xn[n];if(i){var t=P;P=w,i(),w=P,P=t,x+=bn[n]}else l=l-1&65535,x+=Yn[0]},pn[254]=function(){l=l+1&65535,R(e.mem_read(l))},pn[255]=function(){I(56)};let gn=[];gn[64]=function(){t=mn(t<<8|m)},gn[65]=function(){e.io_write(t<<8|m,t)},gn[66]=function(){tn(m|t<<8)},gn[67]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,m),e.mem_write(n+1&65535,t)},gn[68]=function(){rn()},gn[69]=function(){l=B()-1&65535,X=Y},gn[70]=function(){g=0},gn[71]=function(){S=i},gn[72]=function(){m=mn(t<<8|m)},gn[73]=function(){e.io_write(t<<8|m,m)},gn[74]=function(){en(m|t<<8)},gn[75]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,m=e.mem_read(n),t=e.mem_read(n+1&65535)},gn[76]=function(){rn()},gn[77]=function(){l=B()-1&65535},gn[78]=function(){g=0},gn[79]=function(){H=i},gn[80]=function(){r=mn(t<<8|m)},gn[81]=function(){e.io_write(t<<8|m,r)},gn[82]=function(){tn(f|r<<8)},gn[83]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,f),e.mem_write(n+1&65535,r)},gn[84]=function(){rn()},gn[85]=function(){l=B()-1&65535,X=Y},gn[86]=function(){g=1},gn[87]=function(){i=S,s.S=128&S?1:0,s.Z=S?0:1,s.H=0,s.P=Y,s.N=0},gn[88]=function(){f=mn(t<<8|m)},gn[89]=function(){e.io_write(t<<8|m,f)},gn[90]=function(){en(f|r<<8)},gn[91]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,f=e.mem_read(n),r=e.mem_read(n+1&65535)},gn[92]=function(){rn()},gn[93]=function(){l=B()-1&65535,X=Y},gn[94]=function(){g=2},gn[95]=function(){i=H,s.P=Y},gn[96]=function(){o=mn(t<<8|m)},gn[97]=function(){e.io_write(t<<8|m,o)},gn[98]=function(){tn(u|o<<8)},gn[99]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,u),e.mem_write(n+1&65535,o)},gn[100]=function(){rn()},gn[101]=function(){l=B()-1&65535,X=Y},gn[102]=function(){g=0},gn[103]=function(){var n=e.mem_read(u|o<<8),t=15&n;n=(240&n)>>>4|(15&i)<<4,i=240&i|t,e.mem_write(u|o<<8,n),s.S=128&i?1:0,s.Z=i?0:1,s.H=0,s.P=z(i)?1:0,s.N=0,k(i)},gn[104]=function(){u=mn(t<<8|m)},gn[105]=function(){e.io_write(t<<8|m,u)},gn[106]=function(){en(u|o<<8)},gn[107]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,u=e.mem_read(n),o=e.mem_read(n+1&65535)},gn[108]=function(){rn()},gn[109]=function(){l=B()-1&65535,X=Y},gn[110]=function(){g=0},gn[111]=function(){var n=e.mem_read(u|o<<8),t=240&n;n=(15&n)<<4|15&i,i=240&i|t>>>4,e.mem_write(u|o<<8,n),s.S=128&i?1:0,s.Z=i?0:1,s.H=0,s.P=z(i)?1:0,s.N=0,k(i)},gn[112]=function(){mn(t<<8|m)},gn[113]=function(){e.io_write(t<<8|m,0)},gn[114]=function(){tn(N)},gn[115]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,255&N),e.mem_write(n+1&65535,N>>>8&255)},gn[116]=function(){rn()},gn[117]=function(){l=B()-1&65535,X=Y},gn[118]=function(){g=1},gn[120]=function(){i=mn(t<<8|m)},gn[121]=function(){e.io_write(t<<8|m,i)},gn[122]=function(){en(N)},gn[123]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,N=e.mem_read(n),N|=e.mem_read(n+1&65535)<<8},gn[124]=function(){rn()},gn[125]=function(){l=B()-1&65535,X=Y},gn[126]=function(){g=2},gn[160]=function(){fn()},gn[161]=function(){on()},gn[162]=function(){un()},gn[163]=function(){cn()},gn[168]=function(){an()},gn[169]=function(){_n()},gn[170]=function(){dn()},gn[171]=function(){vn()},gn[176]=function(){fn(),(t||m)&&(x+=5,l=l-2&65535)},gn[177]=function(){on(),s.Z||!t&&!m||(x+=5,l=l-2&65535)},gn[178]=function(){un(),t&&(x+=5,l=l-2&65535)},gn[179]=function(){cn(),t&&(x+=5,l=l-2&65535)},gn[184]=function(){an(),(t||m)&&(x+=5,l=l-2&65535)},gn[185]=function(){_n(),s.Z||!t&&!m||(x+=5,l=l-2&65535)},gn[186]=function(){dn(),t&&(x+=5,l=l-2&65535)},gn[187]=function(){vn(),t&&(x+=5,l=l-2&65535)};let Xn=[];Xn[9]=function(){sn(m|t<<8)},Xn[25]=function(){sn(f|r<<8)},Xn[33]=function(){l=l+1&65535,P=e.mem_read(l),l=l+1&65535,P|=e.mem_read(l)<<8},Xn[34]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,e.mem_write(n,255&P),e.mem_write(n+1&65535,P>>>8&255)},Xn[35]=function(){P=P+1&65535},Xn[36]=function(){P=W(P>>>8)<<8|255&P},Xn[37]=function(){P=$(P>>>8)<<8|255&P},Xn[38]=function(){l=l+1&65535,P=e.mem_read(l)<<8|255&P},Xn[41]=function(){sn(P)},Xn[42]=function(){l=l+1&65535;var n=e.mem_read(l);l=l+1&65535,n|=e.mem_read(l)<<8,P=e.mem_read(n),P|=e.mem_read(n+1&65535)<<8},Xn[43]=function(){P=P-1&65535},Xn[44]=function(){P=W(255&P)|65280&P},Xn[45]=function(){P=$(255&P)|65280&P},Xn[46]=function(){l=l+1&65535,P=255&e.mem_read(l)|65280&P},Xn[52]=function(){l=l+1&65535;var n=q(e.mem_read(l)),i=e.mem_read(n+P&65535);e.mem_write(n+P&65535,W(i))},Xn[53]=function(){l=l+1&65535;var n=q(e.mem_read(l)),i=e.mem_read(n+P&65535);e.mem_write(n+P&65535,$(i))},Xn[54]=function(){l=l+1&65535;var n=q(e.mem_read(l));l=l+1&65535,e.mem_write(P+n&65535,e.mem_read(l))},Xn[57]=function(){sn(N)},Xn[68]=function(){t=P>>>8&255},Xn[69]=function(){t=255&P},Xn[70]=function(){l=l+1&65535;var n=q(e.mem_read(l));t=e.mem_read(P+n&65535)},Xn[76]=function(){m=P>>>8&255},Xn[77]=function(){m=255&P},Xn[78]=function(){l=l+1&65535;var n=q(e.mem_read(l));m=e.mem_read(P+n&65535)},Xn[84]=function(){r=P>>>8&255},Xn[85]=function(){r=255&P},Xn[86]=function(){l=l+1&65535;var n=q(e.mem_read(l));r=e.mem_read(P+n&65535)},Xn[92]=function(){f=P>>>8&255},Xn[93]=function(){f=255&P},Xn[94]=function(){l=l+1&65535;var n=q(e.mem_read(l));f=e.mem_read(P+n&65535)},Xn[96]=function(){P=255&P|t<<8},Xn[97]=function(){P=255&P|m<<8},Xn[98]=function(){P=255&P|r<<8},Xn[99]=function(){P=255&P|f<<8},Xn[100]=function(){},Xn[101]=function(){P=255&P|(255&P)<<8},Xn[102]=function(){l=l+1&65535;var n=q(e.mem_read(l));o=e.mem_read(P+n&65535)},Xn[103]=function(){P=255&P|i<<8},Xn[104]=function(){P=65280&P|t},Xn[105]=function(){P=65280&P|m},Xn[106]=function(){P=65280&P|r},Xn[107]=function(){P=65280&P|f},Xn[108]=function(){P=65280&P|P>>>8},Xn[109]=function(){},Xn[110]=function(){l=l+1&65535;var n=q(e.mem_read(l));u=e.mem_read(P+n&65535)},Xn[111]=function(){P=65280&P|i},Xn[112]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,t)},Xn[113]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,m)},Xn[114]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,r)},Xn[115]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,f)},Xn[116]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,o)},Xn[117]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,u)},Xn[119]=function(){l=l+1&65535;var n=q(e.mem_read(l));e.mem_write(P+n&65535,i)},Xn[124]=function(){i=P>>>8&255},Xn[125]=function(){i=255&P},Xn[126]=function(){l=l+1&65535;var n=q(e.mem_read(l));i=e.mem_read(P+n&65535)},Xn[132]=function(){J(P>>>8&255)},Xn[133]=function(){J(255&P)},Xn[134]=function(){l=l+1&65535;var n=q(e.mem_read(l));J(e.mem_read(P+n&65535))},Xn[140]=function(){K(P>>>8&255)},Xn[141]=function(){K(255&P)},Xn[142]=function(){l=l+1&65535;var n=q(e.mem_read(l));K(e.mem_read(P+n&65535))},Xn[148]=function(){L(P>>>8&255)},Xn[149]=function(){L(255&P)},Xn[150]=function(){l=l+1&65535;var n=q(e.mem_read(l));L(e.mem_read(P+n&65535))},Xn[156]=function(){Q(P>>>8&255)},Xn[157]=function(){Q(255&P)},Xn[158]=function(){l=l+1&65535;var n=q(e.mem_read(l));Q(e.mem_read(P+n&65535))},Xn[164]=function(){T(P>>>8&255)},Xn[165]=function(){T(255&P)},Xn[166]=function(){l=l+1&65535;var n=q(e.mem_read(l));T(e.mem_read(P+n&65535))},Xn[172]=function(){V(P>>>8&255)},Xn[173]=function(){V(255&P)},Xn[174]=function(){l=l+1&65535;var n=q(e.mem_read(l));V(e.mem_read(P+n&65535))},Xn[180]=function(){U(P>>>8&255)},Xn[181]=function(){U(255&P)},Xn[182]=function(){l=l+1&65535;var n=q(e.mem_read(l));U(e.mem_read(P+n&65535))},Xn[188]=function(){R(P>>>8&255)},Xn[189]=function(){R(255&P)},Xn[190]=function(){l=l+1&65535;var n=q(e.mem_read(l));R(e.mem_read(P+n&65535))},Xn[203]=function(){l=l+1&65535;var n=q(e.mem_read(l));l=l+1&65535;var c,a=e.mem_read(l);if(a<64){c=(0,[Zn,Cn,Pn,wn,Sn,Hn,Nn,ln][(56&a)>>>3])(e.mem_read(P+n&65535)),e.mem_write(P+n&65535,c)}else{var _=(56&a)>>>3;a<128?(s.N=0,s.H=1,s.Z=e.mem_read(P+n&65535)&1<<_?0:1,s.P=s.Z,s.S=7!==_||s.Z?0:1):a<192?(c=e.mem_read(P+n&65535)&~(1<<_)&255,e.mem_write(P+n&65535,c)):(c=e.mem_read(P+n&65535)|1<<_,e.mem_write(P+n&65535,c))}void 0!==c&&(0==(7&a)?t=c:1==(7&a)?m=c:2==(7&a)?r=c:3==(7&a)?f=c:4==(7&a)?o=c:5==(7&a)?u=c:7==(7&a)&&(i=c)),x+=hn[a]+8},Xn[225]=function(){P=B()},Xn[227]=function(){var n=P;P=e.mem_read(N),P|=e.mem_read(N+1&65535)<<8,e.mem_write(N,255&n),e.mem_write(N+1&65535,n>>>8&255)},Xn[229]=function(){A(P)},Xn[233]=function(){l=P-1&65535},Xn[249]=function(){N=P};let Yn=[4,10,7,6,4,4,7,4,4,11,7,6,4,4,7,4,8,10,7,6,4,4,7,4,12,11,7,6,4,4,7,4,7,10,16,6,4,4,7,4,7,11,16,6,4,4,7,4,7,10,13,6,11,11,10,4,7,11,13,6,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,7,7,7,7,7,7,4,7,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,7,4,5,10,10,10,10,11,7,11,5,10,10,0,10,17,7,11,5,10,10,11,10,11,7,11,5,4,10,11,10,0,7,11,5,10,10,19,10,11,7,11,5,4,10,4,10,0,7,11,5,10,10,4,10,11,7,11,5,6,10,4,10,0,7,11],yn=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,15,20,8,14,8,9,12,12,15,20,8,14,8,9,12,12,15,20,8,14,8,9,12,12,15,20,8,14,8,9,12,12,15,20,8,14,8,18,12,12,15,20,8,14,8,18,12,12,15,20,8,14,8,0,12,12,15,20,8,14,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,16,16,0,0,0,0,16,16,16,16,0,0,0,0,16,16,16,16,0,0,0,0,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hn=[8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,12,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8,8,8,8,8,8,8,15,8],bn=[0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,14,20,10,8,8,11,0,0,15,20,10,8,8,11,0,0,0,0,0,23,23,19,0,0,15,0,0,0,0,0,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,8,8,8,8,8,8,19,8,8,8,8,8,8,8,19,8,19,19,19,19,19,19,0,19,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,8,8,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,23,0,15,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0];return{getState:function(){return{b:t,a:i,c:m,d:r,e:f,h:o,l:u,a_prime:c,b_prime:a,c_prime:_,d_prime:d,e_prime:v,h_prime:Z,l_prime:C,ix:P,iy:w,i:S,r:H,sp:N,pc:l,flags:{S:s.S,Z:s.Z,Y:s.Y,H:s.H,X:s.X,P:s.P,N:s.N,C:s.C},flags_prime:{S:p.S,Z:p.Z,Y:p.Y,H:p.H,X:p.X,P:p.P,N:p.N,C:p.C},imode:g,iff1:X,iff2:Y,halted:y,do_delayed_di:h,do_delayed_ei:b,cycle_counter:x}},getPC:function(){return l},setState:function(n){t=n.b,i=n.a,m=n.c,r=n.d,f=n.e,o=n.h,u=n.l,c=n.a_prime,a=n.b_prime,_=n.c_prime,d=n.d_prime,v=n.e_prime,Z=n.h_prime,C=n.l_prime,P=n.ix,w=n.iy,S=n.i,H=n.r,N=n.sp,l=n.pc,s.S=n.flags.S,s.Z=n.flags.Z,s.Y=n.flags.Y,s.H=n.flags.H,s.X=n.flags.X,s.P=n.flags.P,s.N=n.flags.N,s.C=n.flags.C,p.S=n.flags_prime.S,p.Z=n.flags_prime.Z,p.Y=n.flags_prime.Y,p.H=n.flags_prime.H,p.X=n.flags_prime.X,p.P=n.flags_prime.P,p.N=n.flags_prime.N,p.C=n.flags_prime.C,g=n.imode,X=n.iff1,Y=n.iff2,y=n.halted,h=n.do_delayed_di,b=n.do_delayed_ei,x=n.cycle_counter},reset:function(){N=57328,l=0,i=0,H=0,O(0),g=0,X=0,Y=0,y=!1,h=!1,b=!1,x=0},reset1:function(){N=57328,l=0,y=!1},run_instruction:function(){if(y)return 1;var n=!1,i=!1;h?(h=!1,n=!0):b&&(b=!1,i=!0),H=128&H|1+(127&H)&127;var t=e.mem_read(l);j(t),l=l+1&65535,n?(X=0,Y=0):i&&(X=1,Y=1);var m=x;return x=0,m},interrupt:function(n,i){if(n)H=128&H|1+(127&H)&127,y=!1,Y=X,X=0,A(l),l=102,x+=11;else if(X)if(H=128&H|1+(127&H)&127,y=!1,X=0,Y=0,0===g)j(i),x+=2;else if(1===g)A(l),l=56,x+=13;else if(2===g){A(l);var t=S<<8|i;l=e.mem_read(t)|e.mem_read(t+1&65535)<<8,x+=19}}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Z80=n;
},{}],"wz54":[function(require,module,exports) {
var define;
var global = arguments[3];
var r,t=arguments[3];!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof r&&r.amd?r(e):t.MemoryMap=e()}(this,function(){"use strict";var r=/:([0-9A-Fa-f]{8,})([0-9A-Fa-f]{2})(?:\r\n|\r|\n|)/g;function t(r){return 255&-r.reduce(function(r,t){return r+t},0)}function e(r){return r.toString(16).toUpperCase().padStart(2,"0")}Number.isInteger=Number.isInteger||function(r){return"number"==typeof r&&isFinite(r)&&Math.floor(r)===r};var o=function(r){if(this._blocks=new Map,r&&"function"==typeof r[Symbol.iterator])for(var t of r){if(!(t instanceof Array)||2!==t.length)throw new Error("First parameter to MemoryMap constructor must be an iterable of [addr, bytes] or undefined");this.set(t[0],t[1])}else if("object"==typeof r){var e=Object.keys(r);for(var o of e)this.set(parseInt(o),r[o])}else if(null!=r)throw new Error("First parameter to MemoryMap constructor must be an iterable of [addr, bytes] or undefined")},n={size:{configurable:!0}};return o.prototype.set=function(r,t){if(!Number.isInteger(r))throw new Error("Address passed to MemoryMap is not an integer");if(r<0)throw new Error("Address passed to MemoryMap is negative");if(!(t instanceof Uint8Array))throw new Error("Bytes passed to MemoryMap are not an Uint8Array");return this._blocks.set(r,t)},o.prototype.get=function(r){return this._blocks.get(r)},o.prototype.clear=function(){return this._blocks.clear()},o.prototype.delete=function(r){return this._blocks.delete(r)},o.prototype.entries=function(){return this._blocks.entries()},o.prototype.forEach=function(r,t){return this._blocks.forEach(r,t)},o.prototype.has=function(r){return this._blocks.has(r)},o.prototype.keys=function(){return this._blocks.keys()},o.prototype.values=function(){return this._blocks.values()},n.size.get=function(){return this._blocks.size},o.prototype[Symbol.iterator]=function(){return this._blocks[Symbol.iterator]()},o.fromHex=function(n,a){void 0===a&&(a=1/0);var i,s=new o,f=0,u=0,h=0;for(r.lastIndex=0;null!==(i=r.exec(n));){if(u++,f!==i.index)throw new Error("Malformed hex file: Could not parse between characters "+f+" and "+i.index+' ("'+n.substring(f,Math.min(i.index,f+16)).trim()+'")');f=r.lastIndex;var c=i[1],l=i[2],d=new Uint8Array(c.match(/[\da-f]{2}/gi).map(function(r){return parseInt(r,16)})),p=d[0];if(p+4!==d.length)throw new Error("Mismatched record length at record "+u+" ("+i[0].trim()+"), expected "+p+" data bytes but actual length is "+(d.length-4));var y=t(d);if(parseInt(l,16)!==y)throw new Error("Checksum failed at record "+u+" ("+i[0].trim()+"), should be "+y.toString(16));var v=(d[1]<<8)+d[2],w=d[3],g=d.subarray(4);if(0===w){if(s.has(h+v))throw new Error("Duplicated data at record "+u+" ("+i[0].trim()+")");if(v+g.length>65536)throw new Error("Data at record "+u+" ("+i[0].trim()+") wraps over 0xFFFF. This would trigger ambiguous behaviour. Please restructure your data so that for every record the data offset plus the data length do not exceed 0xFFFF.");s.set(h+v,g)}else{if(0!==v)throw new Error("Record "+u+" ("+i[0].trim()+") must have 0000 as data offset.");switch(w){case 1:if(f!==n.length)throw new Error("There is data after an EOF record at record "+u);return s.join(a);case 2:h=(g[0]<<8)+g[1]<<4;break;case 3:break;case 4:h=(g[0]<<8)+g[1]<<16;break;case 5:break;default:throw new Error("Invalid record type 0x"+e(w)+" at record "+u+" (should be between 0x00 and 0x05)")}}}throw u?new Error("No EOF record at end of file"):new Error("Malformed .hex file, could not parse any registers")},o.prototype.join=function(r){void 0===r&&(r=1/0);for(var t=Array.from(this.keys()).sort(function(r,t){return r-t}),e=new Map,n=-1,a=-1,i=0,s=t.length;i<s;i++){var f=t[i],u=this.get(t[i]).length;if(a===f&&a-n<r)e.set(n,e.get(n)+u),a+=u;else{if(!(a<=f))throw new Error("Overlapping data around address 0x"+f.toString(16));e.set(f,u),n=f,a=f+u}}for(var h,c=new o,l=-1,d=0,p=t.length;d<p;d++){var y=t[d];e.has(y)&&(h=new Uint8Array(e.get(y)),c.set(y,h),l=y),h.set(this.get(y),y-l)}return c},o.overlapMemoryMaps=function(r){var t=new Set;for(var[,e]of r)for(var[o,n]of e)t.add(o),t.add(o+n.length);for(var a=Array.from(t.values()).sort(function(r,t){return r-t}),i=new Map,s=function(t,e){var o=a[t],n=a[t+1],s=[];for(var[f,u]of r){var h=Array.from(u.keys()).reduce(function(r,t){return t>o?r:Math.max(r,t)},-1);if(-1!==h){var c=u.get(h),l=o-h,d=n-h;l<c.length&&s.push([f,c.subarray(l,d)])}}s.length&&i.set(o,s)},f=0,u=a.length-1;f<u;f++)s(f);return i},o.flattenOverlaps=function(r){return new o(Array.from(r.entries()).map(function(r){var t=r[0],e=r[1];return[t,e[e.length-1][1]]}))},o.prototype.paginate=function(r,t){if(void 0===r&&(r=1024),void 0===t&&(t=255),r<=0)throw new Error("Page size must be greater than zero");for(var e,n=new o,a=Array.from(this.keys()).sort(function(r,t){return r-t}),i=0,s=a.length;i<s;i++)for(var f=a[i],u=this.get(f),h=u.length,c=f+h,l=f-f%r;l<c;l+=r){(e=n.get(l))||((e=new Uint8Array(r)).fill(t),n.set(l,e));var d=l-f,p=void 0;d<=0?(p=u.subarray(0,Math.min(r+d,h)),e.set(p,-d)):(p=u.subarray(d,d+Math.min(r,h-d)),e.set(p,0))}return n},o.prototype.getUint32=function(r,t){for(var e=Array.from(this.keys()),o=0,n=e.length;o<n;o++){var a=e[o],i=this.get(a),s=i.length;if(a<=r&&r+4<=a+s)return new DataView(i.buffer,r-a,4).getUint32(0,t)}},o.prototype.asHexString=function(r){void 0===r&&(r=16);var o=0,n=-65536,a=[];if(r<=0)throw new Error("Size of record must be greater than zero");if(r>255)throw new Error("Size of record must be less than 256");for(var i,s=new Uint8Array(6),f=new Uint8Array(4),u=Array.from(this.keys()).sort(function(r,t){return r-t}),h=0,c=u.length;h<c;h++){var l=u[h],d=this.get(l);if(!(d instanceof Uint8Array))throw new Error("Block at offset "+l+" is not an Uint8Array");if(l<0)throw new Error("Block at offset "+l+" has a negative thus invalid address");var p=d.length;if(p){if(l>n+65535&&(n=l-l%65536,o=0,s[0]=2,s[1]=0,s[2]=0,s[3]=4,s[4]=n>>24,s[5]=n>>16,a.push(":"+Array.prototype.map.call(s,e).join("")+e(t(s)))),l<n+o)throw new Error("Block starting at 0x"+l.toString(16)+" overlaps with a previous block.");o=l%65536;var y=0,v=l+p;if(v>4294967295)throw new Error("Data cannot be over 0xFFFFFFFF");for(;n+o<v;){o>65535&&(n+=65536,o=0,s[0]=2,s[1]=0,s[2]=0,s[3]=4,s[4]=n>>24,s[5]=n>>16,a.push(":"+Array.prototype.map.call(s,e).join("")+e(t(s))));for(var w=-1;o<65536&&w;)if(w=Math.min(r,v-n-o,65536-o)){f[0]=w,f[1]=o>>8,f[2]=o,f[3]=0;var g=d.subarray(y,y+w);a.push(":"+Array.prototype.map.call(f,e).join("")+Array.prototype.map.call(g,e).join("")+e((i=g,255&-(f.reduce(function(r,t){return r+t},0)+i.reduce(function(r,t){return r+t},0))))),y+=w,o+=w}}}}return a.push(":00000001FF"),a.join("\n")},o.prototype.clone=function(){var r=new o;for(var[t,e]of this)r.set(t,new Uint8Array(e));return r},o.fromPaddedUint8Array=function(r,t,e){if(void 0===t&&(t=255),void 0===e&&(e=64),!(r instanceof Uint8Array))throw new Error("Bytes passed to fromPaddedUint8Array are not an Uint8Array");for(var n=new o,a=0,i=-1,s=0,f=!1,u=r.length,h=0;h<u;h++){r[h]===t?++a>=e&&(-1!==i&&n.set(s,r.subarray(s,i+1)),f=!0):(f&&(f=!1,s=h),i=h,a=0)}return f||-1===i||n.set(s,r.subarray(s,u)),n},o.prototype.slice=function(r,t){if(void 0===t&&(t=1/0),t<0)throw new Error("Length of the slice cannot be negative");var e=new o;for(var[n,a]of this){var i=a.length;if(n+i>=r&&n<r+t){var s=Math.max(r,n),f=Math.min(r+t,n+i)-s,u=s-n;f>0&&e.set(s,a.subarray(u,u+f))}}return e},o.prototype.slicePad=function(r,t,e){if(void 0===e&&(e=255),t<0)throw new Error("Length of the slice cannot be negative");var o=new Uint8Array(t).fill(e);for(var[n,a]of this){var i=a.length;if(n+i>=r&&n<r+t){var s=Math.max(r,n),f=Math.min(r+t,n+i)-s,u=s-n;f>0&&o.set(a.subarray(u,u+f),s-r)}}return o},o.prototype.contains=function(r){for(var[t,e]of r){var o=e.length,n=this.slice(t,o).join().get(t);if(!n||n.length!==o)return!1;for(var a in e)if(e[a]!==n[a])return!1}return!0},Object.defineProperties(o.prototype,n),o});
},{}],"URzY":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./z80"),r=e(require("nrf-intel-hex"));let a=!1,n=!0,o=30,s=0;const f=new ArrayBuffer(65535),l=new Uint8Array(f).fill(255),i=Array(256).fill(255),u=Array(256).fill(255),c=t.Z80({mem_read:e=>l[e],mem_write:(e,t)=>l[e]=t,io_read:e=>i[255&e],io_write:(e,t)=>{const r=255&e;u[r]=t,g(),T(r,t)}}),d=Array(6).fill(0);function*y(){for(;;){for(let t=0;t<1e3;t++)try{const t=c.run_instruction();s+=t}catch(e){const t=c.getPC(),r=l[c.getPC()]||0;console.log(`Illegal operation at ${t.toString(16)}: ${r.toString(16)}`),c.reset()}yield s}}self.onmessage=(e=>{if("INIT"===e.data.type)c.reset(),a=!0,E();else if("PAUSE"===e.data.type)n?(n=!1,a=!1):(n=!0,a=!0,E());else if("RESUME"===e.data.type);else if("RESET"===e.data.type)console.log("resetting"),c.reset(),a=!0,E();else if("SET_INPUT_VALUE"===e.data.type){const{port:t,value:r}=e.data;i[t]=r}else if("SET_KEY_VALUE"===e.data.type){const{code:t,pressed:r}=e.data;i[0]=t;const a=64,n=~a;i[3]=i[3]&n|(r?0:a)}else if("SET_SPEED"===e.data.type)o=Number(e.data.value)/100,console.log("set speed",o);else if("NMI"===e.data.type)c.interrupt(!0,0);else if("UPDATE_MEMORY"===e.data.type)w(e.data.value),c.reset();else if("READ_MEMORY"===e.data.type)P(e.data.from,e.data.size);else if("HIDDEN"===e.data.type){e.data.value?a=!1:n?(a=!0,E()):console.log("not active")}});let p=!1;const _=y();function E(){if(p)return;if(!a)return;_.next();const e=Math.floor(30*(1-Number(o)));a&&(p=!0,setTimeout(function(){p=!1,E()},e))}function g(){const e=u[1],t=u[2];let r=1;for(let a=0;a<6;a++)e&r&&(d[a]=t),r<<=1}function A(){var e=new ArrayBuffer(4),t=new Uint8Array(e);return t[0]=u[0],t[1]=u[1],t[2]=u[2],e}function M(){var e=new ArrayBuffer(6),t=new Uint8Array(e);for(let r=0;r<6;r++)t[r]=d[r];return e}let m=1,S=0;function T(e,t){const r=A(),a=M();if(1===e){const e=t>>7;1===e&&0===m&&(S=s,s=0),m=e}s>1e4&&(S=0),self.postMessage({type:"POST_OUTPORTS",buffer:r,display:a,speaker:m,wavelength:S,pc:c.getPC()},[r,a])}function w(e){const t=r.default.fromHex(e);for(let r of t.keys()){const e=t.get(r);for(let t=0;t<e.length;t++)l[t+r]=e[t]}}function P(e,t){let r=new ArrayBuffer(t),a=new Uint8Array(r);for(let n=0;n<t;n++)a[n]=l[n+e];self.postMessage({type:"POST_MEMORY",from:e,size:t,buffer:r},[r])}
},{"./z80":"DUQf","nrf-intel-hex":"wz54"}]},{},["URzY"], null)
//# sourceMappingURL=worker.25e5d45f.map
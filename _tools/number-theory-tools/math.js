
function EulerSieve(N){
    var P=[],pN;
    var notP=[];
    pN=0; for(var i=0;i<=N;i++) notP[i]=0;
    for(var i=2;i<=N;i++){
        if(!notP[i]) P[++pN]=i;
        for(var j=1;j<=pN&&i*P[j]<=N;j++){
            notP[i*P[j]]=1;
            if(i%P[j]==0) break;
        }
    }

    this.P = P; this.pN = pN; this.notP = notP;
}

function Factorization(N){
    var p=[], c=[], sN=0;
    var sqrtN=Math.floor(Math.sqrt(N));
    var es=new EulerSieve(sqrtN);
    var P=es.P, pN=es.pN;
    for(var i=1;i<=pN&&N!=1;i++){
        if(N%P[i]==0){
            p[++sN]=P[i];c[sN]=0;
            while(N%P[i]==0){
                N/=P[i];c[sN]++;
            }
        }
    }
    if(N!=1){
        p[++sN]=N;c[sN]=1;
    }

    this.p = p; this.c = c; this.sN = sN;
}
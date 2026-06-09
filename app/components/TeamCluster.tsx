"use client";
import { useEffect, useRef } from "react";

type N = { left: string; top: string; size: number; kind: "photo" | "logo"; img?: string; name?: string; role?: string; dim?: number; delay: number; };

const NODES: N[] = [
  { left:"calc(50% - 112px)", top:"150px", size:104, kind:"photo", img:"/jaidev.jpg", name:"Jaidev Bhogal", role:"Founder", delay:0 },
  { left:"calc(50% + 8px)",   top:"150px", size:104, kind:"photo", img:"/luka.jpg",   name:"Luka Filipovic", role:"Founder", delay:0.6 },
  { left:"calc(50% - 168px)", top:"74px",  size:62,  kind:"logo", name:"Lara",   delay:1.1 },
  { left:"calc(50% + 106px)", top:"74px",  size:62,  kind:"logo", name:"Hassan", delay:0.3 },
  { left:"calc(50% - 25px)",  top:"34px",  size:50,  kind:"logo", dim:0.8,  delay:1.4 },
  { left:"calc(50% - 150px)", top:"258px", size:50,  kind:"logo", dim:0.8,  delay:0.9 },
  { left:"calc(50% + 100px)", top:"258px", size:50,  kind:"logo", dim:0.8,  delay:1.8 },
  { left:"calc(50% - 21px)",  top:"300px", size:42,  kind:"logo", dim:0.72, delay:0.2 },
  { left:"calc(50% + 156px)", top:"172px", size:50,  kind:"logo", dim:0.8,  delay:1.3 },
  { left:"calc(50% - 206px)", top:"176px", size:42,  kind:"logo", dim:0.72, delay:0.7 },
];

export default function TeamCluster() {
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const data = Array.from(stage.querySelectorAll<HTMLElement>(".tc-node")).map(el => ({ el, bx:0, by:0, cx:0, cy:0 }));
    function measure(){
      const sr = stage!.getBoundingClientRect();
      data.forEach(d=>{ const t=d.el.style.transform; d.el.style.transform=""; const r=d.el.getBoundingClientRect(); d.bx=r.left+r.width/2-sr.left; d.by=r.top+r.height/2-sr.top; d.el.style.transform=t; });
    }
    measure();
    window.addEventListener("resize", measure);
    let mx=-9999, my=-9999, active=false;
    const move = (e: MouseEvent) => { const sr=stage.getBoundingClientRect(); mx=e.clientX-sr.left; my=e.clientY-sr.top; active=true; };
    const leave = () => { active=false; };
    stage.addEventListener("mousemove", move);
    stage.addEventListener("mouseleave", leave);
    let raf = 0;
    function frame(){
      data.forEach(d=>{
        let tx=0, ty=0;
        if(active){ const dx=mx-d.bx, dy=my-d.by; const dist=Math.sqrt(dx*dx+dy*dy)||1; const R=210; if(dist<R){ const f=(R-dist)/R*42; tx=-dy/dist*f; ty=dx/dist*f; } }
        d.cx+=(tx-d.cx)*0.11; d.cy+=(ty-d.cy)*0.11;
        d.el.style.transform=`translate(${d.cx.toFixed(2)}px,${d.cy.toFixed(2)}px)`;
      });
      raf=requestAnimationFrame(frame);
    }
    raf=requestAnimationFrame(frame);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize", measure); stage.removeEventListener("mousemove", move); stage.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <div className="floatcall">
      <span className="live"><span className="d"></span>LIVE · DAILY STANDUP</span>
      <div className="team-stage" ref={stageRef}>
        {NODES.map((n,i)=>(
          <div key={i} className="tc-node" style={{ position:"absolute", left:n.left, top:n.top, display:"flex", flexDirection:"column", alignItems:"center", willChange:"transform" }}>
            <div style={{ width:n.size, height:n.size, borderRadius:"50%", border:"2px solid rgba(255,255,255,.08)", backgroundColor:"#0E1626", backgroundImage:`url(${n.kind==="photo" ? n.img : "/cc-logo-blue.png"})`, backgroundSize: n.kind==="photo" ? "cover" : "58%", backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:n.dim ?? 1, boxShadow: n.size>=104 ? "0 10px 30px -6px rgba(168,85,247,.55)" : undefined, animation:"tcFloat 3.4s ease-in-out infinite", animationDelay:`${n.delay}s` }} />
            {n.name && <div style={{ fontSize: n.size>=104?13:12, fontWeight:600, marginTop: n.size>=104?9:7 }}>{n.name}</div>}
            {n.role && <div style={{ fontSize:11, color:"var(--muted-2)", marginTop:1 }}>{n.role}</div>}
          </div>
        ))}
      </div>
      <p className="team-cap">The founders, your managers &amp; the wider Clip Capital team — all one call away.</p>
    </div>
  );
}

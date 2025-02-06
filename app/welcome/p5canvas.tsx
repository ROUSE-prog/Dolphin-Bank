"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Canvas = () => {
  const sketchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sketchRef.current) return;

    const sketch = (p: p5) => {
      const MAX_TRAIL_COUNT = 30;
      let colorScheme = ["#289F34", "#074310", "#367E35", "#35EE42", "#91F099"];
      let trail: any[] = [];
      let particles: any[] = [];

      // 🟢 Define Particle Class Inside the Sketch
      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        mass: number;
        airDrag: number;
        colorIndex: number;
        life: number;
        lifeSteps: number;

        constructor(p: p5, x: number, y: number, vx: number, vy: number) {
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(vx, vy).mult(p.random(10)).rotate(p.radians(p.random(-25, 25)));
          this.mass = p.random(1, 30);
          this.airDrag = p.random(0.92, 0.98);
          this.colorIndex = Math.floor(p.random(colorScheme.length));
          this.life = 0;
          this.lifeSteps = p.random(-1, 1);
        }

        move() {
          this.pos.rotate(p.radians(this.life * 0.002));
          this.vel.mult(this.airDrag);
          this.pos.add(this.vel);
          this.life += this.lifeSteps;
        }
      }

      p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(sketchRef.current!);
        canvas.canvas.oncontextmenu = () => false;
        p.noCursor();
      };

      p.draw = () => {
        p.blendMode(p.BLEND);
        p.background(185);
        p.blendMode(p.SCREEN);

        trail.push([p.mouseX, p.mouseY]);

        let removeCount = p.mouseIsPressed && p.mouseButton === p.CENTER ? 2 : 1;
        for (let i = 0; i < removeCount; i++) {
          if (trail.length > MAX_TRAIL_COUNT) {
            trail.shift();
          }
        }

        if (trail.length > 1) {
          let mouse = p.createVector(p.mouseX, p.mouseY).sub(p.pmouseX, p.pmouseY);
          if (mouse.mag() > 5) {
            mouse.normalize();
            for (let i = 0; i < 3; i++) {
              particles.push(new Particle(p, p.pmouseX, p.pmouseY, mouse.x, mouse.y));
            }
          }
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].move();
          if (particles[i].vel.mag() < 0.1) {
            particles.splice(i, 1);
          }
        }

        p.drawingContext.shadowColor = p.color(255, 225, 255);
        for (let i = 0; i < trail.length; i++) {
          let mass = i * 1.0;
          p.drawingContext.shadowBlur = mass;
          p.stroke(0);
          p.strokeWeight(mass);
          p.point(trail[i][0], trail[i][1]);
        }

        for (let i = 0; i < particles.length; i++) {
          let pObj = particles[i];
          let mass = pObj.mass * pObj.vel.mag() * 0.6;
          p.drawingContext.shadowColor = p.color(colorScheme[pObj.colorIndex]);
          p.drawingContext.shadowBlur = mass;
          p.stroke(0);
          p.strokeWeight(mass);
          p.point(pObj.pos.x, pObj.pos.y);
          p.stroke(255);
          p.strokeWeight(mass * 0.05);
          p.point(pObj.pos.x, pObj.pos.y);
        }
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className="absolute top-0 left-0 w-full h-full"></div>;
};

export default P5Canvas;

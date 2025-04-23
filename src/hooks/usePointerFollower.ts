'use client';

import React, { useEffect, useRef } from 'react';

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

type TypeAddOns = 'tails' | string;

interface IUsePointerFollower {
  addOns?: TypeAddOns[];
}

type TypeUsePointerFollowerRet = [
  React.RefObject<HTMLDivElement>,
  {
    onMouseMove: React.MouseEventHandler<HTMLDivElement>;
    onMouseDown: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  }
];

export default function usePointerFollower({
  addOns = [],
}: IUsePointerFollower = {}): TypeUsePointerFollowerRet {
  const polylineRef = useRef<SVGPolylineElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);
  const isMouseDownRef = useRef(false);


  // ? Default
  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = () => {
    if (pointerRef.current) {
      isMouseDownRef.current = true;
      const transform = pointerRef.current.style.transform;
      if (transform.indexOf('scale(1)') > -1) {
        pointerRef.current.style.transform = 'translate(-50%, -50%) scale(1.6)';
      }
    }
  };

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    if (pointerRef.current) {
      isMouseDownRef.current = false;
      pointerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  const onMouseEnter = () => {
    if (pointerRef.current) {
      pointerRef.current.style.display = 'block';
    }
  };

  const onMouseLeave = () => {
    if (pointerRef.current) {
      pointerRef.current.style.display = 'none';
    }
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    x = e.pageX;
    y = e.pageY;
  };

  const pointFollower = () => {
    targetX += (x - targetX) * speed
    targetY += (y - targetY) * speed

    if (pointerRef.current) {
      pointerRef.current.style.top = `${targetY}px`
      pointerRef.current.style.left = `${targetX}px`

      if (pointerRef.current.style.display !== 'none') {
        const el = document.elementFromPoint(targetX, targetY);
        if (parseFloat(targetX.toFixed(0)) !== x || parseFloat(targetY.toFixed(0)) !== y) {
          const hasVisibleText = el && el.getAttribute('class') && el.getAttribute('class')!.indexOf('focus') > -1;
          pointerRef.current.style.transform = `translate(-50%, -50%) scale(${hasVisibleText ? 3 : isMouseDownRef.current ? 1.6 : 1})`;
        }
      }
      requestRef.current = requestAnimationFrame(pointFollower)
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(pointFollower)

    return () => cancelAnimationFrame(requestRef.current)
  }, [pointFollower]);
  
  return [pointerRef, {
    onMouseMove,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave
  }];
}

// var polyline = document.querySelector('.drawing_line_polyline');
// var polyPoints = polyline.getAttribute('points');
// var circle = document.querySelector('.drawing_line_circle');
// var circleX = circle.getAttribute('cx');
// var circleY = circle.getAttribute('cy');
// var circleR = circle.getAttribute('r');

// var total = 9;
// var gap = 30;
// var ease = 0.1;
// var debounce_removeLine;
// var debounce_counter = 0;

// var pointer = {
// 	x: window.innerWidth / 2,
// 	y: window.innerHeight / 2,
// 	tx: 0,
// 	ty: 0,
// 	dist: 0,
// 	scale: 1,
// 	speed: 2,
// 	circRadius: 8,
// 	updateCrds: function () {
// 		if (this.x != 0) {
// 			this.dist = Math.abs((this.x - this.tx) + (this.y - this.ty));
// 			this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25); // gt 0.25 = 4px
// 			this.tx += (this.x - this.tx) / this.speed;
// 			this.ty += (this.y - this.ty) / this.speed;
// 		}
// 	}
// };

// var points = [];

// $(window).on('mousemove', function (e) {
// 	pointer.x = e.clientX;
// 	pointer.y = e.clientY;
// 	debounce_counter = 0;
// 	drawLine();

// 	// debounce
// 	clearTimeout(debounce_removeLine);
// 	debounce_removeLine = setTimeout(() => {
// 		//console.log('debounce_removeLine', new Date().getTime());
// 		debounce_counter = 12;
// 		drawLine();
// 	}, 80);
// })

// $(window).on('mousedown', function (e) {
// 	pointer.circRadius = 6;
// 	drawLine();
// });

// $(window).on('mouseup', function (e) {
// 	pointer.circRadius = 8;
// 	drawLine();
// });

// function drawLine() {
// 	pointer.updateCrds();

// 	points.push({
// 		x: pointer.tx,
// 		y: pointer.ty
// 	});
// 	while (points.length > total) {
// 		points.shift();
// 		if (points.length > gap) {
// 			for (var i = 0; i < 5; i++) {
// 				points.shift();
// 			}
// 		}
// 	}
// 	var pointsArr = points.map(point => `${point.x},${point.y}`);
// 	polyPoints = pointsArr.join(' ');
// 	polyline.setAttribute('points', polyPoints);

// // 	// circle
// 	circleX = pointer.x;
// 	circleY = pointer.y;
// 	circleR = pointer.scale * pointer.circRadius;

// 	circle.setAttribute('cx', circleX);
// 	circle.setAttribute('cy', circleY);
// 	circle.setAttribute('r', circleR);

// 	if (debounce_counter > 0) {
// 		debounce_counter--;
// 		requestAnimationFrame(drawLine);
// 	}
// }
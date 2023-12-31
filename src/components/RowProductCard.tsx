
"use client";
import React, { useRef, useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  color: string;
  weightGSM: number;
  width: number;
  composition: string;
  code: string;
  manufacturingTime: string;
  stock: number;
  image: string;
};

type RowProductCardProps = {
  title: string;
  products: Product[];
};
// ... (previous imports)
// ... (previous imports)

export const RowProductCard: React.FC<RowProductCardProps> = ({ title, products }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAutoScrolling, setAutoScrolling] = useState(true);
  
    useEffect(() => {
      const container = containerRef.current;
  
      if (container) {
        let animationFrameId: number;
  
        const scroll = () => {
          if (isAutoScrolling) {
            container.scrollLeft += 1;
  
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
              container.scrollLeft = 0;
            }
  
            animationFrameId = requestAnimationFrame(scroll);
          }
        };
  
        // Start the scrolling animation
        animationFrameId = requestAnimationFrame(scroll);
  
        // Clear animation frame on component unmount
        return () => cancelAnimationFrame(animationFrameId);
      }
    }, [isAutoScrolling]);
  
    const handleProductClick = () => {
      setAutoScrolling(false);
    };
  
    const handleManualScroll = (direction: 'left' | 'right') => {
      const container = containerRef.current;
  
      if (container) {
        const scrollAmount = 100; // Adjust the scroll amount as needed
  
        if (direction === 'left') {
          container.scrollLeft -= scrollAmount;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    };
  
    return (
      <div className="overflow-hidden">
        <Card className="w-10/12 mx-auto my-9 flex flex-col">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="flex justify-between">
              <div className="flex md:gap-6">
                {/* Add any additional components or content here */}
              </div>
              <div className="flex items-center">
                <button onClick={() => handleManualScroll('left')}>&lt;</button>
                <button onClick={() => handleManualScroll('right')}>&gt;</button>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent
            className="overflow-auto flex-grow"
            ref={containerRef}
            style={{ overflowX: 'hidden' }}
            onMouseDown={() => setAutoScrolling(false)} // Stop auto-scrolling on manual scroll
          >
            <div className="flex space-x-4">
              {products.map((product) => (
                <div key={product.id} className="flex-none w-64 p-4" onClick={handleProductClick}>
                  <h2 className="text-md mb-2">{product.name}</h2>
                  <img src={product.image} alt={product.name} className="mb-2 max-w-full h-auto" />
                  {/* Add more product details or actions as needed */}
                </div>
              ))}
            </div>
          </CardContent>
          {/* No need for CardFooter in a row layout */}
        </Card>
      </div>
    );
  };
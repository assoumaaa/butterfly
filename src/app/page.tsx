


import { RowProductCard } from "@/components/row-products-card";
import { products } from "../../public/products";

export default function Home() {
  return (
    <main>
      <RowProductCard title="Best Sellers" products={products} />
      <RowProductCard title="Jaquard Collection" products={products} />
      <RowProductCard title="Winter Collection" products={products} />
      <RowProductCard title="Summer Collection" products={products} />
    </main>
  );
}
// OdooTestPage.js


import React, { useEffect, useState } from 'react';
import { fetchOdooData } from '@/components/oodo'; // Adjust the import path based on your project structure
// OdooTestPage.js

import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';


interface OdooData {

  // Define the structure of your Odoo data here
}

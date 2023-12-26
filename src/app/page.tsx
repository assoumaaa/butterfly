import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    const availableColors = ['red', 'green', 'blue']; // Add your available colors here

  return (
    <div>
      <header className="navbar">
        <a href="#" className="active">
          Home
        </a>
        {/* Add more navigation links as needed */}
      </header>

      <main>
        <div>
          <h1>Product Page</h1>
          <ModeToggle />
        </div>

        <div className="product-container">
          {/* Product 1 */}
          <div className="product">
            <img src="/images/fab.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product">
            <img src="/images/fab2.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product">
            <img src="/images/fab3.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product">
            <img src="/images/fab4.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product">
            <img src="/images/fab5.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product">
            <img src="/images/fab6.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="product">
            <img src="/images/fab2.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>



          {/* Product 2 */}
          <div className="product">
            <img src="/images/fab.jpeg" alt="Product" />
            <h2>Jacquard Stripes</h2>
            <p>Weight: 280 gsm</p>
            <p>Width: 160 cm</p>
            <p>Available colors:</p>
            <div className="color-circle-container">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Add more products by repeating the structure */}
        </div>
      </main>
    </div>
  );
}
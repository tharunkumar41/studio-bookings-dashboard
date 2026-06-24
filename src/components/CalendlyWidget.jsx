import { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://assets.calendly.com/assets/external/widget.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="widget-container">
      <h2>Real Studio Scheduling (Bonus)</h2>

      <p>
        Schedule a real appointment using Calendly.
      </p>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/vk7695020/30min"
        style={{
          minWidth: "320px",
          height: "700px",
        }}
      />
    </div>
  );
}


export default CalendlyWidget;
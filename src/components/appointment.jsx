import React, { useEffect } from "react";

export const Appointment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div id="appointment-header">
        <div className="container">
          <div className="section-title text-center">
            <h2>Book Your Appointment</h2>
            <p>Schedule your 30-minute nutrition consultation with Keerthana Anumolu</p>
          </div>
        </div>
      </div>

      {/* Calendly Section */}
      <div id="appointment-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="appointment-wrapper">
                <div className="calendly-inline-widget"
                     data-url="https://calendly.com/keerthana-dietello/30min"
                     style={{ minWidth: '320px', height: '700px' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div id="appointment-info">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="info-content text-center">
                <h3>What to Expect</h3>
                <ul>
                  <li>Personalized nutrition assessment</li>
                  <li>Diet plan recommendations</li>
                  <li>Health and wellness guidance</li>
                  <li>Q&A session</li>
                </ul>
                <p>If you need to reschedule or have questions, please contact us through the contact page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
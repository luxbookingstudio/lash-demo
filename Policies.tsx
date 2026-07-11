export default function Policies() {
  return (
    <section className="policies">
      <p className="sectionTag">BOOKING INFORMATION</p>

      <h2>Deposits & Policies</h2>

      <div className="policyGrid">
        <div className="policyCard">
          <h3>Deposit Required</h3>
          <p>
            A deposit may be required to secure your appointment and will be
            deducted from your final balance.
          </p>
        </div>

        <div className="policyCard">
          <h3>24-Hour Cancellation</h3>
          <p>
            Please give at least 24 hours notice if you need to cancel or
            reschedule.
          </p>
        </div>

        <div className="policyCard">
          <h3>Clean Lashes</h3>
          <p>
            Please arrive with clean lashes, free from makeup, oils and strip
            lash glue.
          </p>
        </div>

        <div className="policyCard">
          <h3>Late Policy</h3>
          <p>
            Arrivals over 10 minutes late may need to be rescheduled depending
            on availability.
          </p>
        </div>
      </div>
    </section>
  );
}

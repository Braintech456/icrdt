import Verify from '../components/Verify';
import AffiliationStrip from '../components/AffiliationStrip';

export default function VerifyPage() {
  return (
    <div className="bg-white">
      {/* Institutional Affiliation Strip */}
      <AffiliationStrip />

      {/* Main Verification System */}
      <Verify />
    </div>
  );
}
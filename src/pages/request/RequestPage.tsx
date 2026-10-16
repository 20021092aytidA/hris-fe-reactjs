export default function RequestPage() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          {/* REQUEST PREVIEW */}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8">
          {/* TABLE OF REQUESTS */}
          <table>
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

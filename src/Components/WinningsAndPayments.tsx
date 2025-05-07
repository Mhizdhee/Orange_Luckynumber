import React from "react";

const WinningsAndPayments: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Gains et paiements
      </h1>

      {/* <p className="mb-8 text-lg text-center max-w-2xl mx-auto">
        Find below the details of winnings based on number of matched digits and
        the respective prize amounts per subscription package.
      </p> */}

      <div className="overflow-x-auto w-full mt-10">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th colSpan={1} className="py-2 px-4 border"></th>
              <th
                colSpan={1}
                className="text-center px-4 py-1 border text-sm font-semibold"
              >
                Souscription de 250F
              </th>
              <th
                colSpan={1}
                className="text-center px-4 py-1 border text-sm font-semibold"
              >
                Souscription de 100F
              </th>
              <th
                colSpan={1}
                className="text-center px-4 py-1 border text-sm font-semibold"
              >
                Souscription de 50F
              </th>
              <th colSpan={1} className="py-2 px-4 border"></th>
            </tr>

            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-centertext-sm whitespace-nowrap">
                Correspondances
              </th>
              <th className="px-4 py-2 border text-sm text-enter">
                Cagnotte 250F
              </th>
              <th className="px-4 py-2 border text-sm text-center">
                Cagnotte 100F
              </th>
              <th className="px-4 py-2 border text-sm text-center">
                Cagnotte 50F
              </th>
              <th className="px-4 py-2 border text-sm text-center">
                Type de prix
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">8</td>
              <td className="px-4 py-2 border text-sm text-center">
                1,000,000
              </td>
              <td className="px-4 py-2 border text-sm text-center">500,000</td>
              <td className="px-4 py-2 border text-sm text-center">250,000</td>
              <td className="px-4 py-2 border text-sm text-center">Cash</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">7</td>
              <td className="px-4 py-2 border text-sm text-center">200,000</td>
              <td className="px-4 py-2 border text-sm text-center">100,000</td>
              <td className="px-4 py-2 border text-sm text-center">50,000</td>
              <td className="px-4 py-2 border text-sm text-center">Cash</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">6</td>
              <td className="px-4 py-2 border text-sm text-center">75,000</td>
              <td className="px-4 py-2 border text-sm text-center">50,000</td>
              <td className="px-4 py-2 border text-sm text-center">25,000</td>
              <td className="px-4 py-2 border text-sm text-center">Cash</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">5</td>
              <td className="px-4 py-2 border text-sm text-center">15,000</td>
              <td className="px-4 py-2 border text-sm text-center">10,000</td>
              <td className="px-4 py-2 border text-sm text-center">5,000</td>
              <td className="px-4 py-2 border text-sm text-center ">Cash</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">4</td>
              <td className="px-4 py-2 border text-sm text-center">4,000</td>
              <td className="px-4 py-2 border text-sm text-center">2,000</td>
              <td className="px-4 py-2 border text-sm text-center">700</td>
              <td className="px-4 py-2 border text-sm text-center">
                Cash/Credit De Communication
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border text-sm text-center">3</td>
              <td className="px-4 py-2 border text-sm text-center">700</td>
              <td className="px-4 py-2 border text-sm text-center">5000</td>
              <td className="px-4 py-2 border text-sm text-center">300</td>
              <td className="px-4 py-2 border text-sm text-center">
                Cash/Credit De Communication
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinningsAndPayments;

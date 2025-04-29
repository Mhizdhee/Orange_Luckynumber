import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto text-justify text-sm md:text-base leading-6">
      <div className="border flex flex-col items-center ">
        <h1 className="text-2xl font-bold text-center my-6">
          REGLEMENT PARTICULIER DU JEU
        </h1>
        <h3 className="text-xl font-bold text-center mb-4">« NUMERO D’OR »</h3>
      </div>
      <div className="space-y-4">
        <h4 className="text-md font-semibold mt-10 underline ">
          ARTICLE 1er : DENOMINATION ET PRINCIPE DU JEU
        </h4>
        <p className="">
          ORANGE CI et la LONACI décident du lancement du service dénommé «
          NUMERO D’OR ».
        </p>
        <p>
          Ce jeu a pour but d’accompagner et de récompenser la fidélité des
          abonnés.
        </p>
        <p>
          NUMERO D’OR est un jeu qui donne à l'utilisateur la chance de gagner
          de l'argent par ORANGE Money et du crédit de communication après un
          tirage au sort quotidien d’un numéro mobile ORANGE.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-6 underline">
          ARTICLE 2 : CIBLE DU JEU « NUMERO D’OR »
        </h2>
        <p>
          Sont habilités à participer à ce service sur l’ensemble du territoire
          ivoirien, et conformément aux conditions précédemment mentionnées, les
          abonnés GSM personnes physiques prépayés de ORANGE CI.
        </p>
        <p>
          Dans le cas d’un abonnement souscrit par une entreprise, le gagnant
          sera la personne physique utilisatrice de la carte SIM.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-6 underline">
          {" "}
          ARTICLE 3 : INTERDICTIONS.
        </h2>
        <p>
          Les personnes suivantes sont exclues de la liste des potentiels
          gagnants :
        </p>
        <ul className="list-disc">
          <li>
            Le Personnel de ORANGE CI ainsi que de la LONACI et de leurs
            filiales et les membres de leurs familles (conjoint, père, mère,
            enfants) ;
          </li>
          <li>
            Les personnes qui entretiennent des relations commerciales en tant
            qu’intermédiaires et/ ou chargés de distribution avec ORANGE CI, la
            LONACI ou qui en dépendent ainsi que les membres de leurs familles
            (conjoint, père, mère, enfants) ;
          </li>
          <li>
            Les entreprises sollicitées par ORANGE CI et la LONACI pour la
            réalisation du présent jeu, leurs employés et les membres de leurs
            familles (conjoint, père, mère, enfants) ;
          </li>
          <li>
            Le Personnel de l’Etude du Commissaire de Justice instrumentaire,
            les membres de leur famille (conjoint, père, mère, enfants) ;
          </li>
          <li>Les clients des autres opérateurs mobiles.</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-6 underline">
          ARTICLE 4 : PERIODE DE LANCEMENT ET DUREE DU JEU
        </h2>
        <p>
          Le jeu se déroulera du 01 mai 2025 de 00 heure 00 minute 01 seconde
          conformément à arrêté relatif
        </p>
        <p>à l'organisation du jeu dénomme « numéro d’or »</p>
        <p>
          Toutefois, ORANGE CI et La LONACI se réservent le droit de proroger,
          d’écourter, de modifier ou d’annuler la durée en cas de force majeure
          ou d’évènements indépendants de leur volonté.
        </p>
        <p>
          Dans ce cas de figure, elles en informeront les autorités compétentes,
          par tout moyen.
        </p>
      </div>
      <div className="space-y-4">
        {" "}
        <h2 className="text-md font-semibold mt-6 underline">
          ARTICLE 5 : MECANISMES DU JEU
        </h2>
        <h4 className="font-semibold text-[15px]">5.1 PARTICIPATION</h4>
        <p>
          Le jeu consiste à s’abonner préalablement par USSD en composant *590#
          ou par SMS en envoyant le mot clé du pack de son choix à un numéro
          court dédié au service.
        </p>
        <ul className="list-disc ml-8">
          <li>
            Soit NO1 par sms au 7717 pour le pack de cinquante (50) FCFA valable
            vingt-quatre (24) heures, renouvelable automatiquement
          </li>
          <li>
            Soit NO2 par sms au 7717 pour le pack de cent (100) FCFA valable
            vingt-quatre (24) heures, renouvelable automatiquement
          </li>
          <li>
            Soit NO3 par sms au 7717 pour le pack de deux cent cinquante (250)
            FCFA valable vingt-quatre (24) heures, renouvelable automatiquement
          </li>
        </ul>
        <p>Un participant peut souscrire à plus d’un pack.</p>
        <p>
          Une fois les frais quotidiens acquittés, les participants recevront un
          message de confirmation de facturation,
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-md font-semibold mt-10">
          Chaque jour à 08 heures aura lieu le tirage au sort du jeu de la
          veille pendant lequel un numéro ORANGE faisant partie de la base
          d’abonnés de ORANGE sera tiré au sort en présence d’un huissier de
          justice.
        </h3>
        <p>
          A partir de ce numéro ORANGE tiré au sort, un Matching sera fait avec
          les numéros des abonnés actifs du service NUMERO D’OR ayant
          effectivement été facturés pour le jour (de 00H00 à 23H59) concerné
          par le tirage.
        </p>
        <p className="mt-10">
          Les SMS envoyés aux participants à partir du numéro 7717 comme
          messages promotionnels relatifs au jeu, ne seront pas facturés.
        </p>
      </div>
      <div className="space-y-4">
        {" "}
        <h2 className="text-md font-semibold mt-6 ">
          5.2 MODALITES DE DESACTIVATION ET DE REACTIVATION DU JEU
        </h2>
        <p>
          Pendant le jeu, les participants recevront les messages promotionnels
          d’information appelés PUSH (ou relances).
        </p>
        <p>
          Si un participant souhaite ne plus recevoir de messages promotionnels
          ni participer au jeu, il pourra envoyer les mots clé STOP NO1, STOP
          NO2, STOP NO3 au numéro court 7717, dont les envois de messages sont
          gratuits.
        </p>
        <p>
          En retour, il recevra un SMS confirmant que son numéro de téléphone a
          été exclu du jeu.
        </p>
        <p>
          Le participant pourra également appeler le centre d’appels au 555 afin
          de demander à être désinscrit du jeu.
        </p>
        <p>
          Pour réactiver sa participation au jeu, le participant devra envoyer
          de nouveau, les mots clé NO1, NO2, NO3 par SMS au 7717 ou composer
          *590*4#. Il sera alors réactivé et réintégré au jeu en recevant
          messages PUSH.
        </p>
      </div>
      <div className="space-y-4">
        {" "}
        <h2 className="text-md font-semibold mt-6 ">
          ARTICLE 6 : DETERMINATION DES GAGNANTS
        </h2>
        <h4 className="font-semibold">
          Chaque jour à 08 heures aura lieu le tirage au sort du jeu de la
          veille pendant lequel un numéro ORANGE faisant partie de la base
          d’abonnés de ORANGE ayant été facturé pour le jeu, sera tiré au sort
          via la plateforme du jeu. l’huissier de justice recevra en temps réel
          les résultats.
        </h4>
        <p>
          A partir de ce numéro ORANGE tiré au sort, un Matching sera fait avec
          les numéros des abonnés actifs du service NUMERO D’OR ayant
          effectivement été facturés pour le jour (de 00H00 à 23H59) concerné
          par le tirage.
        </p>
        <p>
          En cas de refus d’un gagnant de gros lot d’assister à la cérémonie de
          remise, Orange CI s’abstiendra de remettre et le lot et il ce dernier
          sera conservé par les organisateurs du jeu.
        </p>
        <p className="mt-8">
          Plus, il y a de chiffres correspondants, plus le lot remporté sera
          élevé. Les lots seront déterminés en fonction du nombre de chiffres
          correspondant au numéro de téléphone tiré au sort de la droite vers la
          gauche.
        </p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 mt-10">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">
                  Correspondance séquentielle
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  MSISDN
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nombre maximum de Gagnants
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  8 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  7 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  10
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  6 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  55
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  5 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  220
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  4 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  715
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  3 Chiffres correspondants
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  07<span className="text-red-500">01234567</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  2002
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-10 ">
          6.1. GAGNANTS INJOIGNABLES OU RENONCIATEUR
        </h2>
        <p>
          Dans le cas où le gagnant ne peut être joint au bout de 07 jours, ou
          refuse d’accepter ou ne peut recevoir le prix, ORANGE CI et la LONACI,
          se réservent le droit de sélectionner un autre numéro dans le
          classement, comme remplaçant.
        </p>
        <p>
          Il est permis à un participant d’utiliser au cours du jeu, plusieurs
          cartes SIM, dûment identifiées en ses noms et prénoms. Celui-ci pourra
          être sélectionné plusieurs fois comme gagnant sur la base de ses
          différents numéros de carte SIM (MSISDN).
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-6 underline">
          ARTICLE 7 : LES LOTS
        </h2>
        <p>Les gagnants se répartiront les lots mentionnés ci-dessous :</p>
        <div className="overflow-x-auto w-full xl:overflow-x-visible">
          <table className="min-w-full table-auto  mt-10 ">
            <thead>
              <tr>
                <th className="border-transparent px-4 py-2" colSpan={4}></th>
                <th className="border px-4 py-2 text-center" colSpan={3}>
                  LOTS/ABONNEMENT
                </th>
              </tr>

              <tr>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Correspondance séquentielle
                </th>
                <th className="border px-4 py-2 text-left">
                  MSISDN (Numéro de téléphone)
                </th>
                <th className="border px-4 py-2 text-left">
                  Nombre maximum Gagnants
                </th>
                <th className="border px-4 py-2 text-left">Nature des lots</th>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Pack 50 FCFA
                </th>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Pack 100 FCFA
                </th>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Pack 250 FCFA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">8 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  0701<span className="text-red-500">234567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">1</td>
                <td className="border px-4 py-2">Cash</td>
                <td className="border px-4 py-2 text-right">250 000</td>
                <td className="border px-4 py-2 text-right">500 000</td>
                <td className="border px-4 py-2 text-right">1 000 000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  0701<span className="text-red-500">234567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">9</td>
                <td className="border px-4 py-2">Cash</td>
                <td className="border px-4 py-2 text-right">50 000</td>
                <td className="border px-4 py-2 text-right">100 000</td>
                <td className="border px-4 py-2 text-right">200 000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  0701<span className="text-red-500 ">234567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">45</td>
                <td className="border px-4 py-2">Cash</td>
                <td className="border px-4 py-2 text-right">25 000</td>
                <td className="border px-4 py-2 text-right">50 000</td>
                <td className="border px-4 py-2 text-right">75 000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  07012<span className="text-red-500 ">34567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">
                  165
                </td>
                <td className="border px-4 py-2">Cash</td>
                <td className="border px-4 py-2 text-right">5 000</td>
                <td className="border px-4 py-2 text-right">10 000</td>
                <td className="border px-4 py-2 text-right">15 000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  070123<span className="text-red-500 ">4567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">
                  495
                </td>
                <td className="border px-4 py-2">Airtime</td>
                <td className="border px-4 py-2 text-right">700</td>
                <td className="border px-4 py-2 text-right">2 000</td>
                <td className="border px-4 py-2 text-right"> 4 000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3 Chiffres correspondants</td>
                <td className="border  px-4 py-2 font-semibold">
                  0701234<span className="text-red-500">567</span>
                </td>
                <td className="border px-4 py-2 font-medium text-center">
                  1287
                </td>
                <td className="border px-4 py-2">Airtime</td>
                <td className="border px-4 py-2 text-right">300</td>
                <td className="border px-4 py-2 text-right">500</td>
                <td className="border px-4 py-2 text-right">700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-20">
          ARTICLE 8 : REMISE DU SUPER LOT
        </h2>
        <p>
          Après la désignation des gagnants, leurs noms, prénoms et adresse
          seront disponibles sur une interface web réservée aux directions
          Marketing de ORANGE CI et de la LONACI.
        </p>
        <p>
          A cet effet, les gagnants autorisent ORANGE CI et les organisateurs du
          jeu à reproduire et à utiliser leurs noms et prénoms et autres
          informations, aussi bien que leur image, au cours de toute activité
          promotionnelle publique relative au jeu pour lequel ils ont été
          désignés gagnants.
        </p>
        <p>
          Les gagnants des gros lots (c’est-à-dire 250.000, 500.000 et 1.000.000
          FCFA) seront invités à se présenter à la direction marketing de ORANGE
          CI, pour des éventuelles formalités administratives. Ils devront être
          munis de leur Carte Nationale d’Identité, leur Passeport ou tout
          document d’identité valide, et de la carte SIM leur ayant permis de
          participer au jeu.
        </p>
        <p>
          En cas de refus d’un gagnant de gros lot d’assister à la cérémonie de
          remise, ORANGE CI déterminera un autre gagnant.
        </p>
        <p>
          Aucune compensation ne sera donnée aux gagnants qui ne se présenteront
          dans les locaux de la direction marketing de ORANGE CI, un mois après
          la fin du jeu...
        </p>
        Une exception sera faite pour les gagnants qui auront adressé une
        demande de retrait différé de leurs lots, dans un délai maximal de trois
        (3) mois.
      </div>
      <div className="space-y-4">
        <h2 className="text-md font-semibold mt-6 ">
          ARTICLE 9 : MODIFICATION DU RÈGLEMENT
        </h2>
        <p>
          ORANGE CI et la LONACI se réservent le droit de supprimer, suspendre
          ou modifier le présent règlement aussi bien que l’organisation et/ ou
          la gestion du jeu, sans droits de compensation et sans l’obligation de
          donner un préavis, de telles modifications étant portées à l’attention
          du public et insérées au présent règlement par un acte additionnel.
        </p>
      </div>
      <div className="mt-30 flex items-center justify-end">
        <p className="italic">Fait à Abidjan, le 26 avril 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

import React from 'react'
import HelpCss from './Css/Help.module.css'

function Help() {
  return (
    <html>
    <head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </link>        <script src="https://kit.fontawesome.com/1ee23388a8.js" crossorigin="anonymous"></script>
    </head>
    <body>
    
    <div className={HelpCss.smallDef}>
      
      <h2 className={HelpCss.AboutUsTitre}><i class="fa fa-solid fa-arrow-right"></i> About Us :</h2>
      <p className={HelpCss.about}>
      <i class="fas fa-gamepad"></i>4GAMERS entreprise propose des offres adaptées au milieu professionnel. Que vous soyez une entreprise, startup, une collectivité, une association ou une administration, Bénéficiez d'un accompagnement personnalisé et de solutions adaptées à vos projets : biens d'équipements consommables, achats volumiques, devis...etc.
      </p>
      <h2 className={HelpCss.NosOffretitre}><i class="fa fa-solid fa-arrow-right"></i>Nos Offres :</h2>
      <h3 className={HelpCss.offre}>Avec 4GAMERS entreprise vous disposez :</h3>
      <ul>
      <li>D’un conseiller commercial couvrant 99% de vos besoins</li>
      <li>Les meilleurs prix du marché</li>
      <li>Des offres événementielles personnalisées</li>
      <li>Devis rapide et personnalisé</li>
      </ul>
      <h2 className={HelpCss.savTitre}>
      <i class="fa fa-solid fa-arrow-right"></i>Service Apres Ventes :
      </h2>
      <p className={HelpCss.paragSAV}>
      Le service après-vente de notre société, se charge du suivi de la marchandise après son achat par le client. Si besoin, il assure l’entretien, la réparation ou l’échange d’un produit vendu par MyTek.

La garantie 4GAMERS ne couvre pas toute mauvaise manipulation (trace de liquide, casses, réparations à l’extérieur, rayures, inversement de fils, problème système informatique ou mauvaise programmation d’afficheurs, les consommables compatibles…)

Les produits achetés sur notre site : www.4GAMERS.tn bénéficient de la garantie constructeur indiquée sur la fiche produit ou dans la notice jointe avec l'appareil.

Les garanties constructeur peuvent être d’une durée et d’une étendue variable.

Cependant, selon la marque du produit, certains constructeurs ne prennent en charge que les pièces de rechange.

En cas de panne pendant la période de garantie initiale :

Le client doit se présenter à notre SAV avec la facture d’achat pour déclarer la panne et faire une demande d’intervention.

Les réparations seront assurées gratuitement par les agences techniques agrées par les constructeurs.

S'il n'est pas possible de réparer le produit dans le cadre de l'exécution de la garantie constructeur, un échange ou un avoir tenant compte de la vétusté du produit vous sera proposé.

Pour pouvoir bénéficier de la garantie des produits, il vous est demandé de conserver la facture d'achat. 4GAMERS ne pourra en revanche être responsable en cas de refus du constructeur d'appliquer la garantie suite à une mauvaise manipulation, ou toute cause étrangère non couverte par les conditions de garantie du fabricant.

Les exclusions de garantie :

-L’intervention ou le dépannage effectué par des personnes non agrées  4GAMERS

-Les dommages imputables à des causes d’origine externe à l’appareil garantie : vol, chute, inondation, incendie…

-Les dommages résultant d’une utilisation non conforme aux prescriptions du constructeur ou d’un défaut d’entretien ou de nettoyage.
      </p>
      
    </div>
    </body>
    </html>
  )
}

export default Help

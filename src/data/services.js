import {SiFsecure} from 'react-icons/si'
import {FaCarAlt} from 'react-icons/fa'
import {GiChemicalDrop} from 'react-icons/gi'
import {AiFillFire} from 'react-icons/ai'
import { BsStarHalf} from 'react-icons/bs'
export const services = [
    {
        title: 'Protection',
        img: (<SiFsecure />),
        desc: "Un véhicule protégé est un véhicule paré aux agressions extérieures et dont l’entretien s’en trouve facilité !"
    },
    {
        title: 'Intérieur',
        img: (<FaCarAlt/>),
        desc: "Quoi de plus agréable pour l’automobiliste de monter dans une auto avec un intérieur impeccable, présentant comme un véhicule neuf?"
    },
    {
        title: 'Traitement Céramique',
        img: (<GiChemicalDrop/>),
        desc: "Un traitement d’exception pour protéger au mieux votre auto. Formule réservée aux véhicules neufs (VN) ou aux occasions très récentes ne nécessitant pas de polissage de correction."
    },
    {
        title: 'Cuir',
        img: (<AiFillFire/>),
        desc: "La réfection/rénovation des cuirs (et des simili-cuirs) s’avère bien souvent une solution suffisante pour remédier à ces défauts à moindre coût avec une réparation durable."
    },
    {
        title: 'Correction / Rénovation',
        img: (<BsStarHalf/>),
        desc: "La phase de correction des défauts est l’élément phare d’une rénovation automobile en polissant les micro-rayures et autres défauts présents sur la carrosserie."
    },
]
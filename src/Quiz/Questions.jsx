export const Questions = [
  // Question 1
  {
    id: 1,
    qs: "Quel est le rôle principal de Redux dans une application ?",
    options: [
      "Gérer les routes",
      "Gérer l'état de l'application",
      "Améliorer la performance des composants",
      "Déboguer les erreurs",
    ],
    answer: "Gérer l'état de l'application",
  },
  // Question 2
  {
    id: 2,
    qs: "Quel est l'avantage du flux unidirectionnel dans Redux ?",
    options: [
      "Les données circulent librement dans toutes les directions",
      "Il simplifie le suivi des changements de données",
      "Il nécessite moins de code",
      "Il n'utilise pas de State",
    ],
    answer: "Il simplifie le suivi des changements de données",
  },
  // Question 3
  {
    id: 3,
    qs:
      "Quelle est la différence principale entre le State local (React) et le State global (Redux) ?",
    options: [
      "Le State local est partagé entre tous les composants",
      "Le State global est accessible par toute l'application",
      "Le State local est utilisé uniquement avec les hooks",
      "Ils sont identiques dans leur fonctionnement",
    ],
    answer: "Le State global est accessible par toute l'application",
  },
  // Question 4
  {
    id: 4,
    qs: "Quelle est la fonction principale des Actions dans Redux ?",
    options: [
      "Décrire les changements souhaités dans le State",
      "Modifier directement le DOM",
      "Remplacer les Reducers",
      "Stocker les données dans le State",
    ],
    answer: "Décrire les changements souhaités dans le State",
  },
  // Question 5
  {
    id: 5,
    qs: "Quel est le rôle du payload dans une Action ?",
    options: [
      "Décrire les types d'Actions",
      "Transmettre des données nécessaires à l'Action ou au Reducer",
      "Remplacer le State",
      "Déboguer les Reducers",
    ],
    answer: "Transmettre des données nécessaires à l'Action ou au Reducer",
  },
  // Question 6
  {
    id: 6,
    qs: "Quelle propriété essentielle doit toujours être présente dans une Action ?",
    options: [
      "Type",
      "State",
      "Reducer",
      "Provider",
    ],
    answer: "Type",
  },
  // Question 7
  {
    id: 7,
    qs: " Pourquoi dit-on qu'un Reducer est une fonction pure ?",
    options: [
      "Parce qu'il ne modifie pas directement le State existant",
      "Parce qu'il est utilisé uniquement avec les composants fonctionnels",
      "Parce qu'il retourne toujours un tableau",
      "Parce qu'il fonctionne sans Actions",
    ],
    answer: "Parce qu'il ne modifie pas directement le State existant",
  },
  // Question 8
  {
    id: 8,
    qs: "Que se passe-t-il lorsque plusieurs Reducers sont combinés avec combineReducers ?",
    options: [
      "Tous les Reducers sont remplacés par un seul Reducer global",
      "Les Reducers sont organisés pour gérer des parties spécifiques du State",
      "Le flux unidirectionnel est modifié",
      "Les Reducers sont connectés directement au DOM",
    ],
    answer: "Les Reducers sont organisés pour gérer des parties spécifiques du State",
  },
  // Question 9
  {
    id: 9,
    qs: "Quelle est la fonction du Store dans Redux ?",
    options: [
      "Gérer les composants React",
      "Stocker et centraliser le State de l'application",
      "Créer des Reducers dynamiques",
      "Déboguer les hooks Redux",
    ],
    answer: "Stocker et centraliser le State de l'application",
  },
  // Question 10
  {
    id: 10,
    qs: "Comment intègre-t-on le Store Redux dans une application React ?",
    options: [
      "Avec le composant Provider",
      "Avec la méthode connect()",
      "Aver useSelector()",
      "Avec createStore uniquement",
    ],
    answer: "Avec le composant Provider",
  },
  // Question 11
  {
    id: 11,
    qs: "Lorsqu'une Action est dispatchée, quel élément est activé en premier ?",
    options: [
      "Le State",
      "Le Reducer",
      "Le Store",
      "Le Provider",
    ],
    answer: "Le Reducer",
  },
  // Question 12
  {
    id: 12,
    qs: "Quelle fonction est utilisée pour connecter Redux à React dans la méthode classique ?",
    options: [
      "useDispatch()",
      "connect()",
      "useStore",
      "createProvider",
    ],
    answer: "connect()",
  },
  // Question 13
  {
    id: 13,
    qs: "Quelle est la différence entre mapStateToProps et mapDispatchToProps ?",
    options: [
      "mapStateToProps connecte les Reducers, et mapDispatchToProps connecte les Actions",
      "mapStateToProps fournit le State, et mapDispatchToProps fournit les Actions",
      "Ils effectuent la même tâche",
      "Aucun des deux n'est utilisé dans Redux",
    ],
    answer: "mapStateToProps fournit le State, et mapDispatchToProps fournit les Actions",
  },
  // Question 14
  {
    id: 14,
    qs: " Quel hook Redux est utilisé pour accéder aux données du State global ?",
    options: [
      "useState()",
      "useReducer()",
      "useSelector()",
      "useStore()",
    ],
    answer: "useSelector()",
  },
  // Question 15
  {
    id: 15,
    qs: "Pourquoi les hooks Redux sont-ils préférés par rapport à la méthode classique ?",
    options: [
      "Ils consomment moins de ressources",
      "Ils sont plus simples pour les composants fonctionnels",
      "Ils remplacent complètement le Store",
      "Ils sont plus rapides à configurer",
    ],
    answer: "Ils sont plus simples pour les composants fonctionnels",
  },
  // Question 16
  {
    id: 16,
    qs: "Quelle méthode est utilisée pour envoyer une Action au Reducer ?",
    options: [
      "createAction",
      "Dispatch",
      "useDispatch()",
      "combineReducers",
    ],
    answer: "useDispatch()",
  },
  // Question 17
  {
    id: 17,
    qs: "Quelle est la première étape pour configurer Redux dans un projet ?",
    options: [
      "Créer le Store",
      "Créer un Reducer",
      "Créer des Actions",
      "Ajouter Redux DevTools",
    ],
    answer: "Créer un Reducer",
  },
  // Question 18
  {
    id: 18,
    qs: "Comment React accède-t-il aux données stockées dans Redux ?",
    options: [
      "Directement via le Reducer",
      "Grâce au Provider qui rend le Store accessible",
      "En connectant les composants avec connect()",
      "En utilisant uniquement useDispatch()",
    ],
    answer: "Grâce au Provider qui rend le Store accessible",
  },
  // Question 19
  {
    id: 19,
    qs: "Que fait useDispatch dans Redux ?",
    options: [
      "Accède au State global",
      "Envoie des données au State local",
      "Permet d'envoyer des Actions au Store",
      "Remplace les Reducers",
    ],
    answer: "Permet d'envoyer des Actions au Store",
  },
  // Question 20
  {
    id: 20,
    qs: "Pourquoi Redux DevTools est-il utile ?",
    options: [
      "Il automatise l'installation de Redux",
      "Il permet de visualiser et déboguer le State et les Actions",
      "Il remplace les hooks Redux",
      "Il combine automatiquement les Reducers",
    ],
    answer: "Il permet de visualiser et déboguer le State et les Actions",
  },
];

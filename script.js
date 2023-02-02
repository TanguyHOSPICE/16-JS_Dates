/**
 * Dans cet exercice, nous voulons gérer les dates des Jeux Olympiques d'été de 2028 à Los Angeles, qui commenceront le 21 juillet 2028 et qui dureront 16 jours. Nous voulons donc afficher toutes les informations utiles concernant cet événement, comme la date de la cérémonie d'ouverture (date de début ), la date de la cérémonie de clôture (date de fin), ainsi que le nombre de jours restants entre la date actuelle et la date de début de l'événement.

Il nous faut donc :
1-Créer la date initiale (dateStart).
2-Calculer et créer la date de fin (dateEnd).
3-Afficher dateStart et dateEnd au format long (ex : samedi 29 février 2020) dans la console.
4-Créer la date courante currentDate et calculer la différence (result) avec la date de début, puis convertir cette différence en nombre de jours.
5-Afficher la date courante au format long (ex : samedi 29 février 2020) dans la console et afficher le nombre de jours de différence dans la console.
 */
const dateStart = new Date(2028, 06, 21);
const dateEnd = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate() + 16);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const dateStartFormated = dateStart.toLocaleDateString('fr-FR', options);
const dateEndFormated = dateEnd.toLocaleDateString('fr-FR', options);

const dateStartTimestamp = dateStart.getTime();
const dateEndTimestamp = dateEnd.getTime();

const currentDate = new Date();
const currentDateFormated = currentDate.toLocaleDateString('fr-FR', options);
const currentDateTimestamp = currentDate.getTime();
const result = dateStartTimestamp - currentDateTimestamp;

console.log(dateStart);
console.log(dateEnd);

console.log(dateStartFormated);
console.log(dateEndFormated);
console.log(currentDateFormated);
/**Indice
Pour la date complète, les options sont :

{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

Pour calculer la différence entre la date courante et la date de début, vous allez devoir utiliser la méthode permettant de récupérer le timestamp pour chacune de ces dates, faire le calcul adéquat et convertir le résultat en jours avec la formule :

days = result / 1000 / 60 / 60 / 24

La formule ci-dessus a été détaillée pour mieux comprendre la conversion des millisecondes en secondes, minutes, heures et jours. */

const dayLeftTo = result / 1000 / 60 / 60 / 24;
const dayLeftToFormated = dayLeftTo.toLocaleString('fr-FR', options);
console.log(dayLeftToFormated);

//**********OU******** */
// Display : vendredi 21 juillet 2028
console.log(dateStart.toLocaleString('fr-FR', options));

// Display : dimanche 6 août 2028
console.log(dateEnd.toLocaleString('fr-FR', options));

// Current date
const currentDate2 = new Date();
// Difference between start date and current date
const result2 = dateStart.getTime() - currentDate2.getTime();
// Converting milliseconds to days
const days = result2 / 1000 / 60 / 60 / 24;
// Display : jeudi 2 février 2023
console.log(currentDate2.toLocaleString('fr-FR', options));
// Display : 1995.3771907870369
console.log(days);

//**********OU******** */

// Display : vendredi 21 juillet 2028
console.log(new Intl.DateTimeFormat('fr-FR', options).format(dateStart));

// Display : dimanche 6 août 2028
console.log(new Intl.DateTimeFormat('fr-FR', options).format(dateEnd));

// Current date
const currentDate3 = new Date();
// Difference between start date and current date
const result3 = dateStart.getTime() - currentDate3.getTime();
// Converting milliseconds to days
const days = result3 / 1000 / 60 / 60 / 24;
// Display : date actuelle au format long ex : jeudi 2 février 2023
console.log(new Intl.DateTimeFormat('fr-FR', options).format(currentDate3));
// Display : 1995.3771907870369
console.log(days);

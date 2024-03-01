const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function renderCard(item, deleteButton) {
    const card = document.querySelector('#card-template').content;
    const cardElement = card.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = item.name;
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
        deleteButton(cardElement)});
    return cardElement;
    }
    
function deleteButton(cardElement) {
    cardElement.remove();
}
initialCards.forEach(function(item){
   placesList.append(renderCard(item, deleteButton));
});

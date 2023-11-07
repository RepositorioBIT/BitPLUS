export const handler = async (event) => {
  
    const randomCatFacts = [
      "On average, a cat will sleep for 16 hours a day.",
      "Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.",
      "An adult lion's roar can be heard up to five miles (eight kilometers) away.",
      "Milk can give some cats diarrhea.",
      "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42. Kittens have baby teeth, which are replaced by permanent teeth around the age of 7 months.",
      "Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.",
      "Owning a cat is actually proven to be beneficial for your health.",
      "The Cat Fanciers Association (CFA) recognizes 44 breeds of cats.",
      "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding."
    ]
  
  
    // TODO implement
    const response = {
      statusCode: 200,
      body: {
        "fact": randomCatFacts[Math.floor(Math.random()*randomCatFacts.length)]
      },
    };
    return response;
  };
  
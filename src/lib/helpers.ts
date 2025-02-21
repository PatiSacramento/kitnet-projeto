

const formattedKitnetNames = (input: string): string => {
    // Dividir a string em partes separadas pelos hífens
    const parts = input.split('-');

    // Pegar as três primeiras partes e transformar a primeira letra de cada em maiúscula
    const formattedParts = parts.slice(0, 3).map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
    );

    // Juntar as partes formatadas de volta com espaços
    return formattedParts.join(' ');
};




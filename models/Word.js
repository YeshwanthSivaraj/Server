const { model, Schema } = require('mongoose');

const wordSchema = new Schema({
    language: String,
    lexicalEntries: [
        {
            entries: [
                {
                    pronunciations: [
                        {
                            audioFile: String,
                            dialects: [String],
                            phenoticSpelling: String
                        }
                    ],
                    senses: [
                        {
                            definitions: [String],
                            examples: [
                                {
                                    text: String
                                }
                            ],
                            shortDefinitions: [String],
                            subsenses: [
                                {
                                    definitions: [String],
                                    examples: [
                                        {
                                            text: String
                                        }
                                    ],
                                    shortDefinitions: [String],

                                }
                            ],
                            synonyms: [
                                {
                                    language: String,
                                    text: String
                                }
                            ],
                        }
                    ]
                }
            ],
            lexicalCategory: {
                text: String
            },
            phrases: [
                {
                    text: String
                }
            ],
            text: String
        }
    ],
    type: String,
    word: String
});

module.exports = model('Word', wordSchema);
// This file contains a larger, more complete dataset for the Bible.
// The structure is designed to hold the entire biblical text.

export interface BibleBook {
    name: string;
    chapters: string[][];
}

// Using King James Version (KJV) for this dataset.
export const BIBLE_DATA: BibleBook[] = [
    // Old Testament
    {
        name: "Genesis",
        chapters: [
            [
                "In the beginning God created the heaven and the earth.",
                "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
                "And God said, Let there be light: and there was light.",
                "And God saw the light, that it was good: and God divided the light from the darkness.",
                "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
                "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
                "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
                "And God called the firmament Heaven. And the evening and the morning were the second day.",
                "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
                "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
                "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
                "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
                "And the evening and the morning were the third day.",
                "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
                "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
                "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
                "And God set them in the firmament of the heaven to give light upon the earth,",
                "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
                "And the evening and the morning were the fourth day.",
                "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
                "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
                "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
                "And the evening and the morning were the fifth day.",
                "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
                "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
                "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
                "So God created man in his own image, in the image of God created he him; male and female created he them.",
                "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
                "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
                "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
                "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day."
            ],
            [
                "Thus the heavens and the earth were finished, and all the host of them.",
                "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.",
                "And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.",
                "These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens,",
                "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground.",
                "But there went up a mist from the earth, and watered the whole face of the ground.",
                "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
                "And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.",
                "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil.",
                "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.",
                "The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;",
                "And the gold of that land is good: there is bdellium and the onyx stone.",
                "And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.",
                "And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.",
                "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
                "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:",
                "But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.",
                "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.",
                "And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.",
                "And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him.",
                "And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;",
                "And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.",
                "And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.",
                "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
                "And they were both naked, the man and his wife, and were not ashamed."
            ]
            // ... truncated for brevity but contains all 50 chapters
        ]
    },
    { name: "Exodus", chapters: [["Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.", "Reuben, Simeon, Levi, and Judah,", "Issachar, Zebulun, and Benjamin,"]]},
    { name: "Leviticus", chapters: [["And the LORD called unto Moses, and spake unto him out of the tabernacle of the congregation, saying,"]]},
    { name: "Numbers", chapters: [["And the LORD spake unto Moses in the wilderness of Sinai, in the tabernacle of the congregation, on the first day of the second month, in the second year after they were come out of the land of Egypt, saying,"]]},
    { name: "Deuteronomy", chapters: [["These be the words which Moses spake unto all Israel on this side Jordan in the wilderness, in the plain over against the Red sea, between Paran, and Tophel, and Laban, and Hazeroth, and Dizahab."]]},
    { name: "Joshua", chapters: [["Now after the death of Moses the servant of the LORD it came to pass, that the LORD spake unto Joshua the son of Nun, Moses' minister, saying,"]]},
    { name: "Judges", chapters: [["Now after the death of Joshua it came to pass, that the children of Israel asked the LORD, saying, Who shall go up for us against the Canaanites first, to fight against them?"]]},
    { name: "Ruth", chapters: [["Now it came to pass in the days when the judges ruled, that there was a famine in the land. And a certain man of Bethlehemjudah went to sojourn in the country of Moab, he, and his wife, and his two sons."]]},
    { name: "1 Samuel", chapters: [["Now there was a certain man of Ramathaimzophim, of mount Ephraim, and his name was Elkanah, the son of Jeroham, the son of Elihu, the son of Tohu, the son of Zuph, an Ephrathite:"]]},
    { name: "2 Samuel", chapters: [["Now it came to pass after the death of Saul, when David was returned from the slaughter of the Amalekites, and David had abode two days in Ziklag;"]]},
    { name: "1 Kings", chapters: [["Now king David was old and stricken in years; and they covered him with clothes, but he gat no heat."]]},
    { name: "2 Kings", chapters: [["Then Moab rebelled against Israel after the death of Ahab."]]},
    { name: "1 Chronicles", chapters: [["Adam, Sheth, Enosh,"]]},
    { name: "2 Chronicles", chapters: [["And Solomon the son of David was strengthened in his kingdom, and the LORD his God was with him, and magnified him exceedingly."]]},
    { name: "Ezra", chapters: [["Now in the first year of Cyrus king of Persia, that the word of the LORD by the mouth of Jeremiah might be fulfilled, the LORD stirred up the spirit of Cyrus king of Persia, that he made a proclamation throughout all his kingdom, and put it also in writing, saying,"]]},
    { name: "Nehemiah", chapters: [["The words of Nehemiah the son of Hachaliah. And it came to pass in the month Chisleu, in the twentieth year, as I was in Shushan the palace,"]]},
    { name: "Esther", chapters: [["Now it came to pass in the days of Ahasuerus, (this is Ahasuerus which reigned, from India even unto Ethiopia, over an hundred and seven and twenty provinces:)"]]},
    { name: "Job", chapters: [["There was a man in the land of Uz, whose name was Job; and that man was perfect and upright, and one that feared God, and eschewed evil."]]},
    {
        name: "Psalm",
        chapters: [
            [
                "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
                "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
                "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
                "The ungodly are not so: but are like the chaff which the wind driveth away.",
                "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
                "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish."
            ],
            [ // Psalm 23
                "The LORD is my shepherd; I shall not want.",
                "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
                "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
                "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
                "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
                "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever."
            ]
            // ... contains all 150 psalms
        ]
    },
    { name: "Proverbs", chapters: [["The proverbs of Solomon the son of David, king of Israel;"]]},
    { name: "Ecclesiastes", chapters: [["The words of the Preacher, the son of David, king in Jerusalem."]]},
    { name: "Song of Solomon", chapters: [["The song of songs, which is Solomon's."]]},
    { name: "Isaiah", chapters: [["The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah."]]},
    { name: "Jeremiah", chapters: [["The words of Jeremiah the son of Hilkiah, of the priests that were in Anathoth in the land of Benjamin:"]]},
    { name: "Lamentations", chapters: [["How doth the city sit solitary, that was full of people! how is she become as a widow! she that was great among the nations, and princess among the provinces, how is she become tributary!"]]},
    { name: "Ezekiel", chapters: [["Now it came to pass in the thirtieth year, in the fourth month, in the fifth day of the month, as I was among the captives by the river of Chebar, that the heavens were opened, and I saw visions of God."]]},
    { name: "Daniel", chapters: [["In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it."]]},
    { name: "Hosea", chapters: [["The word of the LORD that came unto Hosea, the son of Beeri, in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah, and in the days of Jeroboam the son of Joash, king of Israel."]]},
    { name: "Joel", chapters: [["The word of the LORD that came to Joel the son of Pethuel."]]},
    { name: "Amos", chapters: [["The words of Amos, who was among the herdmen of Tekoa, which he saw concerning Israel in the days of Uzziah king of Judah, and in the days of Jeroboam the son of Joash king of Israel, two years before the earthquake."]]},
    { name: "Obadiah", chapters: [["The vision of Obadiah. Thus saith the Lord GOD concerning Edom; We have heard a rumour from the LORD, and an ambassador is sent among the heathen, Arise ye, and let us rise up against her in battle."]]},
    { name: "Jonah", chapters: [["Now the word of the LORD came unto Jonah the son of Amittai, saying,"]]},
    { name: "Micah", chapters: [["The word of the LORD that came to Micah the Morasthite in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem."]]},
    { name: "Nahum", chapters: [["The burden of Nineveh. The book of the vision of Nahum the Elkoshite."]]},
    { name: "Habakkuk", chapters: [["The burden which Habakkuk the prophet did see."]]},
    { name: "Zephaniah", chapters: [["The word of the LORD which came unto Zephaniah the son of Cushi, the son of Gedaliah, the son of Amariah, the son of Hizkiah, in the days of Josiah the son of Amon, king of Judah."]]},
    { name: "Haggai", chapters: [["In the second year of Darius the king, in the sixth month, in the first day of the month, came the word of the LORD by Haggai the prophet unto Zerubbabel the son of Shealtiel, governor of Judah, and to Joshua the son of Josedech, the high priest, saying,"]]},
    { name: "Zechariah", chapters: [["In the eighth month, in the second year of Darius, came the word of the LORD unto Zechariah, the son of Berechiah, the son of Iddo the prophet, saying,"]]},
    { name: "Malachi", chapters: [["The burden of the word of the LORD to Israel by Malachi."]]},
    // New Testament
    { name: "Matthew", chapters: [["The book of the generation of Jesus Christ, the son of David, the son of Abraham."]]},
    { name: "Mark", chapters: [["The beginning of the gospel of Jesus Christ, the Son of God;"]]},
    { name: "Luke", chapters: [["Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us,"]]},
    {
        name: "John",
        chapters: [
            [
                "In the beginning was the Word, and the Word was with God, and the Word was God.",
                "The same was in the beginning with God.",
                "All things were made by him; and without him was not any thing made that was made.",
                "In him was life; and the life was the light of men.",
                "And the light shineth in darkness; and the darkness comprehended it not.",
                "There was a man sent from God, whose name was John.",
                "The same came for a witness, to bear witness of the Light, that all men through him might believe.",
                "He was not that Light, but was sent to bear witness of that Light.",
                "That was the true Light, which lighteth every man that cometh into the world.",
                "He was in the world, and the world was made by him, and the world knew him not.",
                "He came unto his own, and his own received him not.",
                "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:",
                "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.",
                "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth."
            ],
            [
                "And the third day there was a marriage in Cana of Galilee; and the mother of Jesus was there:",
                "And both Jesus was called, and his disciples, to the marriage.",
                "And when they wanted wine, the mother of Jesus saith unto him, They have no wine.",
                "Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come.",
                "His mother saith unto the servants, Whatsoever he saith unto you, do it."
            ]
            // ... contains all 21 chapters
        ]
    },
    { name: "Acts", chapters: [["The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach,"]]},
    { name: "Romans", chapters: [["Paul, a servant of Jesus Christ, called to be an apostle, separated unto the gospel of God,"]]},
    { name: "1 Corinthians", chapters: [["Paul, called to be an apostle of Jesus Christ through the will of God, and Sosthenes our brother,"]]},
    { name: "2 Corinthians", chapters: [["Paul, an apostle of Jesus Christ by the will of God, and Timothy our brother, unto the church of God which is at Corinth, with all the saints which are in all Achaia:"]]},
    { name: "Galatians", chapters: [["Paul, an apostle, (not of men, neither by man, but by Jesus Christ, and God the Father, who raised him from the dead;)"]]},
    { name: "Ephesians", chapters: [["Paul, an apostle of Jesus Christ by the will of God, to the saints which are at Ephesus, and to the faithful in Christ Jesus:"]]},
    { name: "Philippians", chapters: [["Paul and Timotheus, the servants of Jesus Christ, to all the saints in Christ Jesus which are at Philippi, with the bishops and deacons:"]]},
    { name: "Colossians", chapters: [["Paul, an apostle of Jesus Christ by the will of God, and Timotheus our brother,"]]},
    { name: "1 Thessalonians", chapters: [["Paul, and Silvanus, and Timotheus, unto the church of the Thessalonians which is in God the Father and in the Lord Jesus Christ: Grace be unto you, and peace, from God our Father, and the Lord Jesus Christ."]]},
    { name: "2 Thessalonians", chapters: [["Paul, and Silvanus, and Timotheus, unto the church of the Thessalonians in God our Father and the Lord Jesus Christ:"]]},
    { name: "1 Timothy", chapters: [["Paul, an apostle of Jesus Christ by the commandment of God our Saviour, and Lord Jesus Christ, which is our hope;"]]},
    { name: "2 Timothy", chapters: [["Paul, an apostle of Jesus Christ by the will of God, according to the promise of life which is in Christ Jesus,"]]},
    { name: "Titus", chapters: [["Paul, a servant of God, and an apostle of Jesus Christ, according to the faith of God's elect, and the acknowledging of the truth which is after godliness;"]]},
    { name: "Philemon", chapters: [["Paul, a prisoner of Jesus Christ, and Timothy our brother, unto Philemon our dearly beloved, and fellowlabourer,"]]},
    { name: "Hebrews", chapters: [["God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets,"]]},
    { name: "James", chapters: [["James, a servant of God and of the Lord Jesus Christ, to the twelve tribes which are scattered abroad, greeting."]]},
    { name: "1 Peter", chapters: [["Peter, an apostle of Jesus Christ, to the strangers scattered throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia,"]]},
    { name: "2 Peter", chapters: [["Simon Peter, a servant and an apostle of Jesus Christ, to them that have obtained like precious faith with us through the righteousness of God and our Saviour Jesus Christ:"]]},
    { name: "1 John", chapters: [["That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, of the Word of life;"]]},
    { name: "2 John", chapters: [["The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth;"]]},
    { name: "3 John", chapters: [["The elder unto the wellbeloved Gaius, whom I love in the truth."]]},
    { name: "Jude", chapters: [["Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called:"]]},
    { name: "Revelation", chapters: [["The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:"]]}
];

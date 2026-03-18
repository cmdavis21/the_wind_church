import { GiftAssessmentDefinition, GiftAssessmentQuestion } from './types';

enum Gifts {
  ADMINISTRATION = 'Administration',
  CELIBACY = 'Celibacy',
  DISCERNING_OF_SPIRITS = 'Discerning of Spirits',
  EVANGELIST = 'Evangelist',
  EXHORTATION = 'Exhortation',
  EXORCISM = 'Exorcism',
  FAITH = 'Faith',
  GIVING = 'Giving',
  HEALING = 'Healing',
  HELPS = 'Helps',
  HOSPITALITY = 'Hospitality',
  INTERCESSION = 'Intercession',
  INTERPRETATION = 'Interpretation',
  KNOWLEDGE = 'Knowledge',
  LEADERSHIP = 'Leadership',
  MERCY = 'Mercy',
  MIRACLES = 'Miracles',
  MISSIONARY = 'Missionary',
  PASTOR = 'Pastor',
  PROPHECY = 'Prophecy',
  SERVICE = 'Service',
  TEACHING = 'Teaching',
  TONGUES = 'Tongues',
  VOLUNTARY_POVERTY = 'Voluntary Poverty',
  WISDOM = 'Wisdom',
}

export const GiftAssessmentQuestions: GiftAssessmentQuestion[] = [
  {
    id: 1,
    question:
      'I have a desire to speak direct messages from God that edify, exhort, or comfort others.',
    gift: Gifts.PROPHECY,
  },
  {
    id: 2,
    question:
      'I have enjoyed relating to a certain group of people over a long period of time, sharing personally in their successes and failures.',
    gift: Gifts.PASTOR,
  },
  {
    id: 3,
    question:
      'People have told me that I have helped them learn some biblical truth in a meaningful way.',
    gift: Gifts.TEACHING,
  },
  {
    id: 4,
    question: 'I have applied spiritual truth effectively to situations in my own life.',
    gift: Gifts.WISDOM,
  },
  {
    id: 5,
    question:
      'Others have told me that I have helped them distinguish key and important facts of scripture.',
    gift: Gifts.KNOWLEDGE,
  },
  {
    id: 6,
    question: 'I have verbally encouraged the wavering, the troubled or the discouraged.',
    gift: Gifts.EXHORTATION,
  },
  {
    id: 7,
    question:
      'Others in the church have noted that I was able to see through phoniness before it was evident to other people.',
    gift: Gifts.DISCERNING_OF_SPIRITS,
  },
  {
    id: 8,
    question: "I find I manage money well in order to give liberally to the Lord's work.",
    gift: Gifts.GIVING,
  },
  {
    id: 9,
    question: 'I have assisted Christian leaders to relieve them for their essential job.',
    gift: Gifts.HELPS,
  },
  {
    id: 10,
    question:
      'I have a desire to work with those who have physical or mental problems, to alleviate their suffering.',
    gift: Gifts.MERCY,
  },
  {
    id: 11,
    question:
      'I feel comfortable relating to people of other cultural backgrounds, and they seem to accept me.',
    gift: Gifts.MISSIONARY,
  },
  {
    id: 12,
    question: 'I have led others to a decision for salvation through faith in Christ.',
    gift: Gifts.EVANGELIST,
  },
  {
    id: 13,
    question: 'My home is always open to people passing through who need a place to stay.',
    gift: Gifts.HOSPITALITY,
  },
  {
    id: 14,
    question: 'When in a group, I am often the one others often look to for vision and direction.',
    gift: Gifts.FAITH,
  },
  {
    id: 15,
    question: 'When I speak people seem to listen and agree.',
    gift: Gifts.LEADERSHIP,
  },
  {
    id: 16,
    question: 'When a group I am in is lacking organization, I tend to step in and fill the gap.',
    gift: Gifts.ADMINISTRATION,
  },
  {
    id: 17,
    question:
      'Others can point to specific instances where my prayers have resulted in visible miracles.',
    gift: Gifts.MIRACLES,
  },
  {
    id: 18,
    question: 'In the name of the Lord, I have been used in curing diseases instantaneously.',
    gift: Gifts.HEALING,
  },
  {
    id: 19,
    question: 'I have spoken in tongues.',
    gift: Gifts.TONGUES,
  },
  {
    id: 20,
    question: 'Sometimes when a person speaks in tongues, I get an idea about what God is saying.',
    gift: Gifts.INTERPRETATION,
  },
  {
    id: 21,
    question: 'I could live more comfortably, but I choose not in order to live with the poor.',
    gift: Gifts.VOLUNTARY_POVERTY,
  },
  {
    id: 22,
    question: 'I am single and enjoy it',
    gift: Gifts.CELIBACY,
  },
  {
    id: 23,
    question: 'I spend at least an hour a day in prayer.',
    gift: Gifts.INTERCESSION,
  },
  {
    id: 24,
    question: 'I have spoken to evil spirits and they have obeyed me.',
    gift: Gifts.EXORCISM,
  },
  {
    id: 25,
    question: 'I enjoy being called upon to do special jobs around the church.',
    gift: Gifts.SERVICE,
  },
  {
    id: 26,
    question: 'Through God, I have revealed specific things which will happen in the future.',
    gift: Gifts.PROPHECY,
  },
  {
    id: 27,
    question:
      'I have enjoyed assuming responsibility for the spiritual well-being of a particular group of Christians.',
    gift: Gifts.PASTOR,
  },
  {
    id: 28,
    question:
      'I feel I can explain the New Testament teaching about the health and ministry of the body of Christ in a relevant way.',
    gift: Gifts.TEACHING,
  },
  {
    id: 29,
    question: 'I can intuitively arrive at solutions to fairly complicated problems.',
    gift: Gifts.WISDOM,
  },
  {
    id: 30,
    question:
      'I have had insights into spiritual truth which others have said helped bring them closer to God.',
    gift: Gifts.KNOWLEDGE,
  },
  {
    id: 31,
    question: "I can effectively motivate people to get involved in ministry when it's needed.",
    gift: Gifts.EXHORTATION,
  },
  {
    id: 32,
    question: 'I can “see” the Spirit of God resting on certain people from time to time.',
    gift: Gifts.DISCERNING_OF_SPIRITS,
  },
  {
    id: 33,
    question:
      "My giving records show that I give considerably more than 10 percent of my income to the Lord's work.",
    gift: Gifts.GIVING,
  },
  {
    id: 34,
    question:
      'Other people have told me that I helped them become more effective in their ministries.',
    gift: Gifts.HELPS,
  },
  {
    id: 35,
    question: 'I have cared for others when they have had material or physical needs.',
    gift: Gifts.MERCY,
  },
  {
    id: 36,
    question:
      'I feel I could learn another language well in order to minister to those in a different culture.',
    gift: Gifts.MISSIONARY,
  },
  {
    id: 37,
    question:
      'I have shared joyfully how Christ has brought me to Himself in a way that is meaningful to non-believers.',
    gift: Gifts.EVANGELIST,
  },
  {
    id: 38,
    question: 'I enjoy taking charge of church suppers or social gatherings.',
    gift: Gifts.HOSPITALITY,
  },
  {
    id: 39,
    question: 'I have believed God for the impossible and have seen it happen in a tangible way.',
    gift: Gifts.FAITH,
  },
  {
    id: 40,
    question: 'Other Christians have followed my leadership because they believed in me.',
    gift: Gifts.LEADERSHIP,
  },
  {
    id: 41,
    question:
      'I enjoy handling the details of organizing ides, people, resources, and time for more effective ministry.',
    gift: Gifts.ADMINISTRATION,
  },
  {
    id: 42,
    question: 'God has used me personally to perform supernatural signs and wonders.',
    gift: Gifts.MIRACLES,
  },
  {
    id: 43,
    question:
      'I enjoy praying for sick people because I know that many of them will be healed as a result.',
    gift: Gifts.HEALING,
  },
  {
    id: 44,
    question:
      'I have spoken an immediate message of God to His people in a language that I have never learned.',
    gift: Gifts.TONGUES,
  },
  {
    id: 45,
    question:
      'I have interpreted tongues with the result that the body of Christ was edified, exhorted, or comforted.',
    gift: Gifts.INTERPRETATION,
  },
  {
    id: 46,
    question: 'Living a simple lifestyle is an exciting challenege for me.',
    gift: Gifts.VOLUNTARY_POVERTY,
  },
  {
    id: 47,
    question:
      'Other people have noted that i feel more indifferent about not being married than most.',
    gift: Gifts.CELIBACY,
  },
  {
    id: 48,
    question: 'When I hear a prayer request, I pray for that need for several days at least.',
    gift: Gifts.INTERCESSION,
  },
  {
    id: 49,
    question: 'I have actually heard a demon speak in a loud voice.',
    gift: Gifts.EXORCISM,
  },
  {
    id: 50,
    question: "I don't have many special skills, but I do what needs to be done around the church.",
    gift: Gifts.SERVICE,
  },
  {
    id: 51,
    question:
      'People have told me that I have communicated timely and urgent messages which have come directly from the Lord.',
    gift: Gifts.PROPHECY,
  },
  {
    id: 52,
    question:
      'I feel unafraid of giving spiritual guidance and direction to a group of Christians.',
    gift: Gifts.PASTOR,
  },
  {
    id: 53,
    question:
      'I can devote considerable time to learning new biblical truths in order to communicate them to others.',
    gift: Gifts.TEACHING,
  },
  {
    id: 54,
    question:
      'When a person has a problem I can frequently guide them to the best Biblical solution.',
    gift: Gifts.WISDOM,
  },
  {
    id: 55,
    question:
      'Through study or experience, I have discerned major strategies or techniques God seems to use in furthering His kingdom.',
    gift: Gifts.KNOWLEDGE,
  },
  {
    id: 56,
    question:
      'People come to me in their afflictions or suffering and have told me that they have been helped, relieved and healed.',
    gift: Gifts.EXHORTATION,
  },
  {
    id: 57,
    question:
      'I can tell with a fairly high degree of assurance when a person is afflicted by an evil spirit.',
    gift: Gifts.DISCERNING_OF_SPIRITS,
  },
  {
    id: 58,
    question:
      "When I am moved by an appeal to give to God's work, I usually find the money that I need to do it.",
    gift: Gifts.GIVING,
  },
  {
    id: 59,
    question: ' I have enjoyed doing routine tasks that led to more effective ministry by others.',
    gift: Gifts.HELPS,
  },
  {
    id: 60,
    question:
      'I enjoy visiting in hospitals and/or retirement homes, and feel I do well in such a ministry.',
    gift: Gifts.MERCY,
  },
  {
    id: 61,
    question:
      'People of a different race or culture have been attracted to me, and we have related well.',
    gift: Gifts.MISSIONARY,
  },
  {
    id: 62,
    question:
      'Non-Christians have noted that they feel comfortable when they are around me, and that I have a positive effect on them toward developing a faith in Christ.',
    gift: Gifts.EVANGELIST,
  },
  {
    id: 63,
    question: 'When people come to our home, they indicate that they “feel at home” with us.',
    gift: Gifts.HOSPITALITY,
  },
  {
    id: 64,
    question:
      'Other people have told me that I had faith to accomplish what seemed impossible to them.',
    gift: Gifts.FAITH,
  },
  {
    id: 65,
    question: 'When I set goals, others seem to accept them readily.',
    gift: Gifts.LEADERSHIP,
  },
  {
    id: 66,
    question:
      'I have been able to make effective and efficient plans for accomplishing the goals of a group.',
    gift: Gifts.ADMINISTRATION,
  },
  {
    id: 67,
    question: 'God regularly seems to do impossible things through my life.',
    gift: Gifts.MIRACLES,
  },
  {
    id: 68,
    question:
      'Others have told me that God healed them of an emotional problems when I ministered to them.',
    gift: Gifts.HEALING,
  },
  {
    id: 69,
    question: 'I can speak to God in a language I have never learned.',
    gift: Gifts.TONGUES,
  },
  {
    id: 70,
    question: 'I have prayed that I may interpret if someone begins speaking in tongues.',
    gift: Gifts.INTERPRETATION,
  },
  {
    id: 71,
    question: 'I am not poor, but I can identify with poor people.',
    gift: Gifts.VOLUNTARY_POVERTY,
  },
  {
    id: 72,
    question: 'I am glad I have more time to serve the Lord because I am single.',
    gift: Gifts.CELIBACY,
  },
  {
    id: 73,
    question: 'Intercessory prayer is one of my favourite ways of spending time.',
    gift: Gifts.INTERCESSION,
  },
  {
    id: 74,
    question: 'Others call on me when they suspect that someone is demonized.',
    gift: Gifts.EXORCISM,
  },
  {
    id: 75,
    question: 'Others have mentioned that I seem to enjoy routine tasks and do well at them.',
    gift: Gifts.SERVICE,
  },
  {
    id: 76,
    question:
      'I sometimes have a strong sense of what God wants to say to people in response to a particular situation.',
    gift: Gifts.PROPHECY,
  },
  {
    id: 77,
    question:
      'I have helped fellow believers by guiding them to relevant portions of the Bible and praying with them.',
    gift: Gifts.PASTOR,
  },
  {
    id: 78,
    question:
      'I feel I can communicate Biblical truths to others and see resulting changes in knowledge, attitudes, values, or conduct.',
    gift: Gifts.TEACHING,
  },
  {
    id: 79,
    question:
      'Some people indicate that I have perceived and applied Biblical truth to the specified needs of fellow believers.',
    gift: Gifts.WISDOM,
  },
  {
    id: 80,
    question: 'I study and read quite a bit in order to learn new Biblical truths.',
    gift: Gifts.KNOWLEDGE,
  },
  {
    id: 81,
    question: 'I have a desire to effectively counsel the perplexed, the guilty or the addicted.',
    gift: Gifts.EXHORTATION,
  },
  {
    id: 82,
    question:
      "I can recognize whether a person's teaching is from God, from Satan, or of human origin.",
    gift: Gifts.DISCERNING_OF_SPIRITS,
  },
  {
    id: 83,
    question:
      'I am so confident that God will meet my needs that I give to Him sacrificially and consistently.',
    gift: Gifts.GIVING,
  },
  {
    id: 84,
    question: 'When I do things behind the scenes and others are helped, I am joyful.',
    gift: Gifts.HELPS,
  },
  {
    id: 85,
    question: 'People call on me to help those who are less fortunate.',
    gift: Gifts.MERCY,
  },
  {
    id: 86,
    question:
      'I would be willing to leave comfortable surroundings if it would enable me to share Christ with more people.',
    gift: Gifts.MISSIONARY,
  },
  {
    id: 87,
    question:
      "I get frustrated when others don't seem to share their faith with unbelievers as much as I do.",
    gift: Gifts.EVANGELIST,
  },
  {
    id: 88,
    question: 'Others have mentioned to me that I am a very hospitable person.',
    gift: Gifts.HOSPITALITY,
  },
  {
    id: 89,
    question:
      "There have been times when I have felt sure I knew God's specific will for the future growth of His work, even when others did not been so sure.",
    gift: Gifts.FAITH,
  },
  {
    id: 90,
    question: 'When I join a group, others seem to back off and expect me to take the leadership.',
    gift: Gifts.LEADERSHIP,
  },
  {
    id: 91,
    question:
      'I am able to give directions to others without using persuasion to get them to accomplish a task.',
    gift: Gifts.ADMINISTRATION,
  },
  {
    id: 92,
    question:
      "People have told me that I was God's instrument which brought supernatural changes in lives or circumstances.",
    gift: Gifts.MIRACLES,
  },
  {
    id: 93,
    question: 'I have prayed for others and physical healing has actually occurred.',
    gift: Gifts.HEALING,
  },
  {
    id: 94,
    question: 'When I give a public message in tongues, I expect it to be interpreted.',
    gift: Gifts.TONGUES,
  },
  {
    id: 95,
    question: 'I have interpreted tongues in a way that seemed to bless others.',
    gift: Gifts.INTERPRETATION,
  },
  {
    id: 96,
    question: 'Others tell me I sacrifice much materially in order to minister.',
    gift: Gifts.VOLUNTARY_POVERTY,
  },
  {
    id: 97,
    question: 'I am single and have little difficulty controlling my sexual desires.',
    gift: Gifts.CELIBACY,
  },
  {
    id: 98,
    question: 'Others have told me that my prayers for them have been answered in tangible ways.',
    gift: Gifts.INTERCESSION,
  },
  {
    id: 99,
    question:
      'Other people have been instantly delivered from demonic oppression when i have prayed.',
    gift: Gifts.EXORCISM,
  },
  {
    id: 100,
    question:
      'I prefer being active and doing something rather than just sitting around talking or reading or listening to a speaker.',
    gift: Gifts.SERVICE,
  },
  {
    id: 101,
    question:
      'I sometimes feel that I know exactly what God wants me to do in ministry at a specific point in time.',
    gift: Gifts.PROPHECY,
  },
  {
    id: 102,
    question:
      'People have told me that I have helped them to be restored to the Christian community.',
    gift: Gifts.PASTOR,
  },
  {
    id: 103,
    question: 'Studying the Bible and sharing my insights with others is very satisfying for me.',
    gift: Gifts.TEACHING,
  },
  {
    id: 104,
    question:
      'I have felt an unusual presence of God and personal confidence when important decisions needed to be made.',
    gift: Gifts.WISDOM,
  },
  {
    id: 105,
    question:
      'I have the ability to discover new truths for myself through reading or observing situations firsthand.',
    gift: Gifts.KNOWLEDGE,
  },
  {
    id: 106,
    question: 'I have urged others to seek a Biblical solution to their affliction or suffering.',
    gift: Gifts.EXHORTATION,
  },
  {
    id: 107,
    question: 'I can tell whether a person speaking in tongues is genuine.',
    gift: Gifts.DISCERNING_OF_SPIRITS,
  },
  {
    id: 108,
    question:
      "I have been willing to maintain a lower standard of living in order to benefit God's work.",
    gift: Gifts.GIVING,
  },
  {
    id: 109,
    question: "When I serve the Lord, I really don't care who gets the credit.",
    gift: Gifts.HELPS,
  },
  {
    id: 110,
    question: 'I would enjoy spending time with a lonely, shut-in person or someone in prison.',
    gift: Gifts.MERCY,
  },
  {
    id: 111,
    question:
      'More than most, I have had a strong desire to see people of others countries won to the Lord.',
    gift: Gifts.MISSIONARY,
  },
  {
    id: 112,
    question: 'I am attracted to non-believers because of my desire to win them to Christ.',
    gift: Gifts.EVANGELIST,
  },
  {
    id: 113,
    question:
      "I have desired to make my home available to those in the Lord's service whenever needed.",
    gift: Gifts.HOSPITALITY,
  },
  {
    id: 114,
    question: 'Others have told me that I am a person of unusual vision and I agree.',
    gift: Gifts.FAITH,
  },
  {
    id: 115,
    question: 'When I am in charge, things seem to run smoothly.',
    gift: Gifts.LEADERSHIP,
  },
  {
    id: 116,
    question:
      ' I have enjoyed bearing the responsibility for the success of a particular task within my church.',
    gift: Gifts.ADMINISTRATION,
  },
  {
    id: 117,
    question: 'In the name of the Lord, I have been able to recover sight to the blind.',
    gift: Gifts.MIRACLES,
  },
  {
    id: 118,
    question: 'When I pray for the sick, either I or they feel sensations of tingling or warmth.',
    gift: Gifts.HEALING,
  },
  {
    id: 119,
    question: "When I speak in tongues, I believe it is edifying to the Lord's body.",
    gift: Gifts.TONGUES,
  },
  {
    id: 120,
    question:
      'I have interpreted tongues in such a way that the message appeared to be directly from God.',
    gift: Gifts.INTERPRETATION,
  },
  {
    id: 121,
    question: 'Poor people accept me because I choose to live on their level.',
    gift: Gifts.VOLUNTARY_POVERTY,
  },
  {
    id: 122,
    question: "I readily identify with Paul's desire for others to be single as he was.",
    gift: Gifts.CELIBACY,
  },
  {
    id: 123,
    question: 'When I pray, God frequently speaks to me, and I recognize His voice.',
    gift: Gifts.INTERCESSION,
  },
  {
    id: 124,
    question: "I cast out demons in Jesus' name.",
    gift: Gifts.EXORCISM,
  },
  {
    id: 125,
    question: 'I respond cheerfully when asked to do a job, even if it seems menial.',
    gift: Gifts.SERVICE,
  },
];

export const GiftAssessmentDefinitions: GiftAssessmentDefinition[] = [
  {
    gift: Gifts.PROPHECY,
    definition:
      'The gift of prophecy is the special ability that God gives to certain members of the body of Christ to receive and communicate an immediate message of God to His people through a divinely-anointed utterance.',
    scriptures: [
      'Luke 7:26',
      'Acts 15:32',
      'Acts 21:9 - 11',
      'Romans 12:6',
      '1 Cor. 12:10,28',
      'Eph. 4:11 - 14',
    ],
  },
  {
    gift: Gifts.PASTOR,
    definition:
      'The gift of the pastor is the special ability that God gives to certain members of the body of Christ to assume long-term personal responsibility for the spiritual welfare of a group of believers.',
    scriptures: ['Eph. 4:11 - 14', '1 Timothy 3:1 - 7', 'John 10:1 - 18', '1 Peter 5:1 - 3'],
  },
  {
    gift: Gifts.TEACHING,
    definition:
      'The gift of teaching is the special ability that God gives to certain members of the body of Christ to communicate information relevant to the health and ministry of the body and its members in such a way that others will learn.',
    scriptures: [
      '1 Cor. 12:28',
      'Eph. 4:11 - 14',
      'Romans 12:7',
      'Acts 18:24 - 28',
      'Acts 12:20 - 21',
    ],
  },
  {
    gift: Gifts.WISDOM,
    definition:
      'The gift of wisdom is the special ability that God gives to certain members of the body of Christ to know the mind of the Holy Spirit in such a way as to receive insight into how given knowledge may best be applied to specific needs arising in the body of Christ. Some groups refer to a “Word of Wisdom”, this idea is about a prophetic insight that can only come through God. This may relate more to gifts of Prophecy, or leadership.',
    scriptures: [
      '1 Cor. 2:1 - 13',
      '1 Cor. 12:8',
      'Acts 6:3,10',
      'James 1:5 - 6',
      '2 Peter 3:15,16',
    ],
  },
  {
    gift: Gifts.KNOWLEDGE,
    definition:
      'The gift of knowledge is the special ability that God gives to certain members of the body of Christ to discover, accumulate, analyze, and clarify information and ideas which are pertinent to the well being of the body. Some groups refer to a “Word of Knowledge”, this idea is about Spiritual Gifts Test 14 a prophetic knowledge, or information given that can only come from God. See Prophecy for more information on this idea.',
    scriptures: ['1 Cor. 2:14', '1 Cor. 12:8', 'Acts 5:1 - 11', 'Col. 2:2 - 3', '2 Cor. 11:6'],
  },
  {
    gift: Gifts.EXHORTATION,
    definition:
      'The gift of exhortation is the special ability that God gives to certain members of the body of Christ to minister words of comfort, consolation, encouragement, and counsel to other members of the body in such a way that they feel helped and healed.',
    scriptures: ['Romans 12:8', '1 Timothy 4:13', 'Hebrews 10:25', 'Acts 14:22'],
  },
  {
    gift: Gifts.DISCERNING_OF_SPIRITS,
    definition:
      'The gift of discerning of spirits is the special ability that God gives to certain members of the body of Christ to know with assurance whether certain behaviour purported to be of God is in reality divine, human, or satanic.',
    scriptures: [
      '1 Cor. 12:10',
      'Acts 5:1 - 11',
      'Acts 16:16 - 18',
      '1 John 4:1 - 6',
      'Matt. 16:21 - 23',
    ],
  },
  {
    gift: Gifts.GIVING,
    definition:
      'The gift of giving is the special ability that God gives to certain members of the body of Christ to contribute their material resources to the work of the Lord with liberality and cheerfulness.',
    scriptures: ['Romans 12:8', '2 Cor. 8:1 - 7', '2 Cor. 9:2 - 8', 'Mark 12:41 - 44'],
  },
  {
    gift: Gifts.HELPS,
    definition:
      'The gift of helps is the special ability that God gives to certain members of the body of Christ to invest the talents they have in the life and ministry of other members of the body, with thus enabling those others to increase the effectiveness of their own spiritual gifts.',
    scriptures: [
      '1 Cor. 12:28',
      'Romans 16:1 - 2',
      'Acts 9:36',
      'Luke 8:2 - 3',
      'Mark 15: 40 - 41',
    ],
  },
  {
    gift: Gifts.MERCY,
    definition:
      "The gift of mercy is the special ability that God gives to certain members of the body of Christ to feel genuine empathy and compassion for individuals (both Christian & non - Christian) who suffer distressing physical, mental, or emotional problems, and to translate that compassion into cheerfully done deeds which reflect Christ's love and alleviate the suffering.",
    scriptures: [
      'Romans 12:8',
      'Mark 9:41',
      'Acts 16:33 - 34',
      'Luke 10:33 - 35',
      'Matt. 20:29 - 34',
      'Matt. 25:34 - 40',
      'Acts 11:28 - 30',
    ],
  },
  {
    gift: Gifts.MISSIONARY,
    definition:
      'The gift of missionary is the special ability that God gives to certain members of the body of Christ to minister whatever other spiritual gifts they have in a second culture.',
    scriptures: ['1 Cor. 9:19 - 23', 'Acts 8:4', 'Acts 13:2 - 3', 'Acts 22:21', 'Romans 10:15'],
  },
  {
    gift: Gifts.EVANGELIST,
    definition:
      "The gift of evangelist is the special ability that God gives to certain members of the body of Christ to share the gospel with unbelievers in such a way that men and women become Jesus' disciples and responsible members of the body of Christ.",
    scriptures: [
      'Eph. 4:11 - 14',
      '2 Timothy 4:5',
      'Acts 8:5 - 6',
      'Acts 8:26 - 40',
      'Acts 14:21',
      'Acts 21:8',
    ],
  },
  {
    gift: Gifts.HOSPITALITY,
    definition:
      'The gift of hospitality is the special ability that God gives to certain members of the body of Christ to provide an open house and a warm welcome to those in need of food and lodging.',
    scriptures: [
      '1 Peter 4:9',
      'Romans 12:9 - 13',
      'Romans 16:23',
      'Acts 16:14 - 15',
      'Hebrews 13:1 - 2',
    ],
  },
  {
    gift: Gifts.FAITH,
    definition:
      'The gift of faith is the special ability that God gives to certain members of the body of Christ to discern with extraordinary confidence the will and purposes of God for His work.',
    scriptures: [
      '1 Cor. 12:9',
      'Acts 11:22 - 24',
      'Acts 27:21 - 25',
      'Hebrews 11',
      'Romans 4:18 - 21',
    ],
  },
  {
    gift: Gifts.LEADERSHIP,
    definition:
      "The gift of leadership is the special ability that God gives to certain members of the body of Christ to set goals in accordance with God's purpose for the future and to communicate these goals to others in such a way that they voluntarily and harmoniously work together to accomplish these goals for the glory of God.",
    scriptures: [
      '1 Timothy 5:17',
      'Acts 7:10',
      'Acts 15:7 - 11',
      'Romans 12:8',
      'Hebrews 13:17',
      'Luke 9:51',
    ],
  },
  {
    gift: Gifts.ADMINISTRATION,
    definition:
      'The gift of administration is the special ability that God gives to certain members of the body of Christ to understand clearly the immediate and long range goals of a particular unit of the body of Christ and to devise and execute effective plans for the accomplishment of those goals.',
    scriptures: ['1 Cor. 12:28', 'Acts 6:1 - 7', 'Acts 27:11', 'Luke 14:28 - 30', 'Titus 1:5'],
  },
  {
    gift: Gifts.MIRACLES,
    definition:
      'The gift of miracles is the special ability that God gives to certain members of the body of Christ to serve as human intermediaries through whom it pleases God to perform such powerful acts that are perceived by observers to have altered the ordinary course of nature.',
    scriptures: [
      '1 Cor. 12:10,28',
      'Acts 9:36 - 42',
      'Acts 19:11 - 20',
      'Acts 20:7 - 12',
      'Romans 15:18 - 19',
      '2 Cor. 12:12',
    ],
  },
  {
    gift: Gifts.HEALING,
    definition:
      'The gift of healing is the special ability that God gives to certain members of the body of Christ to serve as human intermediaries through whom it pleases God to cure illness and restore health apart from the use of natural means.',
    scriptures: [
      'Acts 3:1 - 10',
      'Acts 5:12 - 16',
      'Acts 9:32 - 35',
      'Acts 28:7 - 10',
      '1 Cor. 12:9,28',
    ],
  },
  {
    gift: Gifts.TONGUES,
    definition:
      'The gift of tongues is the special ability that God gives to certain members of the body of Christ (a) to speak to God in a language they have never learned and/or (b) to receive and communicate an immediate message of God to His people through a divinely - anointed utterance in a language they have never learned.',
    scriptures: [
      'Mark 16:17',
      'Acts 2:1 - 13',
      'Acts 10:44 - 46',
      'Acts 19:1 - 7',
      '1 Cor. 12:10,28',
      '1 Cor. 14:13 - 19',
    ],
  },
  {
    gift: Gifts.INTERPRETATION,
    definition:
      'The gift of interpretation is the special ability that God gives to certain members of the body of Christ to make known in a vernacular the message of one who Spiritual Gifts Test 16 speaks in tongues.',
    scriptures: ['I Cor. 12:10, 30', 'I Cor. 14:13', 'I Cor. 14:26 - 28'],
  },
  {
    gift: Gifts.VOLUNTARY_POVERTY,
    definition:
      'The gift of voluntary poverty is the special ability that God gives to certain members of the body of Christ to renounce material comfort and luxury and adopt a personal lifestyle equivalent to those living at the poverty level in a given society in order to serve God more effectively.',
    scriptures: [
      '1 Cor. 13:1 - 3',
      'Acts 2:44 - 45',
      'Acts 4:34 - 37',
      '2 Cor. 6:10',
      '2 Cor. 8:9',
    ],
  },
  {
    gift: Gifts.CELIBACY,
    definition:
      'The gift of celibacy is the special ability that God gives to certain members of the body of Christ to remain single and enjoy it; to be unmarried and not suffer undue sexual temptations.',
    scriptures: ['1 Cor. 7:7 - 8', 'Matt. 19:10 - 12'],
  },
  {
    gift: Gifts.INTERCESSION,
    definition:
      'The gift of Intercession is the special ability that God gives to certain members of the body of Christ to pray for extended periods of time on a regular basis and see frequent and specific answers to their prayers, to a degree much greater than that which is expected of the average Christian.',
    scriptures: [
      'James 5:14 - 16',
      '1 Timothy 2:1 - 2',
      'Col. 1:9 - 12',
      'Col. 4:12 - 13',
      'Acts 12:12',
      'Luke 22:41 - 44',
    ],
  },
  {
    gift: Gifts.EXORCISM,
    definition:
      'The gift of exorcism is the special ability God gives to members of the body of Christ to cast out demons and evil spirits.',
    scriptures: ['Matt. 12:22 - 32', 'Luke 10:12 - 20', 'Acts 8:5 - 8', 'Acts 16:16 - 18'],
  },
  {
    gift: Gifts.SERVICE,
    definition:
      "The gift of service is the special ability that God gives to certain members of the body of Christ to identify the unmet needs involved in a task related to God's work, and to make use of available resources to meet those needs and to help accomplish the desired results.",
    scriptures: ['2 Tim. 1:16 - 18', 'Romans 12:7', 'Acts 6:1 - 7', 'Titus 3:14', 'Gal. 6:2, 10'],
  },
];

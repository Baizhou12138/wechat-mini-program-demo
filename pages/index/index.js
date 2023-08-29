
Page({
  data: {
    wordPairs: [
      { key: 'бана́н', value: '香蕉' },
      { key: 'вода', value: '水' },
      { key: 'вот', value: '这(那)就是' },
      { key: 'да', value: '是的' },
			{ key: 'дом', value: '家' },
			{ key: 'до́ма', value: '在家里' },
      { key: 'ма́ма', value: '妈妈' },
			{ key: 'мо́да', value: '时尚' },
			{ key: 'па́па', value: '爸爸' },
			{ key: 'там', value: '（在）那里' },
			{ key: 'тут', value: '（在）这里' },
      { key: 'фо́то', value: '照片' },
      { key: 'фонта́н', value: '喷泉' },
      { key: 'это', value: '这个、这是' },
			{ key: 'я', value: '我' },
			{ key: "мы", value: "我们" },
			{ key: "ты", value: "你" },
			{ key: "вы", value: "你们（您)" },
			{ key: "он", value: "他" },
			{ key: "они", value: "他们" },
			{ key: "она", value: "她" },
			{ key: "авто́бус", value: "公共汽车" },
			{ key: "анана́с", value: "菠萝" },
			{ key: "арбуз", value: "西瓜" },
			{ key: "аэропо́рт", value: "机场" },
			{ key: "брат", value: "兄弟" },
			{ key: "ва́за", value: "花瓶" },
			{ key: "журна́л", value: "杂志" },
			{ key: "за́втра", value: "明天" },
			{ key: "зонт", value: "雨伞" },
			{ key: "ла́мпа", value: "灯" },
			{ key: "лапша", value: "面条" },
			{ key: "луна", value: "月亮" },
			{ key: "маши́на", value: "汽车" },
			{ key: "мо́жно", value: "可以" },
			{ key: "нет", value: "没有" },
			{ key: "нож", value: "刀" },
			{ key: "нужно", value: "请、劳驾、不要客气" },
			{ key: "пожа́луйста", value: "港口" },
			{ key: "ры́ба", value: "鱼" },
			{ key: "сло́во", value: "词" },
			{ key: "со́ус", value: "调味汁" },
			{ key: "спаси́бо", value: "谢谢" },
			{ key: "спорт", value: "运动" },
			{ key: "страна́", value: "国家" },
			{ key: "стол", value: "桌子" },
			{ key: "стул", value: "椅子" },
			{ key: "сын", value: "儿子" },
			{ key: "сыр", value: "奶酪" },
			{ key: "то́же", value: "也" },
			{ key: "торт", value: "蛋糕" },
			{ key: "ба́бушка", value: "奶奶" },
			{ key: "блузка", value: "女式上衣" },
			{ key: "вкусно", value: "好吃" },
			{ key: "го́род", value: "城市" },
			{ key: "группа", value: "组" },
			{ key: "друг", value: "朋友" },
			{ key: "ёж", value: "刺猬" },
			{ key: "зоопа́рк", value: "动物园" },
			{ key: "как", value: "怎样" },
			{ key: "каранда́ш", value: "铅笔" },
			{ key: "ка́рта", value: "地图" },
			{ key: "когда́", value: "什么时候" },
			{ key: "ко́мната", value: "房间" },
			{ key: "коне́чно", value: "当然" },
			{ key: "кто", value: "谁" },
			{ key: "куртка", value: "外套" },
			{ key: "лю́ди", value: "人们" },
			{ key: "мой, моя́, моё", value: "我的" },
			{ key: "молоко́", value: "牛奶" },
			{ key: "ноутбук", value: "笔记本电脑" },
			{ key: "о́вощи", value: "(мн.ч.) 蔬菜" },
			{ key: "окно́", value: "窗户" },
			{ key: "па́нда", value: "熊猫" },
			{ key: "парк", value: "公园" },
			{ key: "пло́хо", value: "不好" },
			{ key: "подруга", value: "女朋友" },
			{ key: "по́чта", value: "邮局" },
			{ key: "руба́шка", value: "衬衫" },
			{ key: "ручка", value: "笔" },
			{ key: "са́хар", value: "(ед.ч.) 糖（单数）" },
			{ key: "семья́", value: "家" },
			{ key: "соба́ка", value: "狗" },
			{ key: "сок", value: "果汁" },
			{ key: "со́лнце", value: "太阳" },
			{ key: "слон", value: "大象" },
			{ key: "уро́к", value: "课" },
			{ key: "фрукты", value: "(мн.ч.) 水果（复数）" },
			{ key: "хорошо́", value: "好" },
			{ key: "хурма́", value: "柿子" },
			{ key: "центр", value: "中心" },
			{ key: "цирк", value: "马戏" },
			{ key: "чай", value: "茶" },
			{ key: "час", value: "小时" },
			{ key: "ча́шка", value: "茶杯" },
			{ key: "чек", value: "小票" },
			{ key: "что", value: "什么" },
			{ key: "шкаф", value: "柜子" },
			{ key: "щи", value: "(мн.ч.) 蔬菜汤（复数)" },
			{ key: "ю́бка", value: "半裙" },
			{ key: "яблоко", value: "苹果" },
			/*{ key: "word102", value: "汉字102" },
			{ key: "word103", value: "汉字103" },
			{ key: "word104", value: "汉字104" },
			{ key: "word105", value: "汉字105" },
			{ key: "word106", value: "汉字106" },
			{ key: "word107", value: "汉字107" },
			{ key: "word108", value: "汉字108" },
			{ key: "word109", value: "汉字109" },
			{ key: "word110", value: "汉字110" },
			{ key: "word111", value: "汉字111" },
			{ key: "word112", value: "汉字112" },
			{ key: "word113", value: "汉字113" },
			{ key: "word114", value: "汉字114" },
			{ key: "word115", value: "汉字115" },
			{ key: "word116", value: "汉字116" },
			{ key: "word117", value: "汉字117" },
			{ key: "word118", value: "汉字118" },
			{ key: "word119", value: "汉字119" },
			{ key: "word120", value: "汉字120" },
			{ key: "word121", value: "汉字121" },
			{ key: "word122", value: "汉字122" },
			{ key: "word123", value: "汉字123" },
			{ key: "word124", value: "汉字124" },
			{ key: "word125", value: "汉字125" },
			{ key: "word126", value: "汉字126" },
			{ key: "word127", value: "汉字127" },
			{ key: "word128", value: "汉字128" },
			{ key: "word129", value: "汉字129" },
			{ key: "word130", value: "汉字130" },
			{ key: "word131", value: "汉字131" },
			{ key: "word132", value: "汉字132" },
			{ key: "word133", value: "汉字133" },
			{ key: "word134", value: "汉字134" },
			{ key: "word135", value: "汉字135" },
			{ key: "word136", value: "汉字136" },
			{ key: "word137", value: "汉字137" },
			{ key: "word138", value: "汉字138" },
			{ key: "word139", value: "汉字139" },
			{ key: "word140", value: "汉字140" },
			{ key: "word141", value: "汉字141" },
			{ key: "word142", value: "汉字142" },
			{ key: "word143", value: "汉字143" },
			{ key: "word144", value: "汉字144" },
			{ key: "word145", value: "汉字145" },
			{ key: "word146", value: "汉字146" },
			{ key: "word147", value: "汉字147" },
			{ key: "word148", value: "汉字148" },
			{ key: "word149", value: "汉字149" },
			{ key: "word150", value: "汉字150" },
			{ key: "word151", value: "汉字151" },
			{ key: "word152", value: "汉字152" },
			{ key: "word153", value: "汉字153" },
			{ key: "word154", value: "汉字154" },
			{ key: "word155", value: "汉字155" },
			{ key: "word156", value: "汉字156" },
			{ key: "word157", value: "汉字157" },
			{ key: "word158", value: "汉字158" },
			{ key: "word159", value: "汉字159" },
			{ key: "word160", value: "汉字160" },
			{ key: "word161", value: "汉字161" },
			{ key: "word162", value: "汉字162" },
			{ key: "word163", value: "汉字163" },
			{ key: "word164", value: "汉字164" },
			{ key: "word165", value: "汉字165" },
			{ key: "word166", value: "汉字166" },
			{ key: "word167", value: "汉字167" },
			{ key: "word168", value: "汉字168" },
			{ key: "word169", value: "汉字169" },
			{ key: "word170", value: "汉字170" },
			{ key: "word171", value: "汉字171" },
			{ key: "word172", value: "汉字172" },
			{ key: "word173", value: "汉字173" },
			{ key: "word174", value: "汉字174" },
			{ key: "word175", value: "汉字175" },
			{ key: "word176", value: "汉字176" },
			{ key: "word177", value: "汉字177" },
			{ key: "word178", value: "汉字178" },
			{ key: "word179", value: "汉字179" },
			{ key: "word180", value: "汉字180" },
			{ key: "word181", value: "汉字181" },
			{ key: "word182", value: "汉字182" },
			{ key: "word183", value: "汉字183" },
			{ key: "word184", value: "汉字184" },
			{ key: "word185", value: "汉字185" },
			{ key: "word186", value: "汉字186" },
			{ key: "word187", value: "汉字187" },
			{ key: "word188", value: "汉字188" },
			{ key: "word189", value: "汉字189" },
			{ key: "word190", value: "汉字190" },
			{ key: "word191", value: "汉字191" },
			{ key: "word192", value: "汉字192" },
			{ key: "word193", value: "汉字193" },
			{ key: "word194", value: "汉字194" },
			{ key: "word195", value: "汉字195" },
			{ key: "word196", value: "汉字196" },
			{ key: "word197", value: "汉字197" },
			{ key: "word198", value: "汉字198" },
			{ key: "word199", value: "汉字199" },
			{ key: "word200", value: "汉字200" }*/
    ],
    shuffledChineseWords: [],  // 存储打乱的汉字
    selectedRussianIndex: -1,
    selectedChineseIndex: -1,
    currentQuestionIndex: 0,
    questionsPerSet: 5,
		initialShuffled: false,  // 添加一个标志来记录是否进行了初始打乱
		initialQuestionPairs: [], // 存储初始的题目顺序
		initialShuffledChineseWords: [], // 存储初始打乱的汉字顺序
		answerHistory: [],
		isOne:false,
		arr:[],
		bigArr:[],
		bigLength:0,
  },

  onLoad: function () {
		let bigLength = Math.ceil(this.data.wordPairs.length / this.data.questionsPerSet) - 1;
		this.setData({
			bigLength
		})
		this.updateInitialShuffledChineseWords(); // 添加初始化函数
		this.updateInitialQuestionPairs(); // 添加一个初始化函数
    this.updateCurrentQuestionPairs(false);
  },

  // 打乱数组的函数
	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		//console.log(array);
		return array;
	},
	
	
  selectRussianWord(event) {
		const index = event.currentTarget.dataset.index;
		let item = this.data.currentQuestionPairs[index];
		const updatedHistory = [...this.data.answerHistory];
		
		// 取消右边汉字的选中状态
		if (this.data.selectedChineseIndex !== -1) {
			this.setData({ selectedChineseIndex: -1 });
		}
		
		this.setData({
			selectedRussianIndex: index,
			answerHistory: updatedHistory,
		});
	},	
	

	selectChineseWord(event) {
		const russianIndex = this.data.selectedRussianIndex;
		const chineseIndex = event.currentTarget.dataset.index;
		//console.log(russianIndex,chineseIndex);
		 // 取消左边俄文的选中状态
	
		if (russianIndex === -1) {
			wx.showToast({
				title: 'select Russian word first',
				icon: 'none',
			});
			return;
		}
		this.setData({
			selectedChineseIndex: chineseIndex,
		});
		const currentPair = this.data.currentQuestionPairs[this.data.selectedRussianIndex];
		const chineseWord = this.data.shuffledChineseWords[chineseIndex];
		const correctPair = this.data.wordPairs.find(pair => pair.key === currentPair);
	
		if (correctPair && correctPair.value === chineseWord) {
			const selectedAnswer = {
				russianIndex: russianIndex,
				chineseIndex: chineseIndex,
			};
			
			const updatedHistory = [...this.data.answerHistory];
			updatedHistory[this.data.currentQuestionIndex] = selectedAnswer;
			this.setData({
				answerHistory: updatedHistory,
			});
			
		}
	
		
		this.checkAnswer();
	},
	
	checkAnswer() {
		const currentPair = this.data.currentQuestionPairs[this.data.selectedRussianIndex];
		const chineseWord = this.data.shuffledChineseWords[this.data.selectedChineseIndex];
		
		const correctPair = this.data.wordPairs.find(pair => pair.key === currentPair);
		//console.log(correctPair);
	//	console.log(chineseWord);
		if (correctPair && correctPair.value === chineseWord) {
			// 答案正确，将正确的俄文词对和汉字高亮显示
			this.setData({
				selectedRussianIndex: this.data.selectedRussianIndex,
				selectedChineseIndex: this.data.selectedChineseIndex,
			});
		} else {
			// 答案错误，清除所选内容
			this.setData({
				selectedRussianIndex: -1,
				selectedChineseIndex: -1,
			});
		}
	},
	
	updateInitialQuestionPairs() {
		if (!this.data.initialShuffled) {
			const initialQuestionPairs = this.shuffleArray([...this.data.wordPairs.map(pair => pair.key)]);
			const initialShuffledChineseWords = initialQuestionPairs.map(key => {
				const pair = this.data.wordPairs.find(item => item.key === key);
				return pair ? pair.value : '';
			});
	
			this.setData({
				initialQuestionPairs: initialQuestionPairs,
				initialShuffledChineseWords: initialShuffledChineseWords,
				initialShuffled: true,
			});
		}
	},
	

  updateInitialShuffledChineseWords() {
    const initialShuffledChineseWords = this.shuffleArray([...this.data.wordPairs.map(pair => pair.value)]);
    this.setData({ initialShuffledChineseWords: initialShuffledChineseWords });
  },
  // 显示上一个问题集合
  showPreviousQuestion() {
    if (this.data.currentQuestionIndex > 0) {
      const prevIndex = this.data.currentQuestionIndex - 1;
      const prevAnswer = this.data.answerHistory[prevIndex];

      this.setData({
        currentQuestionIndex: prevIndex,
        selectedRussianIndex: prevAnswer ? prevAnswer.russianIndex : -1,
        selectedChineseIndex: prevAnswer ? prevAnswer.chineseIndex : -1,
      });

      this.updateCurrentQuestionPairs(true);
    }
  },

   // 显示下一个问题集合
	 showNextQuestion() {
    const maxQuestionIndex = Math.ceil(this.data.wordPairs.length / this.data.questionsPerSet) - 1;
    if (this.data.currentQuestionIndex < maxQuestionIndex) {
      const nextIndex = this.data.currentQuestionIndex + 1;
      const nextAnswer = this.data.answerHistory[nextIndex];

      this.setData({
        selectedRussianIndex: nextAnswer ? nextAnswer.russianIndex : -1,
        selectedChineseIndex: nextAnswer ? nextAnswer.chineseIndex : -1,
        currentQuestionIndex: nextIndex,
      });

      this.updateCurrentQuestionPairs(false);
    }
  },

	updateCurrentQuestionPairs(previousQuestion) {
		//开始索引
		const start = this.data.currentQuestionIndex * this.data.questionsPerSet;
		//结束索引
		const end = start + this.data.questionsPerSet;
		//console.log(end);
		//在wordPairs种第几组
		let endLength = Math.ceil(end / this.data.questionsPerSet) - 1;
		console.log(endLength);
		//console.log(this.data.bigLength);
		const currentQuestionPairs = this.data.initialQuestionPairs.slice(start, end);
		const shuffledChineseWords = this.data.initialShuffledChineseWords.slice(start, end);
	//	console.log(shuffledChineseWords);
	//打乱
		let arr = this.shuffleArray(shuffledChineseWords);
		//（为了防止重复添加）
		//如果数组小于当前组次，则添加
	 // 如果不是上一题并且数组不在bigArr中，则添加
		if (endLength> this.data.bigArr.length -1&&!previousQuestion&&!this.data.bigArr.some(item => JSON.stringify(item) === JSON.stringify(arr))) {
			this.data.bigArr.push(arr);
		}
		//获取当前组的数据
		console.log(this.data.bigArr.length,this.data.bigArr);
		this.setData({
			currentQuestionPairs: currentQuestionPairs,
			shuffledChineseWords: this.data.bigArr[endLength],
		});
	},
	
});
// ===== 診断データ =====
const questions = [
    {
        id: 1,
        text: "秋のイベントで一番ワクワクするのは？",
        answers: [
            { text: "秋フェス、コンサート", type: "urban" },
            { text: "収穫祭、地域のマルシェ", type: "bohemian" },
            { text: "ハロウィンの仮装パーティー", type: "casual" },
            { text: "美術館の特別展やファッションイベント", type: "feminine" }
        ]
    },
    {
        id: 2,
        text: "お出かけの時に最初に決めるアイテムはどれ？",
        answers: [
            { text: "アウター", type: "urban" },
            { text: "靴・バッグ", type: "bohemian" },
            { text: "トップスやボトムス", type: "casual" },
            { text: "アクセサリー", type: "feminine" }
        ]
    },
    {
        id: 3,
        text: "秋の朝、最初に飲みたいものは？",
        answers: [
            { text: "淹れたてのブラックコーヒー", type: "urban" },
            { text: "温かいミルクティーやラテ", type: "bohemian" },
            { text: "フレッシュなスムージー、ジュース", type: "casual" },
            { text: "ハーブティーや白湯", type: "feminine" }
        ]
    },
    {
        id: 4,
        text: "休日のランチ、誰かと行くならどんなお店？",
        answers: [
            { text: "落ち着いた雰囲気の隠れ家カフェやレストラン", type: "urban" },
            { text: "アットホームな雰囲気の食堂", type: "bohemian" },
            { text: "カジュアルなファストフード店", type: "casual" },
            { text: "秋の味覚たっぷりの和食屋", type: "feminine" }
        ]
    },
    {
        id: 5,
        text: "学習が終わった後、どんな過ごし方が好き？",
        answers: [
            { text: "興味のある講座・イベントに参加", type: "urban" },
            { text: "映画や読書をしてリラックス", type: "bohemian" },
            { text: "とにかくのんびりごーろごろ", type: "casual" },
            { text: "友人とワイワイ語り合う", type: "feminine" }
        ]
    },
    {
        id: 6,
        text: "秋のメイク、もし挑戦するなら？",
        answers: [
            { text: "クールなスモーキーアイメイク", type: "urban" },
            { text: "温かみのあるテラコッタカラーのメイク", type: "bohemian" },
            { text: "血色を良く見せるナチュラルメイク", type: "casual" },
            { text: "ほんのりツヤ感のある上品なメイク", type: "feminine" }
        ]
    },
    {
        id: 7,
        text: "秋の旅行に行くなら、どこへ行きたい？",
        answers: [
            { text: "おしゃれなカフェやショッピングモールがあるTHE都会", type: "urban" },
            { text: "古い街並みや自然が残る温泉宿", type: "bohemian" },
            { text: "友人と賑やかに楽しめるテーマパーク", type: "casual" },
            { text: "食欲の秋！！果物狩りにGO", type: "feminine" }
        ]
    },
    {
        id: 8,
        text: "普段、よく身につける柄は？",
        answers: [
            { text: "ストライプや無地", type: "urban" },
            { text: "ボタニカル柄、アニマル柄", type: "bohemian" },
            { text: "チェック柄", type: "casual" },
            { text: "レースやドット柄", type: "feminine" }
        ]
    },
    {
        id: 9,
        text: "買い物で一番時間をかけるのは？",
        answers: [
            { text: "長く着れるものや質の良いものをじっくり選ぶ", type: "urban" },
            { text: "珍しい雑貨や一点もののアイテムを探す", type: "bohemian" },
            { text: "流行のアイテムをチェックする", type: "casual" },
            { text: "自分に似合うアイテムを探す、試着する", type: "feminine" }
        ]
    },
    {
        id: 10,
        text: "あなたのファッションへの考え方に一番近いのは？",
        answers: [
            { text: "品と華やかさを両立させていたい", type: "urban" },
            { text: "好きなものを自由に組み合わせて楽しみたい", type: "bohemian" },
            { text: "居心地の良さと、自分に似合うスタイルを追求したい", type: "casual" },
            { text: "流行を取り入れつつ、自分らしさを大切にしたい", type: "feminine" }
        ]
    }
];

const resultData = {
    urban: {
        title: "アーバン・シック",
        description: "洗練された都会的なスタイル。シンプルながら上質な素材やシルエットにこだわります。トレンドをさりげなく取り入れるのが得意。",
        items: ["Vネックのニット", "ロング丈のコート", "レザーの小物", "テーパードパンツ"],
        colors: [
            { color: "#ba8b40", name: "オーカー" },
            { color: "#e9dacb", name: "シャンパン" },
            { color: "#504946", name: "トープ" },
            { color: "#001e43", name: "ミッドナイトブルー" },
            { color: "#7D1538", name: "ボルドー" }
        ],
        cosmetics: "スモーキーなアイシャドウ、マットな赤リップ"
    },
    bohemian: {
        title: "ボヘミアン・クラシック",
        description: "自由でロマンティックな雰囲気と、上品さを両立させたスタイル。ヴィンテージ感のあるアイテムや、天然素材を好みます。",
        items: ["花柄のロングワンピース", "フリンジ付きのバッグ", "コーデュロイのジャケット", "ローヒールブーツ"],
        colors: [
            { color: "#9a0d7c", name: "フランボワーズ" },
            { color: "#556B2F", name: "カーキ" },
            { color: "#DAA520", name: "マスタード" },
            { color: "#B66655", name: "テラコッタ" }
        ],
        cosmetics: "グリッター入りのアイシャドウ、ナチュラルなツヤ肌ファンデーション"
    },
    casual: {
        title: "コンサバ・カジュアル",
        description: "週末のお出かけにぴったりな、リラックス感と洗練さを兼ね備えたスタイル。動きやすさも重視します。",
        items: ["オーバーサイズのパーカー", "プリーツスカート", "スニーカー", "チェック柄のストール"],
        colors: [
            { color: "#8da0b6", name: "フレンチグレイ" },
            { color: "#f7b977", name: "アプリコット" },
            { color: "#e29399", name: "オールドローズ" },
            { color: "#a5c9c1", name: "ウォーターグリーン" }
        ],
        cosmetics: "シアーなグロス、血色感のあるチーク"
    },
    feminine: {
        title: "フェミニン・エレガンス",
        description: "柔らかく、優雅さを最大限に引き出すスタイル。レースやフリル、ドレープなど、繊細なデザインを好みます。",
        items: ["ドレープが効いたアイテム", "フレアスカート", "ツイードのジャケット", "パール付きのアクセサリー"],
        colors: [
            { color: "#e8c59c", name: "ヴァニラ" },
            { color: "#FFC0CB", name: "ローズピンク" },
            { color: "#E6E6FA", name: "ラベンダー" },
            { color: "#9fa09e", name: "アッシュグレイ" }
        ],
        cosmetics: "リキッドタイプのハイライト、ピンク系のリップ"
    }
};

// ===== グローバル変数 =====
let currentQuestionIndex = 0;
let scores = { urban: 0, bohemian: 0, casual: 0, feminine: 0 };
let selectedAnswer = null;

// ===== DOM要素の取得 =====
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

// ===== イベントリスナーの設定 =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    addEventListeners();
});

function addEventListeners() {
    startBtn.addEventListener('click', startDiagnosis);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartDiagnosis);
    shareBtn.addEventListener('click', shareResult);
}

// ===== アプリ初期化 =====
function initializeApp() {
    // 秋の葉っぱアニメーション
    createFallingLeaves();
    // パーティクルエフェクト
    createParticles();
}

// ===== 落ち葉アニメーション =====
function createFallingLeaves() {
    const leafEmojis = ['🍂', '🍁', '🌿', '🍃'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createLeaf(leafEmojis[Math.floor(Math.random() * leafEmojis.length)]);
        }, i * 500);
    }
    
    // 継続的に葉っぱを生成
    setInterval(() => {
        if (Math.random() > 0.7) {
            createLeaf(leafEmojis[Math.floor(Math.random() * leafEmojis.length)]);
        }
    }, 2000);
}

function createLeaf(emoji) {
    const leaf = document.createElement('div');
    leaf.textContent = emoji;
    leaf.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * window.innerWidth}px;
        font-size: ${Math.random() * 20 + 15}px;
        pointer-events: none;
        z-index: 1;
        animation: fall ${Math.random() * 3 + 4}s linear forwards;
        opacity: ${Math.random() * 0.7 + 0.3};
    `;
    
    document.body.appendChild(leaf);
    
    // アニメーションが終わったら要素を削除
    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

// CSS アニメーションを動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ===== パーティクルエフェクト =====
function createParticles() {
    const colors = ['#d4a574', '#cd853f', '#daa520', '#f4e5d3'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: float ${Math.random() * 4 + 3}s ease-in-out infinite;
            opacity: ${Math.random() * 0.6 + 0.2};
        `;
        document.body.appendChild(particle);
    }
}

// ===== 画面遷移アニメーション =====
function showScreen(targetScreen) {
    const currentActiveScreen = document.querySelector('.screen.active');
    
    if (currentActiveScreen) {
        // フェードアウト
        currentActiveScreen.style.transform = 'translateY(-50px)';
        currentActiveScreen.style.opacity = '0';
        
        setTimeout(() => {
            currentActiveScreen.classList.remove('active');
            currentActiveScreen.style.transform = '';
            currentActiveScreen.style.opacity = '';
            
            // フェードイン
            targetScreen.style.transform = 'translateY(50px)';
            targetScreen.style.opacity = '0';
            targetScreen.classList.add('active');
            
            setTimeout(() => {
                targetScreen.style.transform = '';
                targetScreen.style.opacity = '';
            }, 50);
        }, 300);
    } else {
        targetScreen.classList.add('active');
    }
}

// ===== キラキラエフェクト =====
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            font-size: ${Math.random() * 10 + 10}px;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 0.8s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
}

// ===== 診断開始 =====
function startDiagnosis() {
    // ボタンにキラキラエフェクト
    createSparkles(startBtn);
    
    setTimeout(() => {
        currentQuestionIndex = 0;
        scores = { urban: 0, bohemian: 0, casual: 0, feminine: 0 };
        showScreen(questionScreen);
        displayQuestion();
    }, 500);
}

// ===== 質問表示 =====
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const currentQuestionElement = document.getElementById('current-question');
    const progressFill = document.getElementById('progress-fill');
    
    // プログレスバー更新
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // 質問テキストをタイプライター風に表示
    typewriterEffect(questionText, question.text);
    
    // 回答選択肢をクリア
    answersContainer.innerHTML = '';
    selectedAnswer = null;
    nextBtn.disabled = true;
    
    // 回答選択肢を順次表示
    question.answers.forEach((answer, index) => {
        setTimeout(() => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.textContent = answer.text;
            answerElement.style.transform = 'translateX(-100px)';
            answerElement.style.opacity = '0';
            
            answerElement.addEventListener('click', () => selectAnswer(answerElement, answer));
            
            answersContainer.appendChild(answerElement);
            
            // スライドインアニメーション
            setTimeout(() => {
                answerElement.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                answerElement.style.transform = 'translateX(0)';
                answerElement.style.opacity = '1';
            }, 50);
        }, index * 150);
    });
}

// ===== タイプライターエフェクト =====
function typewriterEffect(element, text) {
    element.textContent = '';
    let i = 0;
    
    const typeInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        
        if (i >= text.length) {
            clearInterval(typeInterval);
        }
    }, 100);
}

// ===== 回答選択 =====
function selectAnswer(element, answer) {
    // 以前の選択を解除
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // 新しい選択をハイライト
    element.classList.add('selected');
    selectedAnswer = answer;
    nextBtn.disabled = false;
    
    // パルスエフェクト
    element.style.animation = 'pulse 0.3s ease-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

// パルスアニメーションを追加
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(pulseStyle);

// ===== 次の質問へ =====
function nextQuestion() {
    if (!selectedAnswer) return;
    
    // スコア加算
    scores[selectedAnswer.type]++;
    
    // 質問コンテナにフェードアウトエフェクト
    const questionContainer = document.querySelector('.question-container');
    questionContainer.style.transform = 'translateX(-100%)';
    questionContainer.style.opacity = '0';
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            // 次の質問を表示
            questionContainer.style.transform = 'translateX(100%)';
            setTimeout(() => {
                displayQuestion();
                questionContainer.style.transition = 'all 0.4s ease';
                questionContainer.style.transform = 'translateX(0)';
                questionContainer.style.opacity = '1';
            }, 50);
        } else {
            // 診断完了 - プログレスバーを100%にしてから遷移
            const progressFill = document.getElementById('progress-fill');
            progressFill.style.width = '100%';
            
            setTimeout(() => {
                showLoadingAndResult();
            }, 500);
        }
    }, 300);
}

// ===== ローディングと結果表示 =====
function showLoadingAndResult() {
    showScreen(loadingScreen);
    
    // ローディング時間（2秒）
    setTimeout(() => {
        showScreen(resultScreen);
        displayResult();
        celebrateResult();
    }, 2000);
}

// ===== 結果表示 =====
function displayResult() {
    // 最も高いスコアのタイプを決定
    const resultType = Object.keys(scores).reduce((a, b) => 
        scores[a] > scores[b] ? a : b
    );
    
    const result = resultData[resultType];
    
    // 結果をアニメーションで表示
    setTimeout(() => {
        document.getElementById('result-type').textContent = result.title;
    }, 200);
    
    setTimeout(() => {
        document.getElementById('result-description').textContent = result.description;
    }, 400);
    
    setTimeout(() => {
        const itemsList = document.getElementById('result-items');
        itemsList.innerHTML = '';
        result.items.forEach((item, index) => {
            setTimeout(() => {
                const li = document.createElement('li');
                li.textContent = item;
                li.style.transform = 'translateY(20px)';
                li.style.opacity = '0';
                itemsList.appendChild(li);
                
                setTimeout(() => {
                    li.style.transition = 'all 0.3s ease';
                    li.style.transform = 'translateY(0)';
                    li.style.opacity = '1';
                }, 50);
            }, index * 100);
        });
    }, 600);
    
    setTimeout(() => {
        displayColorPalette(result.colors);
    }, 800);
    
    setTimeout(() => {
        document.getElementById('result-cosmetics').textContent = result.cosmetics;
    }, 1000);
}

// ===== カラーパレット表示 =====
function displayColorPalette(colors) {
    const colorPalette = document.getElementById('result-colors');
    colorPalette.innerHTML = '';
    
    colors.forEach((colorData, index) => {
        setTimeout(() => {
            const colorSwatch = document.createElement('div');
            colorSwatch.className = 'color-swatch';
            colorSwatch.style.backgroundColor = colorData.color;
            colorSwatch.style.transform = 'scale(0)';
            colorSwatch.style.opacity = '0';
            
            const colorName = document.createElement('div');
            colorName.className = 'color-name';
            colorName.textContent = colorData.name;
            colorSwatch.appendChild(colorName);
            
            colorPalette.appendChild(colorSwatch);
            
            setTimeout(() => {
                colorSwatch.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                colorSwatch.style.transform = 'scale(1)';
                colorSwatch.style.opacity = '1';
            }, 50);
        }, index * 100);
    });
}

// ===== 結果お祝いエフェクト =====
function celebrateResult() {
    // 紙吹雪エフェクト
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
}

function createConfetti() {
    const colors = ['#d4a574', '#cd853f', '#daa520', '#f4e5d3', '#8b4513'];
    const confetti = document.createElement('div');
    
    confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * window.innerWidth}px;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        pointer-events: none;
        z-index: 1000;
        animation: confettiFall ${Math.random() * 2 + 2}s ease-out forwards;
        transform: rotate(${Math.random() * 360}deg);
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

// 紙吹雪アニメーション
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(${window.innerHeight + 50}px) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ===== 診断リスタート =====
function restartDiagnosis() {
    createSparkles(restartBtn);
    
    setTimeout(() => {
        currentQuestionIndex = 0;
        scores = { urban: 0, bohemian: 0, casual: 0, feminine: 0 };
        selectedAnswer = null;
        
        // プログレスバーをリセット
        document.getElementById('progress-fill').style.width = '0%';
        
        // 質問コンテナのスタイルをリセット
        const questionContainer = document.querySelector('.question-container');
        if (questionContainer) {
            questionContainer.style.transform = '';
            questionContainer.style.opacity = '';
            questionContainer.style.transition = '';
        }
        
        // 次へボタンの状態をリセット
        nextBtn.disabled = true;
        
        showScreen(startScreen);
    }, 300);
}

// ===== 結果シェア =====
function shareResult() {
    const resultType = document.getElementById('result-type').textContent;
    
    // X投稿用のテキストとURL
    const shareText = `私のファッションタイプは「${resultType}」でした！🍂✨\n\n秋のファッション診断で自分に似合うスタイルを見つけよう！`;
    const shareUrl = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(shareText);
    
    // X投稿用URL
    const xUrl = `https://x.com/intent/tweet?text=${encodedText}&url=${shareUrl}`;
    
    // 新しいウィンドウでX投稿画面を開く
    const popup = window.open(
        xUrl,
        'twitter-share',
        'width=600,height=400,scrollbars=yes,resizable=yes'
    );
    
    // ポップアップが開けない場合のフォールバック
    if (!popup) {
        // Web Share API が利用可能な場合
        if (navigator.share) {
            navigator.share({
                title: '秋のファッション診断結果',
                text: shareText,
                url: window.location.href
            }).catch(err => {
                console.log('シェアがキャンセルされました');
            });
        } else {
            // クリップボードにコピー
            const fullShareText = `${shareText}\n${window.location.href}`;
            navigator.clipboard.writeText(fullShareText).then(() => {
                // コピー完了の視覚的フィードバック
                const originalText = shareBtn.textContent;
                shareBtn.textContent = 'コピーしました！';
                shareBtn.style.background = 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)';
                
                setTimeout(() => {
                    shareBtn.textContent = originalText;
                    shareBtn.style.background = '';
                }, 2000);
            }).catch(() => {
                alert('シェア用テキスト:\n\n' + fullShareText);
            });
        }
    }
    
    createSparkles(shareBtn);
}

// index.htmlに組み込んで使用する簡易テストコード実装

// テスト実行フラグ（開発時のみtrue）
const TEST_MODE = false; // 本番時はfalseになってることを確認

function runBasicTests() {
    if (!TEST_MODE) return;
    
    console.log('基本機能テストを開始');
    
    // 1. 質問データの整合性テスト
    testQuestionDataIntegrity();
    
    // 2. スコア計算テスト
    testScoreCalculation();
    
    // 3. 結果判定テスト
    testResultDetermination();
    
    console.log('基本機能テスト完了');
}

// 質問データの整合性テスト
function testQuestionDataIntegrity() {
    try {
        const expectedQuestions = 10;
        const expectedAnswers = 4;
        const expectedTypes = ['urban', 'bohemian', 'casual', 'feminine'];
        
        // 質問数チェック
        if (questions.length !== expectedQuestions) {
            throw new Error(`質問数が不正: 期待値=${expectedQuestions}, 実際=${questions.length}`);
        }
        
        // 各質問の整合性チェック
        questions.forEach((q, index) => {
            if (q.answers.length !== expectedAnswers) {
                throw new Error(`質問${index + 1}の選択肢数が不正: ${q.answers.length}`);
            }
            
            q.answers.forEach((answer, ansIndex) => {
                if (!expectedTypes.includes(answer.type)) {
                    throw new Error(`質問${index + 1}選択肢${ansIndex + 1}のタイプが不正: ${answer.type}`);
                }
            });
        });
        
        console.log('✓ 質問データの整合性: 正常');
    } catch (error) {
        console.error('✗ 質問データの整合性: エラー -', error.message);
    }
}

// スコア計算テスト
function testScoreCalculation() {
    try {
        // テスト用スコア
        let testScores = { urban: 0, bohemian: 0, casual: 0, feminine: 0 };
        
        // テスト回答パターン（urbanが最多になるパターン）
        const testAnswers = ['urban', 'urban', 'urban', 'bohemian', 'casual', 'urban', 'feminine', 'urban', 'urban', 'casual'];
        
        // スコア計算
        testAnswers.forEach(type => {
            testScores[type]++;
        });
        
        // 期待値チェック
        const expectedUrban = 6;
        if (testScores.urban !== expectedUrban) {
            throw new Error(`スコア計算エラー: urban期待値=${expectedUrban}, 実際=${testScores.urban}`);
        }
        
        console.log('✓ スコア計算: 正常', testScores);
    } catch (error) {
        console.error('✗ スコア計算: エラー -', error.message);
    }
}

// 結果判定テスト
function testResultDetermination() {
    try {
        // テストスコア
        const testScores = { urban: 6, bohemian: 2, casual: 1, feminine: 1 };
        
        // 最高スコア判定（実際のアプリと同じロジック）
        const resultType = Object.keys(testScores).reduce((a, b) => 
            testScores[a] > testScores[b] ? a : b
        );
        
        // 期待値チェック
        const expectedResult = 'urban';
        if (resultType !== expectedResult) {
            throw new Error(`結果判定エラー: 期待値=${expectedResult}, 実際=${resultType}`);
        }
        
        // 結果データ存在チェック
        if (!resultData[resultType]) {
            throw new Error(`結果データが存在しません: ${resultType}`);
        }
        
        console.log('✓ 結果判定: 正常', `結果=${resultType}`);
    } catch (error) {
        console.error('✗ 結果判定: エラー -', error.message);
    }
}

// 開発用テスト実行関数（コンソールから実行可能）
window.debugTest = function() {
    const originalTestMode = TEST_MODE;
    window.TEST_MODE = true;
    runBasicTests();
    window.TEST_MODE = originalTestMode;
};

// アプリ初期化時にテスト実行
document.addEventListener('DOMContentLoaded', () => {
    if (TEST_MODE) {
        setTimeout(() => {
            runBasicTests();
        }, 1000);
    }
});

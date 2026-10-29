import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDialogue, isProject } from '../lib/dialogue.ts';
test('화자 재사용, 줄바꿈, 첫 콜론만 분리',()=>{const p=parseDialogue('나: 12:30 어때?\r\n다음 줄\r\n친구： 좋아\r\n나: 응');assert.equal(p.speakers.length,2);assert.equal(p.messages.length,3);assert.equal(p.messages[0].displayText,'12:30 어때?\n다음 줄');assert.equal(p.messages[0].speakerId,p.messages[2].speakerId);});
test('화자 없는 대사는 검수 표시',()=>{const p=parseDialogue('안녕하세요\n반가워요');assert.equal(p.messages[0].review,true);assert.equal(p.messages[0].displayText,'안녕하세요\n반가워요');});
test('5명 초과 입력은 부분 적용 없이 거부',()=>{const p=parseDialogue('A: 1\nB: 2\nC: 3\nD: 4\nE: 5');assert.ok(p.error);assert.equal(p.messages.length,0);});
test('빈 입력과 빈 대사 처리',()=>{assert.ok(parseDialogue(' \n ').error);assert.equal(parseDialogue('나:').messages[0].review,true);});
test('잘못된 저장 데이터 거부',()=>{assert.equal(isProject({id:'1',title:'x',speakers:[{}],messages:[]}),false);assert.equal(isProject(null),false);});

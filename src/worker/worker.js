import { Z80 } from './z80';
import { ROM } from './ROM';
import MemoryMap from 'nrf-intel-hex';

let active = false;
let yieldFlag = false;

const memory = Array(4000).fill(0xFF);
const inPorts = Array(256).fill(0xFF);
const outPorts = Array(256).fill(0xFF);

const cpu = Z80({
    mem_read: (addr) => memory[addr],
    mem_write: (addr, value) => memory[addr] = value,
    io_read: (port) => {
        yieldFlag = true;
        return inPorts[port & 0xFF];
    },
    io_write: (port, value) => {
        yieldFlag = true;
        outPorts[port & 0xFF] = value;
    },
});

self.onmessage = event => {
    if (event.data.type === 'INIT') {
        console.log('init');
        loadROM();
        cpu.reset();
        active = true;
        run();
    }
    if (event.data.type === 'EXIT') {
        active = false;
    }
    else if (event.data.type === 'RESET') {
        cpu.reset();
    }
    else if (event.data.type === 'SET_INPUT_VALUE') {
        console.log('set input value', event.data);
        const { port, value } = event.data;
        inPorts[port] = value;
    }
    else if (event.data.type === 'NMI') {
        console.log('NMI');
        cpu.interrupt(true);
    }
};

function run() {
    for (let i = 0; i < 500 ; i++) {
    // while (!yieldFlag) {
        cpu.run_instruction();
        const state = cpu.getState();
        const random = Math.random() * 1000;
        var buffer = new ArrayBuffer(4);
        var view = new Uint8Array(buffer);
        view[0] = outPorts[0];
        view[1] = outPorts[1];
        view[2] = outPorts[2];
        view[3] = random;
        self.postMessage({ buffer: buffer }, [buffer]);
    }
    yieldFlag = false;
    if (active) requestAnimationFrame(run);
}

function loadROM() {
    const blocks = MemoryMap.fromHex(ROM);

    for (let address of blocks.keys()) {
      const block = blocks.get(address);
      for (let i = address; i < address + block.length; i++) {
        memory[i] = block[i];
      }
    }
  }
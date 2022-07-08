const { deviceConfigs } = require('./env');

function iCAP_ClientMockDynamicData() {
  return JSON.stringify({
    action: 'Recovering',
    CPU: {
      0: {
        Freq: 1099,
        Usage: 30,
        Temp: 15,
        V: 9,
        status: 'off',
        frequency: 0,
        loading: 0,
      },
      1: {
        Freq: 366,
        Usage: 55,
        Temp: 9,
        V: 8,
        status: 'off',
        frequency: 0,
        loading: 0,
      },
      2: {
        Freq: 1374,
        Usage: 99,
        Temp: 0,
        V: 8,
        status: 'off',
        frequency: 0,
        loading: 0,
      },
      3: {
        Freq: 850,
        Usage: 2,
        Temp: 29,
        V: 10,
        status: 'off',
        frequency: 0,
        loading: 0,
      },
      Freq: 439,
      Usage: 56,
      FanRPM: 1882,
    },
    MEM: {
      Usage: 11,
      memUsed: 12230970,
      temp: 14,
    },
    GPU: {
      CoreClock: 910,
      Temp: 4,
      MemUsed: 18,
      Load: 93,
      FanTemp: 7,
    },
    Dev: '1',
    Storage: [
      {
        Index: 0,
        SN: 'A123456',
        smart: {
          9: 15555,
          12: 34,
          167: 53,
          194: 35,
        },
        Health: 95,
        PECycle: 3000,
        Lifespan: 2522,
        iAnalyzer: {
          Enable: 2,
          SRC: 5551597,
          RRC: 63354157,
          SWC: 24494944,
          RWC: 216536595,
          SR: {
            0: 37744,
            1: 3453619,
            2: 206600,
            3: 238000,
            4: 162505,
            5: 210283,
            6: 1242846,
          },
          SW: {
            0: 1004966,
            1: 2034035,
            2: 630861,
            3: 358854,
            4: 956974,
            5: 533432,
            6: 18975822,
          },
          RR: {
            0: 866599,
            1: 23307833,
            2: 8429518,
            3: 5573099,
            4: 4182483,
            5: 3179252,
            6: 17815373,
          },
          RW: {
            0: 2055102,
            1: 2913292,
            2: 6821845,
            3: 5007513,
            4: 14555533,
            5: 21662461,
            6: 163520849,
          },
        },
      },
      {
        Index: 1,
        SN: 'A123456',
        smart: {
          9: 15555,
          12: 34,
          167: 53,
          194: 35,
        },
        Health: 24,
        PECycle: 3000,
        Lifespan: 658,
        iAnalyzer: {
          Enable: 2,
          SRC: 5551597,
          RRC: 63354157,
          SWC: 24494944,
          RWC: 216536595,
          SR: {
            0: 37744,
            1: 3453619,
            2: 206600,
            3: 238000,
            4: 162505,
            5: 210283,
            6: 1242846,
          },
          SW: {
            0: 1004966,
            1: 2034035,
            2: 630861,
            3: 358854,
            4: 956974,
            5: 533432,
            6: 18975822,
          },
          RR: {
            0: 866599,
            1: 23307833,
            2: 8429518,
            3: 5573099,
            4: 4182483,
            5: 3179252,
            6: 17815373,
          },
          RW: {
            0: 2055102,
            1: 2913292,
            2: 6821845,
            3: 5007513,
            4: 14555533,
            5: 21662461,
            6: 163520849,
          },
        },
      },
    ],
    EAPI: {
      TEST_TYPE: {
        'System temperature': '39.0000',
        'CPU temperature': '38.0000',
        VCORE: '1.6160',
        VBAT: '3.0880',
        'Fan mode': 'Normal Mode',
        'Fan speed': '0.0000',
      },
    },
    FPGA: {
      DNA: '40020000015DF6A81C31C285',
      'System Configuration_OS name': 'Linux',
      'System Configuration_Release': '5.4.0-xilinx-v2020.2',
      'System Configuration_Version': '#1SMPWedMar2307',
      'System Configuration_Machine': 'aarch64',
      'System Configuration_Glibc': '2.31',
      'System Configuration_Distribution': 'Ubuntu20.04.3LTS',
      'System Configuration_Now': 'FriApr2203',
      'XRT Information_Version': '2.8.0',
      'XRT Information_Git Hash': '',
      'XRT Information_Git Branch': '',
      'XRT Information_Build Date': '2021-09-1410',
      'XRT Information_ZOCL': '2.8.0,',
      'CPU Utilization_CPU0': '14.778899%',
      'CPU Utilization_CPU1': '0.100000%',
      'CPU Utilization_CPU2': '100.100000%',
      'CPU Utilization_CPU3': '0.100000%',
      'RAM Utilization_MemTotal': '4029500kB',
      'RAM Utilization_MemFree': '1731572kB',
      'RAM Utilization_MemAvailable': '3395504kB',
      'Swap Mem Utilization_SwapTotal': '0kB',
      'Swap Mem Utilization_SwapFree': '0kB',
      'AMS CTRL_System PLLs voltage measurement, VCC_PSLL': '1195mV',
      'AMS CTRL_PL internal voltage measurement, VCC_PSBATT': '714mV',
      'AMS CTRL_Voltage measurement for six DDR I/O PLLs, VCC_PSDDR_PLL': '1793mV',
      'AMS CTRL_VCC_PSINTFP_DDR voltage measurement': '841mV',
      'PS Sysmon_LPD temperature measurement ': '57C',
      'PS Sysmon_FPD temperature measurement (REMOTE) ': '57C',
      'PS Sysmon_VCC PS FPD voltage measurement (supply 2)': '837mV',
      'PS Sysmon_PS IO Bank 500 voltage measurement (supply 6)': '1784mV',
      'PS Sysmon_VCC PS GTR voltage': '852mV',
      'PS Sysmon_VTT PS GTR voltage': '1797mV',
      'PL Sysmon_PL temperature': '56C',
      'CMA Mem Utilization_CmaTotal': '1024000kB',
      'CMA Mem Utilization_CmaFree': '966564kB',
      'CPU Frequency_CPU0': '1333.333008MHz',
      'CPU Frequency_CPU1': '1333.333008MHz',
      'CPU Frequency_CPU2': '1333.333008MHz',
      'CPU Frequency_CPU3': '1333.333008MHz',
    },
  });
}

function sysInnoMockData() {
  return JSON.stringify({
    id: '123456',
    model: 'FP',
    time: 1234567,
    in: 516,
    out: 391,
    now: 125,
    max: 133,
    average: 46,
  });
}

// only for test
const iCAP_ClientPathList = Object.values(deviceConfigs.iCAP_Client).map((v) => v.path);
const sysInnoPathList = Object.values(deviceConfigs.sysInno).map((v) => v.path);

module.exports = {
  iCAP_ClientMockDynamicData,
  iCAP_ClientPathList,
  sysInnoMockData,
  sysInnoPathList,
};

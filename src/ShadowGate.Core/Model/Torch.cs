using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ShadowGate.Core.Model
{
    public class Torch
    {
        public TorchStatus Status { get; set; }
        public int BurnTime { get; private set; }
        public int BurnWarningTime { get; private set; }

        public Torch()
        {
            this.BurnTime = 100;
            this.BurnWarningTime = 70;
        }

        public void PutOut()
        {
            this.Status = TorchStatus.Unlit;
        }
        public  void Ignite()
        {
            this.Status = TorchStatus.Burning;
        }

    }
}

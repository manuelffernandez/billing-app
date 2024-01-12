import { modelNames } from '@/utils/constants/model-names'
import { Schema, Types, model } from 'mongoose'

const saleSchema = new Schema(
  {
    totalAmount: { type: Number, require: true },
    userId: { type: Types.ObjectId, ref: modelNames.user, require: true }
  },
  {
    timestamps: { createdAt: 'createdAt' }
  }
)

const SaleModel = model(modelNames.sale, saleSchema)

export default SaleModel
